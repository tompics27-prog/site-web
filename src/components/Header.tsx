import React, { useState } from 'react';

interface HeaderProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { key: 'home', label: 'Accueil' },
        { key: 'about', label: 'Qui sommes nous ?' },
        { key: 'concerts', label: 'Événements' },
        { key: 'contact', label: 'Nous contacter' }
    ];

    const handleItemClick = (key: string) => {
        onSectionChange(key);
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src="/logo.png" alt="Le Repaire Expériences" className="logo-image" />
                </div>

                <button
                    type="button"
                    className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    aria-label="Ouvrir le menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`navigation ${isMenuOpen ? 'mobile-open' : ''}`} aria-label="Navigation principale">
                    {navItems.map((item) => (
                        <button
                            key={item.key}
                            className={`nav-button ${activeSection === item.key ? 'active' : ''}`}
                            onClick={() => handleItemClick(item.key)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;