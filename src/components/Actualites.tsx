import React, { useRef, useState } from 'react';

interface ActualitesProps {
    onSectionChange: (section: string, eventName?: string) => void;
}

const artists = [
    {
        name: 'Céline Dion',
        image: '/poster-celine-dion.png',
        paragraphs: [
            'Avec presque 260 millions d’albums vendus à travers le monde, Céline Dion est l’une des artistes les plus reconnues et les plus influentes de l’histoire de la musique pop.',
            'Son univers mélange puissance vocale, émotion brute et présence scénique incomparable. Des titres comme « My Heart Will Go On », « The Power of Love » et « Because You Loved Me » ont marqué plusieurs générations.',
            'En France comme à l’international, elle reste un symbole de performance artistique. Son retour sur les plus grandes scènes continue de fasciner, et son héritage musical reste exceptionnel.'
        ]
    },
    {
        name: 'Niska',
        image: '/artists/afficheniska.jpeg',
        paragraphs: [
            'Niska est l’une des figures les plus marquantes du rap francophone contemporain, avec un style à la fois direct, mélodique et ultra identifiable.',
            'À travers ses morceaux, il a construit une vraie présence culturelle, en mêlant rap, flow rapide et textes souvent introspectifs sur le succès, la pression et la vie de rue.',
            'Son énergie scénique et son univers musical font de lui un artiste incontournable dans le paysage francophone actuel.'
        ]
    },
    {
        name: 'Olivia Rodrigo',
        image: '/artists/afficheoliviarodrigo.jpeg',
        paragraphs: [
            'Olivia Rodrigo a explosé avec une voix puissante et des textes intenses, à l’image de son univers pop-rock très authentique et très actuel.',
            'Ses titres abordent souvent l’amour, les blessures émotionnelles et la complexité des relations, ce qui lui a valu un énorme succès auprès d’une génération entière.',
            'Avec son énergie live et son style sincère, Olivia a su se distinguer comme l’une des artistes majeures de sa génération.'
        ]
    },
    {
        name: 'Harry Styles',
        image: '/artists/afficheharrystyles.jpeg',
        paragraphs: [
            'Harry Styles est devenu un phénomène mondial à la fois par son talent, son charisme et son univers visuel très singulier.',
            'Après son passage avec One Direction, il a réussi à imposer une identité musicale pop rock très personnelle, mêlant élégance, sensualité et liberté artistique.',
            'Ses performances sont aujourd’hui synonymes de show grandiose, de communion avec le public et d’une pop moderne très inspirée.'
        ]
    },
    {
        name: 'Oasis',
        image: '/artists/afficheoasis.jpeg',
        paragraphs: [
            'Oasis est l’un des groupes les plus emblématiques de la scène rock britannique, connu pour ses riffs puissants, ses mélodies mémorables et son énergie brute.',
            'Avec des titres devenus cultes comme « Wonderwall » et « Don’t Look Back in Anger », le groupe a marqué l’histoire du rock des années 1990.',
            'Leur aura reste immense : un son intemporel, des textes marquants et une présence scénique qui continue d’inspirer des générations entières.'
        ]
    },
    {
        name: 'NFL',
        image: '/artists/affichenfl.jpeg',
        paragraphs: [
            'La NFL incarne l’excellence du football américain, avec des matchs intenses, des rivalités légendaires et une ambiance spectaculaire dans chaque stade.',
            'Au-delà du sport, la NFL est un véritable événement culturel qui rassemble des millions de fans à travers le monde, avec des soirées électriques et des moments historiques.',
            'Le niveau de compétition, la puissance des équipes et l’émotion du public font de la NFL un spectacle incontournable.'
        ]
    },
    {
        name: 'Roland Garros',
        image: '/artists/afficherolandgaros.jpeg',
        paragraphs: [
            'Roland-Garros est l’un des tournois de tennis les plus prestigieux au monde, symbole de technique, de ténacité et d’excellence dans le monde du sport.',
            'Sur terre battue, les joueurs affrontent un défi unique : un terrain exigeant, une intensité maximale et un public passionné.',
            'Le tournoi parisien est reconnu pour son prestige, son histoire légendaire et l’émotion qu’il suscite chaque année.'
        ]
    }
];

const Actualites: React.FC<ActualitesProps> = ({ onSectionChange }) => {
    const [activeArtist, setActiveArtist] = useState('Céline Dion');
    const eventsGalleryRef = useRef<HTMLDivElement>(null);
    const selectedArtist = artists.find((artist) => artist.name === activeArtist) || artists[0];

    return (
        <section className="actualites">
            <div className="actualites-header">
                <div className="container">
                    <h2 className="actualites-title">♫ Événements disponibles</h2>
                    <div className="actualites-scroll-hint">
                        <span>Glissez pour voir la suite</span>
                        <button
                            type="button"
                            aria-label="Voir les événements suivants"
                            aria-controls="events-gallery"
                            onClick={() => eventsGalleryRef.current?.scrollBy({ left: 200, behavior: 'smooth' })}
                        >
                            <span aria-hidden="true">›</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container actualites-grid" id="events-gallery" ref={eventsGalleryRef}>
                {artists.map((artist) => (
                    <button
                        key={artist.name}
                        type="button"
                        onClick={() => setActiveArtist(artist.name)}
                        className={`actualites-card ${activeArtist === artist.name ? 'actualites-card-active' : ''}`}
                        aria-pressed={activeArtist === artist.name}
                    >
                        <img
                            src={artist.image}
                            alt={`Affiche ${artist.name}`}
                            className="actualites-image"
                        />
                    </button>
                ))}

                <button
                    type="button"
                    className="actualites-card actualites-card-custom"
                    aria-label="Tous autres concerts sur commande"
                    onClick={() => onSectionChange('contact')}
                >
                    <div className="actualites-custom-card">
                        <span>Tous autres concerts</span>
                        <strong>sur commande</strong>
                    </div>
                </button>
            </div>

            <div className="container actualites-about">
                <h3>À propos de {selectedArtist.name}</h3>
                {selectedArtist.paragraphs.map((paragraph, index) => (
                    <p key={`${selectedArtist.name}-${index}`}>{paragraph}</p>
                ))}

                <button
                    type="button"
                    className="actualites-book-button"
                    onClick={() => onSectionChange('contact', selectedArtist.name)}
                >
                    Acheter des places
                </button>
            </div>
        </section>
    );
};

export default Actualites;
