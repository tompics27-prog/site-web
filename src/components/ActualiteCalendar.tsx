import React from 'react';

const events = [
    {
        month: 'Octobre',
        items: [
            { day: '12', city: 'Paris', event: 'The Weeknd', venue: 'Accor Arena' },
            { day: '23', city: 'Paris', event: 'Coldplay', venue: 'Stade de France' },
            { day: '31', city: 'Lyon', event: 'Mylène Farmer', venue: 'Groupama Stadium' }
        ]
    },
    {
        month: 'Novembre',
        items: [
            { day: '07', city: 'Marseille', event: 'David Guetta', venue: 'Orange Vélodrome' },
            { day: '15', city: 'Paris', event: 'Oasis', venue: 'Parc des Princes' },
            { day: '28', city: 'Nice', event: 'Lorenzo', venue: 'Stade du Ray' }
        ]
    }
];

const ActualiteCalendar: React.FC = () => {
    return (
        <section className="actualite-calendar-section">
            <div className="container">
                <div className="actualite-calendar-header">
                    <p className="actualite-kicker">Actualité</p>
                    <h2>Calendrier</h2>
                </div>

                <div className="actualite-calendar-list">
                    {events.map((monthGroup) => (
                        <div className="actualite-month-block" key={monthGroup.month}>
                            <div className="actualite-month-header">
                                <span>{monthGroup.month}</span>
                            </div>

                            <div className="actualite-month-items">
                                {monthGroup.items.map((item) => (
                                    <div className="actualite-calendar-item" key={`${monthGroup.month}-${item.day}-${item.event}`}>
                                        <div className="actualite-date-box">
                                            <span className="actualite-date-label">Jour</span>
                                            <span className="actualite-date-day">{item.day}</span>
                                        </div>

                                        <div className="actualite-info">
                                            <div className="actualite-event-bar">
                                                <span>{item.event}</span>
                                            </div>
                                            <p>{item.city}</p>
                                            <span>{item.venue}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActualiteCalendar;
