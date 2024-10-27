import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { levels } from "@/data/usersRelatedData.ts";

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  roles: string;
  phoneNumber: string;
  assignment: string;
  level: string;
}

const CreateUserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [assignment, setAssignment] = useState('');
  const [level, setLevel] = useState('');
  const [roles, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newReferee: Profile & { password: string } = {
      firstName,
      lastName,
      email,
      phoneNumber,
      roles,
      assignment,
      level,
      password
    };

    Axios.post('https://referee-backend.vercel.app/adminDashboard/createReferee', newReferee)
      .then(response => {
        if (response.data.status) {
          alert(`${assignment} created successfully!`);
          navigate('/admin/referees');
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error creating Referee');
      });
  };

  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-6'>Create {assignment}</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <select
          className='w-full p-2 border rounded'
          value={assignment}
          onChange={(e) => setAssignment(e.target.value as 'ADMIN' | 'REFEREE')}
        >
          <option value="ADMIN">Admin</option>
          <option value="REFEREE">Referee</option>
        </select>
        <select
          className='w-full p-2 border rounded'
          value={roles}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Referee Roles</option>
          <option value="REFEREE">REFEREE</option>
          <option value="TABLE OFFICIAL">TABLE OFFICIAL</option>
        </select>
        <div className='flex gap-4'>
          <input
            type='text'
            placeholder="First Name"
            className='w-1/2 p-2 border rounded'
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            placeholder="Last Name"
            className='w-1/2 p-2 border rounded'
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type='email'
          placeholder="Email Address"
          className='w-full p-2 border rounded'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='tel'
          placeholder="Phone Number"
          className='w-full p-2 border rounded'
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <select
          className='w-full p-2 border rounded'
          required
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        <input
          type='password'
          placeholder="Password"
          className='w-full p-2 border rounded'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          placeholder="Confirm Password"
          className='w-full p-2 border rounded'
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type='submit' className='w-full p-2 bg-secondary-100 text-white rounded'>
          Create {assignment}
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
