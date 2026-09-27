import React from 'react';

interface FooterProps {
    onSectionChange?: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionChange }) => {
    return (
        <section className="footer-section">
            <div className="footer-row">
                <div className="footer-card footer-instagram-card">
                    <a
                        href="https://www.instagram.com/lerepaire_experiences/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        aria-label="Instagram Le Repaire"
                    >
                        <span className="footer-instagram-label">Instagram</span>
                        <img src="/logoinsta.jpeg" alt="Instagram Le Repaire" className="footer-logo" />
                    </a>
                </div>

                <div className="footer-card footer-service-card">
                    <p className="footer-kicker">Service</p>
                    <h3>Réservation sur mesure</h3>
                    <p>Nous trouvons les meilleures places pour vos événements préférés, même quand la billetterie est complète.</p>
                    <button
                        type="button"
                        className="footer-cta"
                        onClick={() => onSectionChange?.('contact')}
                    >
                        Demander un devis
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Footer;