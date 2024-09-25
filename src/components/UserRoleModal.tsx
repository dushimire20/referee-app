import React, {useState} from 'react';

interface UserRoleModalProps {
    onSelectRole: (role: string) => void;
}

const UserRoleModal: React.FC<UserRoleModalProps> = ({onSelectRole}) => {
    const [role, setRole] = useState('');

    const handleSelectRole = () => {
        if (role) {
            localStorage.setItem('userRole', role);
            if (role === 'admin') {
                window.location.pathname = '/admin';
            }
            if (role === 'referee') {
                window.location.pathname = '/dashboard';
            }
            onSelectRole(role);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-secondary-100 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-secondary-100">
                <h2 className="text-xl font-bold mb-4">Select Your Role</h2>
                <div className="mb-4">
                    <label className="mr-4">
                        <input
                            type="radio"
                            value="referee"
                            checked={role === 'referee'}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        Referee
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="admin"
                            checked={role === 'admin'}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        Admin
                    </label>
                </div>
                <button
                    onClick={handleSelectRole}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default UserRoleModal;