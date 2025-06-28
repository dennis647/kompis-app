import React, { useState } from 'react';
import { MapPin, Euro, Gift, Calendar, AlarmClock } from 'lucide-react';

interface CreateMissionProps {
    onMissionCreated: () => void;
}

const CreateMission: React.FC<CreateMissionProps> = ({ onMissionCreated }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'other',
        address: '',
        paymentType: 'free',
        amount: '',
        deadline: '',
        estimatedTime: ''
    });

    const categories = [
        { id: 'moving', label: 'Moving & Transport', icon: '📦' },
        { id: 'shopping', label: 'Shopping & Errands', icon: '🛒' },
        { id: 'disposal', label: 'Disposal & Recycling', icon: '♻️' },
        { id: 'delivery', label: 'Delivery', icon: '🚚' },
        { id: 'cleaning', label: 'Cleaning', icon: '🧹' },
        { id: 'other', label: 'Other', icon: '✨' }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Creating mission:', formData);
        onMissionCreated();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-16 pb-20 md:pb-8">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-xl shadow-sm">
                    {/* Header */}
                    <div className="px-6 py-8 border-b border-gray-200">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Create New Mission</h1>
                        <p className="text-gray-600">Describe what help you need and connect with your community</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        {/* Title */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                                Mission Title *
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="e.g., Help move furniture to new apartment"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                Description *
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows={4}
                                placeholder="Provide more details about what help you need..."
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                Category *
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {categories.map(category => (
                                    <label
                                        key={category.id}
                                        className={`relative flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                                            formData.category === category.id
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="category"
                                            value={category.id}
                                            checked={formData.category === category.id}
                                            onChange={handleInputChange}
                                            className="sr-only"
                                        />
                                        <span className="text-lg mr-2">{category.icon}</span>
                                        <span className="text-sm font-medium">{category.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                Location *
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="Enter your address"
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Payment */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Payment Type *
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                                    formData.paymentType === 'free'
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                }`}>
                                    <input
                                        type="radio"
                                        name="paymentType"
                                        value="free"
                                        checked={formData.paymentType === 'free'}
                                        onChange={handleInputChange}
                                        className="sr-only"
                                    />
                                    <Gift className="h-5 w-5 text-blue-600 mr-3" />
                                    <div>
                                        <div className="font-medium">Free</div>
                                        <div className="text-sm text-gray-500">Community help</div>
                                    </div>
                                </label>

                                <label className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                                    formData.paymentType === 'paid'
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                }`}>
                                    <input
                                        type="radio"
                                        name="paymentType"
                                        value="paid"
                                        checked={formData.paymentType === 'paid'}
                                        onChange={handleInputChange}
                                        className="sr-only"
                                    />
                                    <Euro className="h-5 w-5 text-green-600 mr-3" />
                                    <div>
                                        <div className="font-medium">Paid</div>
                                        <div className="text-sm text-gray-500">Set amount</div>
                                    </div>
                                </label>
                            </div>

                            {formData.paymentType === 'paid' && (
                                <div className="mt-3">
                                    <div className="relative">
                                        <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <input
                                            type="number"
                                            name="amount"
                                            value={formData.amount}
                                            onChange={handleInputChange}
                                            placeholder="Amount in SEK"
                                            min="1"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Deadline */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                                    Deadline (Optional)
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="datetime-local"
                                        id="deadline"
                                        name="deadline"
                                        value={formData.deadline}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="estimatedTime" className="block text-sm font-medium text-gray-700 mb-2">
                                    Estimated Time
                                </label>
                                <div className="relative">
                                    <AlarmClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        id="estimatedTime"
                                        name="estimatedTime"
                                        value={formData.estimatedTime}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 2 hours"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                            >
                                Create Mission
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateMission;