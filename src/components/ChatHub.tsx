import React, { useState } from 'react';
import Chat from './Chat'; // Make sure this points to your Chat component
import { ChatMessage, User } from '../types';
import { mockUsers } from '../data/mockData';

const ChatHub: React.FC = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [messagesByUser, setMessagesByUser] = useState<Record<string, ChatMessage[]>>({});

    const currentUser = mockUsers[0];

    const handleSendMessage = (recipientId: string, messageText: string) => {
        const newMessage: ChatMessage = {
            id: Date.now().toString(),
            senderId: currentUser.id,
            message: messageText,
            timestamp: new Date().toISOString(),
            missionTitle: 'Ny melding',
            missionStatus: 'Aktiv',
            missionLocation: 'Ukjent',
            type: 'text'
        };

        setMessagesByUser((prev) => ({
            ...prev,
            [recipientId]: [...(prev[recipientId] || []), newMessage],
        }));
    };

    const openChatWithUser = (user: User) => {
        if (user.id === currentUser.id) return;
        setSelectedUser(user);
    };

    const goBack = () => {
        setSelectedUser(null);
    };

    if (selectedUser) {
        const messages = messagesByUser[selectedUser.id] || [];
        return (
            <Chat
                onBack={goBack}
                currentUser={currentUser}
                otherUser={selectedUser}
                initialMessages={messages}
                onSendMessage={(messageText: string) => handleSendMessage(selectedUser.id, messageText)}
            />
        );
    }

    return (
        <div className="min-h-screen pt-16 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto py-8">
                <h1 className="text-2xl font-semibold mb-4 text-gray-800">Meldinger</h1>
                <div className="grid gap-4">
                    {mockUsers
                        .filter((user) => user.id !== currentUser.id)
                        .map((user) => (
                            <button
                                key={user.id}
                                onClick={() => openChatWithUser(user)}
                                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:bg-gray-100 transition"
                            >
                                <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
                                <div className="flex-1 text-left">
                                    <p className="font-medium text-gray-800">{user.name}</p>
                                    <p className="text-sm text-gray-500 truncate">
                                        {(messagesByUser[user.id] || []).slice(-1)[0]?.message || 'Ingen meldinger ennå'}
                                    </p>
                                </div>
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ChatHub;
