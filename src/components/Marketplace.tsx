import React, { useState } from 'react';
import {  Search, MapPin, Clock, Star } from 'lucide-react';
import { Mission } from '../types';
import { mockMissions } from '../data/mockData';

interface MarketplaceProps {
    onMissionClick: (mission: Mission) => void;
}

const Marketplace: React.FC<MarketplaceProps> = ({ onMissionClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [paymentFilter, setPaymentFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'Alle kategorier' },
        { id: 'flytting', label: 'Flytt & transport' },
        { id: 'handel', label: 'Shopping & ærender' },
        { id: 'kast', label: 'Kast & resirukerling' },
        { id: 'levering', label: 'Levering' },
        { id: 'vasking', label: 'Vasking' },
        { id: 'annet', label: 'Annet' }
    ];

    const filteredMissions = mockMissions.filter(mission => {
        const matchesSearch = mission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mission.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || mission.category === selectedCategory;
        const matchesPayment = paymentFilter === 'all' || mission.payment.type === paymentFilter;
        const isOpen = mission.status === 'open';

        return matchesSearch && matchesCategory && matchesPayment && isOpen;
    });

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'flytting': return '📦';
            case 'handel': return '🛒';
            case 'kast': return '♻️';
            case 'levering': return '🚚';
            case 'vasking': return '🧹';
            default: return '✨';
        }
    };

    const formatTimeAgo = (dateString: string) => {
        const now = new Date();
        const date = new Date(dateString);
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

        if (diffInHours < 1) return 'Akkurat nå';
        if (diffInHours < 24) return `${diffInHours}t siden`;
        return `${Math.floor(diffInHours / 24)}d siden`;
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-16 pb-20 md:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Tilgjengelige oppdarg</h1>
                    <p className="text-gray-600">Hjelp de i samfunnet og tjen på å gjøre noe bra</p>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Søk oppdrag..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.label}
                                </option>
                            ))}
                        </select>

                        {/* Payment Filter */}
                        <select
                            value={paymentFilter}
                            onChange={(e) => setPaymentFilter(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="all">Alle betalinger</option>
                            <option value="paid">Betalt</option>
                            <option value="free">Gratis</option>
                        </select>
                    </div>
                </div>

                {/* Mission Grid */}
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
                    {filteredMissions.map((mission) => (
                        <div
                            key={mission.id}
                            onClick={() => onMissionClick(mission)}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-100 hover:border-gray-200"
                        >
                            {/* Card Header */}
                            <div className="p-6 pb-4">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-2xl">{getCategoryIcon(mission.category)}</span>
                                        <span className="text-sm font-medium text-gray-500 capitalize">
                      {mission.category}
                    </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        {mission.payment.type === 'paid' ? (
                                            <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full flex items-center">
                                                {mission.payment.amount} NOK
                      </span>
                                        ) : (
                                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full flex items-center">
                        Gratis
                      </span>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                    {mission.title}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    {mission.description}
                                </p>
                            </div>

                            {/* Card Body */}
                            <div className="px-6 pb-4">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span>{mission.location.address}</span>
                                </div>

                                {mission.deadline && (
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <Clock className="h-4 w-4 mr-1" />
                                        <span>Tidsfrist: {new Date(mission.deadline).toLocaleDateString()}</span>
                                    </div>
                                )}
                            </div>

                            {/* Card Footer */}
                            <div className="px-6 py-4 bg-gray-50 rounded-b-xl border-t border-gray-100">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={mission.creator.avatar}
                                            alt={mission.creator.name}
                                            className="h-8 w-8 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                {mission.creator.name}
                                            </p>
                                            <div className="flex items-center">
                                                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                                <span className="text-xs text-gray-500 ml-1">
                          {mission.creator.rating}
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">
                    {formatTimeAgo(mission.createdAt)}
                  </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredMissions.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">Ingen oppdrag funnet</h3>
                        <p className="text-gray-600">Prøv å endre ditt søk</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Marketplace;