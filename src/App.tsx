import { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import Marketplace from './components/Marketplace';
import CreateMission from './components/CreateMission';
import MissionDetail from './components/MissionDetail';
import ChatHub from './components/ChatHub';
import MapView from './components/MapView';
import Profile from './components/Profile';
import Login from './components/Login';

import { Mission, User } from './types';
import { mockUsers } from './data/mockData';

function App() {
    const [currentView, setCurrentView] = useState<string>('home');  // Starter på hjem
    const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const handleViewChange = (view: string) => {
        setCurrentView(view);
        setSelectedMission(null);
    };

    const handleLogin = (userId: string) => {
        const user = mockUsers.find((u) => u.id === userId);
        if (user) {
            setCurrentUser(user);
            setCurrentView('home');
        }
    };

    const handleLogout = () => {
        setCurrentUser(null);
        setCurrentView('home');
    };

    const handleMissionClick = (mission: Mission) => {
        setSelectedMission(mission);
        setCurrentView('mission-detail');
    };

    const handleMissionCreated = () => {
        setCurrentView('marketplace');
    };

    const handleBack = () => {
        setCurrentView('marketplace');
        setSelectedMission(null);
    };

    const handleChatOpen = () => {
        setCurrentView('chat');
    };

    const renderCurrentView = () => {
        switch (currentView) {
            case 'home':
                return currentUser ? <LandingPage onGetStarted={() =>setCurrentView('marketplace')} onMissions={() => setCurrentView('marketplace')}  />
                    :
                    <LandingPage onGetStarted={() => setCurrentView('login')} onMissions={() => setCurrentView('marketplace')} />;
            case 'marketplace':
                return <Marketplace onMissionClick={handleMissionClick} />;
            case 'create':
                return <CreateMission onMissionCreated={handleMissionCreated} />;
            case 'mission-detail':
                return selectedMission ? (
                    <MissionDetail mission={selectedMission} onBack={handleBack} onChat={handleChatOpen} />
                ) : null;
            case 'chat':
                // @ts-ignore
                return currentUser ? <ChatHub currentUser={currentUser} /> : <LandingPage onGetStarted={() => setCurrentView('marketplace')} />;
            case 'map':
                return <MapView onMissionClick={handleMissionClick} />;
            case 'profile':
                return currentUser ? (
                    <Profile currentUser={currentUser} onLogout={handleLogout} />
                ) : (
                    <LandingPage onGetStarted={() => setCurrentView('marketplace')} />
                );
            case 'login':
                return <Login onLogin={handleLogin} />;
            default:
                return <LandingPage onGetStarted={() => setCurrentView('marketplace')} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation
                currentView={currentView}
                onViewChange={handleViewChange}
                currentUser={currentUser}
                onLoginClick={() => setCurrentView('login')}
                onLogout={handleLogout}
            />
            {renderCurrentView()}
        </div>
    );
}

export default App;
