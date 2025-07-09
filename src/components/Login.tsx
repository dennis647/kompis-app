import React, { useState } from 'react';
import { mockUsers } from '../data/mockData';

interface LoginProps {
    onLogin: (userId: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [selectedUserId, setSelectedUserId] = useState<string>('');

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Logg inn</h2>
            <select
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
                className="w-full p-2 border rounded mb-4"
            >
                <option value="">Velg bruker</option>
                {mockUsers.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
            <button
                onClick={() => selectedUserId && onLogin(selectedUserId)}
                disabled={!selectedUserId}
                className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
            >
                Logg inn
            </button>
        </div>
    );
};

export default Login;
