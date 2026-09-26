import React from 'react';

const Conciergerie: React.FC = () => {
    return (
        <section id="conciergerie" className="conciergerie-section">
            <div className="conciergerie-grid">
                <div className="conciergerie-visual">
                    <img src="/logo.png" alt="Le Repaire Expériences" className="conciergerie-logo-image" />
                </div>
                <div className="conciergerie-copy">
                    <div className="conciergerie-info-card">
                        <h2 className="mission-title">Notre mission</h2>
                        <p className="conciergerie-subtitle">Conciergerie spécialisée en billetterie événementielle.</p>
                        <p>Le Repaire est une conciergerie dédiée à l'acquisition de places de concert et d'évènements exclusifs. Nous vous aidons à accéder aux places de vos choix, même quand tout affiche complet.</p>
                        <ul className="conciergerie-list">
                            <li>Accompagnement personnalisé</li>
                            <li>Accès aux places de vos choix</li>
                            <li>Cadre 100% Sécurisé</li>
                            <li>Support complet jusqu'à l'événement</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Conciergerie;
