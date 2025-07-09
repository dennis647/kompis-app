import React, { useState } from 'react';
import Chat from './Chat'; // Import your provided Chat component
import { mockUsers } from '../data/mockData';

const ChatHub: React.FC = () => {
    const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

    const handleSelectChat = (userId: string) => {
        setSelectedChatId(userId);
    };

    const handleBack = () => {
        setSelectedChatId(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-16 pb-20">
            {!selectedChatId ? (
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h2 className="text-2xl font-semibold mb-4">Meldinger</h2>
                    <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
                        {mockUsers.slice(1).map((user) => (
                            <button
                                key={user.id}
                                onClick={() => handleSelectChat(user.id)}
                                className="w-full text-left px-4 py-4 hover:bg-gray-50 flex items-center space-x-4"
                            >
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-medium text-gray-900">{user.name}</p>
                                    <p className="text-sm text-gray-500">Trykk for å åpne melding</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <Chat onBack={handleBack} />
            )}
        </div>
    );
};

export default ChatHub;
