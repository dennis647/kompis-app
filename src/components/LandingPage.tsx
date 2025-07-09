import React from 'react';
import { ArrowRight, Users, Shield, Clock, Star } from 'lucide-react';

interface LandingPageProps {
    onGetStarted: () => void;
    onMissions: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onMissions }) => {
    const features = [
        {
            icon: Users,
            title: 'Skapt for samfunnet',
            description: 'Koble deg sammen med andre og bygg ett sterkere samfunn gjennom gjensidig assitanse.'
        },
        {
            icon: Shield,
            title: 'Trygt & sikkert',
            description: 'Alle brukerene er verifisert. Din trygghet og tillit er våres høyeste prioriteringer.'
        },
        {
            icon: Clock,
            title: 'Kjapt og enkelt',
            description: 'Legg ut ett oppdrag på minutter og få hjelp når du trenger det mest.'
        },
        {
            icon: Star,
            title: 'Kvalitet service',
            description: 'Våres rangering system passer på at du får den beste hjelpen av våre erfarne medlemmer.'
        }
    ];

    const stats = [
        { number: '1,000+', label: 'Fornøyde brukere' },
        { number: '25,000+', label: 'Fullførte oppdrag' },
        { number: '4.9/5', label: 'Gjenomsnittlig vurdering' },
        { number: '24/7', label: 'Kundestøtte' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-gray-900 mb-10">
                            <span className="text-blue-500">Kompis</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Trenger du hjelp med hverdagen? Vil du hjelpe andre?
                            Kompis kobler alle sammen for å gjøre det lettere for alle i samfunnet.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={onGetStarted}
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                            >
                                <span>Kom i gang</span>
                                <ArrowRight className="h-5 w-5" />
                            </button>
                            <button
                                onClick={onMissions}
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors duration-200"
                            >
                                Tilgjenglige oppdrag
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
                            Hvorfor skal du velge Kompis?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Vi gjør det lettere og tryggere for deg å få hjelp med dine daglige oppgaver.
                        </p>
                    </div>

                    <div className="grid md:grid-cols- lg:grid-cols-2 gap-12 text-center max-w-4xl mx-auto">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 items-center flex flex-col justify-center space-y-4">
                                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6 text-blue-600 " />
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
                            Hvordan funker det?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Legg ut ditt oppdrag
                            </h3>
                            <p className="text-gray-600">
                                Beskriv hva du trenger hjelp med, sett lokasjonen, og velg om du vil betale eller tilby det gratis.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Få bud
                            </h3>
                            <p className="text-gray-600">
                                Hjelpfulle medlemmer kan by på oppdraget ditt med pris og tid estemat.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Få hjelp
                            </h3>
                            <p className="text-gray-600">
                                Velg det beste budet, snakk med din hjelper, og få oppdraget ditt trygt utført.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-500 to-pink-900 py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Klar for å medle deg inn?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Bli med tusenvis av hjelpfulle medlemmer i samfunnet for å gjøre det lettere for alle.
                    </p>
                    <button
                        onClick={onGetStarted}
                        className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        Bli med i Kompis idag
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;