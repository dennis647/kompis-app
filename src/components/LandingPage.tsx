import React from 'react';
import { ArrowRight, Users, Shield, Clock, Star } from 'lucide-react';

interface LandingPageProps {
    onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
    const features = [
        {
            icon: Users,
            title: 'Community Driven',
            description: 'Connect with helpful neighbors and build stronger communities through mutual assistance.'
        },
        {
            icon: Shield,
            title: 'Safe & Secure',
            description: 'All users are verified and rated. Your safety and trust are our top priorities.'
        },
        {
            icon: Clock,
            title: 'Quick & Easy',
            description: 'Post a mission in minutes and get help when you need it most.'
        },
        {
            icon: Star,
            title: 'Quality Service',
            description: 'Our rating system ensures you get the best help from experienced community members.'
        }
    ];

    const stats = [
        { number: '10,000+', label: 'Happy Users' },
        { number: '50,000+', label: 'Completed Missions' },
        { number: '4.9/5', label: 'Average Rating' },
        { number: '24/7', label: 'Support' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Your Local <span className="text-blue-600">Helper</span> Network
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Need help with everyday tasks? Want to help others? Kompis connects neighbors
                            to make life easier for everyone in your community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={onGetStarted}
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                            >
                                <span>Get Started</span>
                                <ArrowRight className="h-5 w-5" />
                            </button>
                            <button
                                onClick={onGetStarted}
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors duration-200"
                            >
                                Browse Missions
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Kompis?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We make it simple and safe to get help with your daily tasks
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* How it Works Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Post Your Mission
                            </h3>
                            <p className="text-gray-600">
                                Describe what you need help with, set your location, and choose if you want to pay or offer it for free.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Get Bids
                            </h3>
                            <p className="text-gray-600">
                                Helpful community members will bid on your mission with their time estimates and rates.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Get Help
                            </h3>
                            <p className="text-gray-600">
                                Choose the best bid, chat with your helper, and get your mission completed safely.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of helpful neighbors making life easier for everyone
                    </p>
                    <button
                        onClick={onGetStarted}
                        className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        Join Kompis Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;