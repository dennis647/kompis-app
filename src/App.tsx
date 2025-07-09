import { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import Marketplace from './components/Marketplace';
import CreateMission from './components/CreateMission';
import MissionDetail from './components/MissionDetail';
import Chat from './components/Chat';
import MapView from './components/MapView';
import Profile from './components/Profile';
import { Mission } from './types';

function App() {
    const [currentView, setCurrentView] = useState<string>('home');
    const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

    const handleViewChange = (view: string) => {
        setCurrentView(view);
        setSelectedMission(null);
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
                return <LandingPage onGetStarted={() => setCurrentView('marketplace')} />;
            case 'marketplace':
                return <Marketplace onMissionClick={handleMissionClick} />;
            case 'create':
                return <CreateMission onMissionCreated={handleMissionCreated} />;
            case 'mission-detail':
                return selectedMission ? (
                    <MissionDetail
                        mission={selectedMission}
                        onBack={handleBack}
                        onChat={handleChatOpen}
                    />
                ) : null;
            case 'chat':
                return <Chat onBack={handleBack} />;
            case 'map':
                return <MapView onMissionClick={handleMissionClick} />;
            case 'profile':
                return <Profile />;
            default:
                return <LandingPage onGetStarted={() => setCurrentView('marketplace')} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {currentView && (
                <Navigation currentView={currentView} onViewChange={handleViewChange} />
            )}
            {renderCurrentView()}
        </div>
    );
}

export default App;