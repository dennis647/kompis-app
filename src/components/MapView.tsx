import React from 'react';
import { MapPin, Navigation, Filter } from 'lucide-react';
import { mockMissions } from '../data/mockData';

interface MapViewProps {
    onMissionClick: (mission: any) => void;
}

const MapView: React.FC<MapViewProps> = ({ onMissionClick }) => {
    const openMissions = mockMissions.filter(mission => mission.status === 'open');

    return (
        <div className="min-h-screen bg-gray-50 pt-16 pb-20 md:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mission Map</h1>
                        <p className="text-gray-600">Find missions near you</p>
                    </div>
                    <div className="flex space-x-3">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <Filter className="h-4 w-4" />
                            <span>Filter</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Navigation className="h-4 w-4" />
                            <span>My Location</span>
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Map */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 relative">
                                {/* Map Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-gray-600">
                                        <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                                        <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                                        <p className="text-sm">Map integration would show actual locations here</p>
                                    </div>
                                </div>

                                {/* Mission Markers */}
                                {openMissions.map((mission, index) => (
                                    <div
                                        key={mission.id}
                                        className={`absolute w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer hover:bg-blue-700 transition-colors shadow-lg ${
                                            index === 0 ? 'top-1/3 left-1/4' :
                                                index === 1 ? 'top-1/2 right-1/3' :
                                                    'bottom-1/3 left-1/2'
                                        }`}
                                        onClick={() => onMissionClick(mission)}
                                    >
                                        {index + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mission List */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Nearby Missions</h2>
                        <div className="space-y-3">
                            {openMissions.map((mission, index) => (
                                <div
                                    key={mission.id}
                                    onClick={() => onMissionClick(mission)}
                                    className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
                                >
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium text-gray-900 truncate">
                                                {mission.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 line-clamp-2">
                                                {mission.description}
                                            </p>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <MapPin className="h-3 w-3 mr-1" />
                                                    {mission.location.address}
                                                </div>
                                                {mission.payment.type === 'paid' ? (
                                                    <span className="text-green-600 font-medium text-sm">
                            {mission.payment.amount} SEK
                          </span>
                                                ) : (
                                                    <span className="text-blue-600 font-medium text-sm">
                            Free
                          </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapView;