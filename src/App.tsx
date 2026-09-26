import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Conciergerie from './components/Conciergerie';
import Footer from './components/Footer';
import About from './components/About';
import Actualites from './components/Actualites';
import Contact from './components/Contact';
import './styles/main.css';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [bookingEvent, setBookingEvent] = useState('');

    const handleSectionChange = (section: string, selectedEvent?: string) => {
        setActiveSection(section);
        if (selectedEvent) {
            setBookingEvent(selectedEvent);
            return;
        }

        if (section !== 'contact') {
            setBookingEvent('');
        }
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'home':
                return (
                    <>
                        <Hero />
                        <Conciergerie />
                        <Footer onSectionChange={setActiveSection} />
                    </>
                );
            case 'about':
                return <About />;
            case 'concerts':
                return <Actualites onSectionChange={handleSectionChange} />;
            case 'contact':
                return <Contact bookingEvent={bookingEvent} />;
            default:
                return (
                    <>
                        <Hero />
                        <Conciergerie />
                        <Footer />
                    </>
                );
        }
    };

    return (
        <div className="app">
            <Header activeSection={activeSection} onSectionChange={(section) => handleSectionChange(section)} />
            <main>
                {activeSection === 'home' ? (
                    <>
                        <Hero />
                        <Conciergerie />
                        <Footer onSectionChange={setActiveSection} />
                    </>
                ) : (
                    renderSection()
                )}
            </main>
        </div>
    );
};

export default App;