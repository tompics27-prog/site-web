import React from 'react';

interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
    event: string;
}

const Reviews: React.FC = () => {
    const reviews: Review[] = [
        {
            id: 1,
            name: "Marie Dupont",
            rating: 5,
            comment: "Expérience incroyable ! Le concert était exceptionnel et l'organisation parfaite. Je recommande vivement !",
            date: "2024-01-15",
            event: "Concert de Jazz"
        },
        {
            id: 2,
            name: "Pierre Martin",
            rating: 5,
            comment: "Service impeccable et événement à la hauteur de mes attentes. Merci pour ces moments magiques.",
            date: "2024-01-10",
            event: "Finale de Coupe du Monde"
        },
        {
            id: 3,
            name: "Sophie Bernard",
            rating: 4,
            comment: "Très belle expérience, l'équipe est professionnelle et attentive. Petit bémol sur l'attente mais rien de grave.",
            date: "2024-01-08",
            event: "Exposition d'Art Contemporain"
        },
        {
            id: 4,
            name: "Lucas Petit",
            rating: 5,
            comment: "Organisation parfaite du début à la fin. Les places étaient excellentes et l'ambiance était au rendez-vous.",
            date: "2024-01-05",
            event: "Match de Ligue 1"
        },
        {
            id: 5,
            name: "Emma Moreau",
            rating: 5,
            comment: "Une soirée inoubliable ! Tout était parfait, de l'accueil à la fin de l'événement. Bravo !",
            date: "2024-01-03",
            event: "Festival de Jazz"
        },
        {
            id: 6,
            name: "Thomas Roux",
            rating: 4,
            comment: "Très satisfait de l'expérience. L'équipe est réactive et les événements sont de qualité. À refaire !",
            date: "2024-01-01",
            event: "Concert de l'année"
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
                ★
            </span>
        ));
    };

    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

    return (
        <section className="reviews section">
            <div className="container">
                <h2>Nos Avis</h2>

                <div className="reviews-summary">
                    <div className="average-rating">
                        <div className="rating-number">{averageRating.toFixed(1)}</div>
                        <div className="stars">{renderStars(Math.round(averageRating))}</div>
                        <div className="total-reviews">Basé sur {reviews.length} avis</div>
                    </div>
                </div>

                <div className="reviews-grid">
                    {reviews.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <h4>{review.name}</h4>
                                    <div className="rating">{renderStars(review.rating)}</div>
                                </div>
                                <div className="review-date">{review.date}</div>
                            </div>
                            <div className="review-event">
                                <span className="event-tag">{review.event}</span>
                            </div>
                            <p className="review-comment">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;