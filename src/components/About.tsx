import React from 'react';

const About: React.FC = () => {
    return (
        <section className="about section">
            <div className="container">
                <h2>Qui sommes nous ?</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            <strong>Le Repaire Expériences</strong> est né d'une idée simple : rendre l'inaccessible à portée de main.
                        </p>
                        <p>
                            Notre mission est de vous permettre de vivre des moments inoubliables, même quand les billetteries officielles affichent complet. Grâce à notre réseau, nous vous trouvons les meilleures places pour vos concerts, sports ou spectacles préférés, tout en garantissant un cadre 100% sécurisé.
                        </p>
                        <h3>Pourquoi nous faire confiance ?</h3>
                        <ul className="trust-list">
                            <li><strong>Accès aux places de vos choix :</strong> nous vous aidons à trouver les meilleures options selon vos envies.</li>
                            <li><strong>Sérénité :</strong> On s'occupe de tout, vous n'avez qu'à profiter.</li>
                            <li><strong>Proximité :</strong> Une équipe de passionnés à votre écoute pour dénicher l'impossible.</li>
                        </ul>
                    </div>
                    <div className="about-stats">
                        <div className="stat">
                            <h3>+20</h3>
                            <p>événements déjà proposés à la vente</p>
                        </div>
                        <div className="stat">
                            <h3>+50</h3>
                            <p>clients satisfaits</p>
                        </div>
                        <div className="stat">
                            <h3>2 ans</h3>
                            <p>d'expérience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;