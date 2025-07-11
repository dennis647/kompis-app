import React, { useState } from 'react';
import { Send, ArrowLeft, Phone, Video, MoreVertical } from 'lucide-react';
import { ChatMessage, User } from '../types';

interface ChatProps {
    onBack: () => void;
    currentUser: User;
    otherUser: User;
    initialMessages: ChatMessage[];
    onSendMessage: (messageText: string) => void; // <- THIS must be a function
}

const Chat: React.FC<ChatProps> = ({
                                       onBack,
                                       currentUser,
                                       otherUser,
                                       initialMessages,
                                       onSendMessage,
                                   }) => {
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim()) {
            // 1. Send to parent
            onSendMessage(newMessage);

            // 2. Locally update the message list to show it immediately
            const newMsg: ChatMessage = {
                id: Date.now().toString(),
                senderId: currentUser.id,
                message: newMessage,
                timestamp: new Date().toISOString(),
                missionTitle: 'Sjekker inn...',
                missionStatus: 'Pågående',
                missionLocation: 'Ukjent',
                type: 'text'
            };
            setMessages((prev) => [...prev, newMsg]);

            setNewMessage('');
        }
    };

    const formatTime = (timestamp: string) =>
        new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="min-h-screen bg-gray-50 pt-16 pb-20 md:pb-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-xl shadow-sm h-[calc(100vh-200px)] flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <button onClick={onBack} className="text-gray-600 hover:text-gray-900 transition-colors">
                                <ArrowLeft className="h-5 w-5" />
                            </button>
                            <img
                                src={otherUser.avatar}
                                alt={otherUser.name}
                                className="h-10 w-10 rounded-full object-cover"
                            />
                            <div>
                                <h2 className="font-semibold text-gray-900">{otherUser.name}</h2>
                                <p className="text-sm text-green-600">Online</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                                <Phone className="h-5 w-5" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                                <Video className="h-5 w-5" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                                <MoreVertical className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Mission Context */}
                    <div className="p-4 bg-blue-50 border-b border-gray-200">
                        <div className="flex items-center space-x-2 text-sm text-blue-800">
                            <span className="font-medium">Oppdrag:</span>
                            <span>{messages[messages.length - 1]?.missionTitle || 'Ingen oppdrag'}</span>
                        </div>
                        <div className="text-xs text-blue-600 mt-1">
                            Status: {messages[messages.length - 1]?.missionStatus || 'Ukjent'} •{' '}
                            {messages[messages.length - 1]?.missionLocation || 'Ingen lokasjon'}
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => {
                            const isCurrentUser = message.senderId === currentUser.id;
                            return (
                                <div
                                    key={message.id}
                                    className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                                            isCurrentUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
                                        }`}
                                    >
                                        <p className="text-sm">{message.message}</p>
                                        <p
                                            className={`text-xs mt-1 ${
                                                isCurrentUser ? 'text-blue-100' : 'text-gray-500'
                                            }`}
                                        >
                                            {formatTime(message.timestamp)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Message Input */}
                    <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
                        <div className="flex items-center space-x-3">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Skriv en melding..."
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                disabled={!newMessage.trim()}
                                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;
