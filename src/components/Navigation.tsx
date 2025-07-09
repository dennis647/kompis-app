import React from 'react';
import { Home, Search, PlusCircle, MessageCircle, User, Map } from 'lucide-react';

interface NavigationProps {
    currentView: string;
    onViewChange: (view: string) => void;
    // @ts-ignore
    currentUser: User | null;
    onLoginClick: () => void;
    onLogout: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange, currentUser }) => {
    const navItems = [
        { id: 'home', label: 'Hjem', icon: Home },
        { id: 'marketplace', label: 'Oppdrag', icon: Search },
        { id: 'create', label: 'Opprett', icon: PlusCircle },
        { id: 'chat', label: 'Meldinger', icon: MessageCircle },
        { id: 'map', label: 'Kart', icon: Map },
    ];

    // Den ene knappen som enten er "Logg inn" eller "Profil"
    const authButton = {
        id: currentUser ? 'profile' : 'login',
        label: currentUser ? 'Profil' : 'Logg inn',
        icon: User,
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-800 border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <button
                                id="hjem"
                                onClick={() => onViewChange('home')}
                                className="text-2xl font-bold text-blue-500 hover:text-blue-700 focus:outline-none"
                            >
                                Kompis
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => onViewChange(item.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                                        currentView === item.id
                                            ? 'bg-gray-600 text-blue-500'
                                            : 'text-gray-200 hover:text-gray-300 hover:bg-gray-700'
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}

                        {/* Auth knapp */}
                        <button
                            onClick={() => onViewChange(authButton.id)}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                                currentView === authButton.id
                                    ? 'bg-gray-600 text-blue-500'
                                    : 'text-gray-200 hover:text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            <authButton.icon className="h-4 w-4" />
                            <span>{authButton.label}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobilnav */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                <div className="grid grid-cols-6 py-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => onViewChange(item.id)}
                                className={`flex flex-col items-center py-2 px-1 text-xs transition-colors duration-200 ${
                                    currentView === item.id ? 'text-blue-600' : 'text-gray-500'
                                }`}
                            >
                                <Icon className="h-5 w-5 mb-1" />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}

                    {/* Auth knapp mobil */}
                    <button
                        onClick={() => onViewChange(authButton.id)}
                        className={`flex flex-col items-center py-2 px-1 text-xs transition-colors duration-200 ${
                            currentView === authButton.id ? 'text-blue-600' : 'text-gray-500'
                        }`}
                    >
                        <authButton.icon className="h-5 w-5 mb-1" />
                        <span>{authButton.label}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
