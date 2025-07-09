import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Euro, Gift, Star, User, MessageCircle } from 'lucide-react';
import { Mission, } from '../types';
import { mockBids } from '../data/mockData';

interface MissionDetailProps {
    mission: Mission;
    onBack: () => void;
    onChat: () => void;
}

const MissionDetail: React.FC<MissionDetailProps> = ({ mission, onBack, onChat }) => {
    const [bidAmount, setBidAmount] = useState('');
    const [bidMessage, setBidMessage] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [showBidForm, setShowBidForm] = useState(false);

    const missionBids = mockBids.filter(bid => bid.missionId === mission.id);

    const handleBidSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the bid to your backend
        console.log('Submitting bid:', {
            missionId: mission.id,
            amount: bidAmount,
            message: bidMessage,
            estimatedTime
        });
        setShowBidForm(false);
        setBidAmount('');
        setBidMessage('');
        setEstimatedTime('');
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'moving': return '📦';
            case 'shopping': return '🛒';
            case 'disposal': return '♻️';
            case 'delivery': return '🚚';
            case 'cleaning': return '🧹';
            default: return '✨';
        }
    };

    const formatTimeAgo = (dateString: string) => {
        const now = new Date();
        const date = new Date(dateString);
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

        if (diffInHours < 1) return 'Just now';
        if (diffInHours < 24) return `${diffInHours}h ago`;
        return `${Math.floor(diffInHours / 24)}d ago`;
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-16 pb-20 md:pb-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex items-center mb-6">
                    <button
                        onClick={onBack}
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-4"
                    >
                        <ArrowLeft className="h-5 w-5 mr-1" />
                        Back
                    </button>
                    <span className="text-2xl mr-2">{getCategoryIcon(mission.category)}</span>
                    <span className="text-sm font-medium text-gray-500 capitalize">
            {mission.category}
          </span>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Mission Details */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-start justify-between mb-4">
                                <h1 className="text-2xl font-bold text-gray-900">{mission.title}</h1>
                                <div className="flex items-center space-x-2">
                                    {mission.payment.type === 'paid' ? (
                                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                      <Euro className="h-4 w-4 mr-1" />
                                            {mission.payment.amount} NOK
                    </span>
                                    ) : (
                                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                      <Gift className="h-4 w-4 mr-1" />
                      Free
                    </span>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed">{mission.description}</p>

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center text-gray-600">
                                    <MapPin className="h-5 w-5 mr-2" />
                                    <span>{mission.location.address}</span>
                                </div>
                                {mission.deadline && (
                                    <div className="flex items-center text-gray-600">
                                        <Clock className="h-5 w-5 mr-2" />
                                        <span>Deadline: {new Date(mission.deadline).toLocaleDateString()}</span>
                                    </div>
                                )}
                            </div>

                            {/* Mission Creator */}
                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Mission Creator</h3>
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={mission.creator.avatar}
                                        alt={mission.creator.name}
                                        className="h-16 w-16 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <h4 className="text-lg font-medium text-gray-900">{mission.creator.name}</h4>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                            <div className="flex items-center">
                                                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                                <span>{mission.creator.rating}</span>
                                            </div>
                                            <span>{mission.creator.completedJobs} completed missions</span>
                                            <span>{mission.creator.location}</span>
                                        </div>
                                    </div>
                                    {mission.status === 'assigned' && mission.assignedTo && (
                                        <button
                                            onClick={onChat}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                                        >
                                            <MessageCircle className="h-4 w-4" />
                                            <span>Chat</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Bids Section */}
                        {mission.status === 'open' && (
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Bud ({missionBids.length})
                                    </h3>
                                    {!showBidForm && (
                                        <button
                                            onClick={() => setShowBidForm(true)}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Place Bid
                                        </button>
                                    )}
                                </div>

                                {/* Bid Form */}
                                {showBidForm && (
                                    <form onSubmit={handleBidSubmit} className="mb-6 p-4 bg-gray-50 rounded-lg">
                                        <h4 className="font-medium text-gray-900 mb-4">Legg ditt bud</h4>

                                        {mission.payment.type === 'paid' && (
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Ditt bud (NOK)
                                                </label>
                                                <input
                                                    type="number"
                                                    value={bidAmount}
                                                    onChange={(e) => setBidAmount(e.target.value)}
                                                    placeholder="100"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                        )}

                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Estimert tid
                                            </label>
                                            <input
                                                type="text"
                                                value={estimatedTime}
                                                onChange={(e) => setEstimatedTime(e.target.value)}
                                                placeholder="f. eks 2 timer"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Beskjed
                                            </label>
                                            <textarea
                                                value={bidMessage}
                                                onChange={(e) => setBidMessage(e.target.value)}
                                                placeholder="Forklar hvorfor du er den rette personen for denne jobben..."
                                                rows={3}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                                required
                                            />
                                        </div>

                                        <div className="flex space-x-3">
                                            <button
                                                type="submit"
                                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                Send inn bud
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setShowBidForm(false)}
                                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                                            >
                                                Avbryt
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {/* Existing Bids */}
                                <div className="space-y-4">
                                    {missionBids.map((bid) => (
                                        <div key={bid.id} className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center space-x-3">
                                                    <img
                                                        src={bid.bidder.avatar}
                                                        alt={bid.bidder.name}
                                                        className="h-10 w-10 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <h5 className="font-medium text-gray-900">{bid.bidder.name}</h5>
                                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                            <div className="flex items-center">
                                                                <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                                                                <span>{bid.bidder.rating}</span>
                                                            </div>
                                                            <span>•</span>
                                                            <span>{bid.bidder.completedJobs} Jobber</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    {mission.payment.type === 'paid' && bid.amount && (
                                                        <div className="text-lg font-semibold text-green-600">
                                                            {bid.amount} NOK
                                                        </div>
                                                    )}
                                                    <div className="text-sm text-gray-600">{bid.estimatedTime}</div>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 mb-2">{bid.message}</p>
                                            <div className="text-xs text-gray-500">
                                                {formatTimeAgo(bid.createdAt)}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {missionBids.length === 0 && !showBidForm && (
                                    <div className="text-center py-8 text-gray-500">
                                        <User className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                                        <p>Ingen bud enda! Bli den første som helper</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Map Placeholder */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sted</h3>
                            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                                    <p className="text-sm">Se på kart</p>
                                    <p className="text-xs">{mission.location.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Mission Status */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Status på oppdrag</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Status:</span>
                                    <span className={`font-medium capitalize ${
                                        mission.status === 'open' ? 'text-green-600' :
                                            mission.status === 'assigned' ? 'text-blue-600' :
                                                mission.status === 'in_progress' ? 'text-orange-600' :
                                                    'text-gray-600'
                                    }`}>
                    {mission.status.replace('_', ' ')}
                  </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Opprettet:</span>
                                    <span className="font-medium">
                    {formatTimeAgo(mission.createdAt)}
                  </span>
                                </div>
                                {mission.deadline && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Frist:</span>
                                        <span className="font-medium">
                      {new Date(mission.deadline).toLocaleDateString()}
                    </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionDetail;