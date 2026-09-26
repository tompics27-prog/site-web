import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-eyebrow">Vous cherchez des billets d'événements complets ?</p>
                <h1>Les meilleures places, les meilleurs événements, sans fausse note.</h1>
                <p className="hero-description">Accédez à des billets premium, des événements exclusifs et un service de conciergerie dédié pour vivre chaque spectacle en toute sérénité.</p>
                <a href="#conciergerie" className="cta-button">Découvrir la conciergerie</a>
            </div>
        </section>
    );
};

export default Hero;