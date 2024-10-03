import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {arbitratorRoles} from "@/data/usersRelatedData.ts";

interface SystemRole {}

interface Profile {
    arbitratorId: number;
    firstName: string;
    lastName: string;
    email: string;
    arbitratorRole: string;
    phoneNumber: string;
    systemRole: SystemRole;
}

function generateRandomId(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CreateUserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
	const [arbitratorRole, setArbitratorRole] = useState(arbitratorRoles[1]);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [systemRole, setSystemRole] = useState<'ADMIN' | 'REFEREE'>('REFEREE');

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        const newUser: Profile & { password: string } = {
            arbitratorId: generateRandomId(1000, 9999),
            firstName,
            lastName,
            email,
            arbitratorRole,
            phoneNumber,
            systemRole: { name: systemRole }, // Assuming SystemRole has a 'name' property
            password
        };

        Axios.post('http://localhost:3000/auth/create-user', newUser)
            .then(response => {
                if (response.data.status) {
                    alert(`${systemRole} created successfully!`);
                    navigate('/users-list'); // Assuming you have a users list page
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error creating user');
            });
    };

    return (
        <div className='container mx-auto p-8'>
            <h1 className='text-3xl font-bold mb-6'>Create {systemRole}</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <select
                    className='w-full p-2 border rounded'
                    value={systemRole}
                    onChange={(e) => setSystemRole(e.target.value as 'ADMIN' | 'REFEREE')}
                >
                    <option value="ADMIN">Admin</option>
                    <option value="REFEREE">Referee</option>
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
					value={arbitratorRole}
					onChange={(e) => setArbitratorRole(e.target.value)}
				>
					{arbitratorRoles.map((role) => (
						<option key={role} value={role}>
							{role}
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
                    Create {systemRole}
                </button>
            </form>
        </div>
    );
};

export default CreateUserForm;