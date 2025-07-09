import React from 'react';
import { Star, MapPin, Calendar, Award, Settings, Edit3, LogOut } from 'lucide-react';
import { User } from '../types';
import { mockMissions } from '../data/mockData';

interface ProfileProps {
    currentUser: User;
    onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ currentUser, onLogout }) => {
    const userMissions = mockMissions.filter(mission => mission.creator.id === currentUser.id);
    const completedMissions = userMissions.filter(mission => mission.status === 'completed');

    const stats = [
        { label: 'Missions Created', value: userMissions.length },
        { label: 'Completed', value: completedMissions.length },
        { label: 'Rating', value: currentUser.rating },
        { label: 'Total Earned', value: '2,450 NOK' }
    ];

    return (
        <div className="min-h-screen bg-gray-200 pt-16 pb-20 md:pb-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Profile Header */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <div className="flex items-start space-x-6">
                        <div className="relative">
                            <img
                                src={currentUser.avatar}
                                alt={currentUser.name}
                                className="h-24 w-24 rounded-full object-cover"
                            />
                            <button className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                                <Edit3 className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h1 className="text-2xl font-bold text-gray-900">{currentUser.name}</h1>
                                <div className="flex gap-2">
                                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                        <Settings className="h-4 w-4" />
                                        <span>Settings</span>
                                    </button>
                                    <button
                                        onClick={onLogout}
                                        className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        <span>Logg ut</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-gray-600 mb-4">
                                <div className="flex items-center">
                                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                    <span>{currentUser.rating}</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span>{currentUser.location}</span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    <span>Member since Jan 2024</span>
                                </div>
                            </div>

                            <p className="text-gray-700">
                                Helpful community member who loves connecting with neighbors and making life easier for everyone.
                                Available for moving, shopping, and various errands around Stockholm.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-gray-600 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Recent Missions */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">My Recent Missions</h2>
                        <div className="space-y-4">
                            {userMissions.slice(0, 3).map((mission) => (
                                <div key={mission.id} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium text-gray-900">{mission.title}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full ${
                                            mission.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                mission.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                                                    mission.status === 'assigned' ? 'bg-orange-100 text-orange-800' :
                                                        'bg-gray-100 text-gray-800'
                                        }`}>
                      {mission.status.replace('_', ' ')}
                    </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{mission.description}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>{mission.location.address}</span>
                                        <span>{new Date(mission.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h2>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                                <Award className="h-8 w-8 text-yellow-600" />
                                <div>
                                    <h3 className="font-medium text-gray-900">Helper Hero</h3>
                                    <p className="text-sm text-gray-600">Completed 50+ missions</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                                <Star className="h-8 w-8 text-blue-600" />
                                <div>
                                    <h3 className="font-medium text-gray-900">5-Star Service</h3>
                                    <p className="text-sm text-gray-600">Maintained 4.8+ rating</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                                <MapPin className="h-8 w-8 text-green-600" />
                                <div>
                                    <h3 className="font-medium text-gray-900">Local Legend</h3>
                                    <p className="text-sm text-gray-600">Active in Stockholm area</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
