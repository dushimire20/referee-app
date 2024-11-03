import { useState } from 'react';
import Slay from "@/assets/Saly.png";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface SignInProps {
  setUser: (user: any) => void; // Adjust the type according to your user object
}

const SignIn: React.FC<SignInProps> = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await Axios.post('https://referee-backend.vercel.app/login/referee', {
        email,
        password,
      });
      if (response.status === 200 && response.data.token) {
        console.log('User data received from server:', response.data);
        const { userId } = response.data;
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.referee));
        localStorage.setItem('userId', userId);
        setUser(response.data.referee);
        console.log("User ID from localStorage:", localStorage.getItem('userId'));
        navigate('/dashboard');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center mx-auto min-h-screen bg-gradient-to-b from-secondary-100 to-primary-100 pt-20">
      <div className="py-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <p className="font-poppins font-semibold text-4xl md:text-5xl text-center">Welcome back!</p>
          <img alt="signup" src={Slay} className="w-3/4 md:w-full mt-4" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-primary-100 p-8 rounded-3xl shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-100 text-lg mb-2">
                Welcome to <span className="text-secondary-100 font-bold">ARAB.</span>
              </label>
              <p className="text-3xl md:text-4xl leading-tight">Sign in</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-100 mb-2">Enter your username or email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full h-12 px-4 text-gray-100 border-secondary-100 rounded-lg outline-none border-2"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-100 mb-2">Enter your Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full h-12 px-4 text-gray-100 border-secondary-100 rounded-lg outline-none border-2"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button type="submit" className="w-full h-12 bg-secondary-100 text-primary-100 rounded-lg">
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
            <Link to="/forgotPassword" className="block text-center text-secondary-100 mt-4">Forgot password</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;