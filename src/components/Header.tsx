import React from 'react';

interface HeaderProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src="/logo.png" alt="Le Repaire Expériences" className="logo-image" />
                </div>

                <nav className="navigation">
                    <button
                        className={`nav-button ${activeSection === 'home' ? 'active' : ''}`}
                        onClick={() => onSectionChange('home')}
                    >
                        Accueil
                    </button>
                    <button
                        className={`nav-button ${activeSection === 'about' ? 'active' : ''}`}
                        onClick={() => onSectionChange('about')}
                    >
                        Qui sommes nous ?
                    </button>
                    <button
                        className={`nav-button ${activeSection === 'concerts' ? 'active' : ''}`}
                        onClick={() => onSectionChange('concerts')}
                    >
                        Événements
                    </button>
                    <button
                        className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={() => onSectionChange('contact')}
                    >
                        Nous contacter
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;