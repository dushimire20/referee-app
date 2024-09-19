import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import UserRoleModal from './UserRoleModal';

const DashboardLayout: React.FC = () => {
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        const storedUserRole = localStorage.getItem('userRole');
        if (storedUserRole) {
            setUserRole(storedUserRole);
        }
    }, []);

    const handleSelectRole = (role: string) => {
        setUserRole(role);
    };

    if (!userRole) {
        return <UserRoleModal onSelectRole={handleSelectRole} />;
    }

    return (
        <div className="flex h-screen max-w-screen text-black">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;