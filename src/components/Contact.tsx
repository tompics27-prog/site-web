import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactProps {
    bookingEvent?: string;
}

const Contact: React.FC<ContactProps> = ({ bookingEvent = '' }) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [numero, setNumero] = useState('');
    const [evenement, setEvenement] = useState(bookingEvent);
    const [nombrePlaces, setNombrePlaces] = useState('');
    const [categorie, setCategorie] = useState('');
    const [datePreferee, setDatePreferee] = useState('');
    const [demande, setDemande] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setEvenement(bookingEvent);
    }, [bookingEvent]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
            const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('Configuration EmailJS manquante. Veuillez configurer les variables d\'environnement.');
            }

            const reservationDetails = [
                `Événement : ${evenement || 'Non précisé'}`,
                `Nombre de places : ${nombrePlaces || 'Non précisé'}`,
                `Catégorie : ${categorie || 'Non précisée'}`,
                `Date préférée : ${datePreferee || 'Non précisée'}`,
                `Demande complémentaire : ${demande || 'Aucune'}`
            ].join('\n');

            const templateParams = {
                from_name: `${prenom} ${nom}`,
                from_email: 'noreply@lerepaire.com',
                to_email: 'team.lerepaire@gmail.com',
                nom: nom,
                prenom: prenom,
                numero: numero,
                demande: reservationDetails,
                date_envoi: new Date().toLocaleString('fr-FR')
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setNom('');
            setPrenom('');
            setNumero('');
            setEvenement(bookingEvent);
            setNombrePlaces('');
            setCategorie('');
            setDatePreferee('');
            setDemande('');
            alert('Merci pour votre demande de réservation ! Nous vous recontacterons rapidement.');
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            alert('Une erreur s\'est produite lors de l\'envoi de la demande. Veuillez réessayer.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact section">
            <div className="container">
                <div className="contact-form-container">
                    <h2>Réserver mes places</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="nom">Nom *</label>
                                <input
                                    type="text"
                                    id="nom"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    required
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="prenom">Prénom *</label>
                                <input
                                    type="text"
                                    id="prenom"
                                    value={prenom}
                                    onChange={(e) => setPrenom(e.target.value)}
                                    required
                                    placeholder="Votre prénom"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="numero">Numéro de téléphone</label>
                            <input
                                type="tel"
                                id="numero"
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                                placeholder="06 XX XX XX XX"
                            />
                        </div>

                        <div className="booking-form-grid">
                            <div className="form-group">
                                <label htmlFor="evenement">Événement concerné</label>
                                <input
                                    type="text"
                                    id="evenement"
                                    value={evenement}
                                    onChange={(e) => setEvenement(e.target.value)}
                                    placeholder="Nom de l'événement"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombrePlaces">Nombre de places souhaitées</label>
                                <input
                                    type="number"
                                    id="nombrePlaces"
                                    min="1"
                                    value={nombrePlaces}
                                    onChange={(e) => setNombrePlaces(e.target.value)}
                                    placeholder="2"
                                />
                            </div>
                        </div>

                        <div className="booking-form-grid">
                            <div className="form-group">
                                <label htmlFor="categorie">Catégorie de places</label>
                                <select
                                    id="categorie"
                                    value={categorie}
                                    onChange={(e) => setCategorie(e.target.value)}
                                >
                                    <option value="">Choisir une catégorie</option>
                                    <option value="OR">OR</option>
                                    <option value="Standard assises">Standard assises</option>
                                    <option value="Fosses">Fosses</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="datePreferee">Date de préférence (si applicable)</label>
                                <input
                                    type="date"
                                    id="datePreferee"
                                    value={datePreferee}
                                    onChange={(e) => setDatePreferee(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="demande">Informations complémentaires</label>
                            <textarea
                                id="demande"
                                value={demande}
                                onChange={(e) => setDemande(e.target.value)}
                                placeholder="Date alternative, nombre de personnes, préférence de placement, ou autre détail..."
                                rows={5}
                            />
                        </div>

                        <button type="submit" className="submit-button" disabled={isSubmitting}>
                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;