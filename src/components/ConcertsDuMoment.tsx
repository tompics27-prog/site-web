import React from 'react';

const concerts = [
    {
        id: 1,
        artist: 'Céline Dion',
        title: 'Paris 2026',
        date: 'Sept - Oct 2026',
        location: 'Paris La Défense Arena',
        image: 'https://images.unsplash.com/photo-1523995462485-235f5357b740?auto=format&fit=crop&w=800&q=80',
        accent: 'bg-beige-100',
    },
    {
        id: 2,
        artist: 'Bad Bunny',
        title: 'Debí Tirar Más Fotos World Tour',
        date: '4 & 5 Juillet 2026',
        location: 'Paris La Défense Arena',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        artist: 'The Weeknd',
        title: 'After Hours Til Dawn',
        date: '10, 11 & 12 Juillet 2026',
        location: 'Stade de France',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        artist: 'David Guetta',
        title: 'The Monolith',
        date: '11, 12 & 13 Juin 2026',
        location: 'Stade de France',
        image: 'https://images.unsplash.com/photo-1520975912472-16aefa2f7776?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 5,
        artist: 'BTS',
        title: 'Tournée mondiale 2026',
        date: '17 & 18 Juillet 2026',
        location: 'Stade de France',
        image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80',
    },
];

const ConcertsDuMoment: React.FC = () => {
    return (
        <section className="bg-[#202334] py-16">
            <div className="mx-auto max-w-[1280px] px-6">
                <div className="mb-10 border-b border-white pb-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">Interface de billetterie</p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        <span className="inline-flex items-center gap-3">
                            <span className="text-2xl">♫</span>
                            Les concerts du moment
                        </span>
                    </h2>
                </div>

                <div className="no-scrollbar -mx-6 overflow-x-auto pb-6 sm:-mx-8 sm:px-8">
                    <div className="flex min-w-full gap-6 px-6 sm:px-0">
                        {concerts.map((concert) => (
                            <article
                                key={concert.id}
                                className="group relative min-w-[280px] max-w-[320px] overflow-hidden rounded-[28px] bg-[#1f2937] shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:min-w-[320px]"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `linear-gradient(to bottom, rgba(16, 25, 37, 0.12), rgba(16, 25, 37, 0.5)), url('${concert.image}')`,
                                    }}
                                />
                                <div className="relative flex h-[520px] flex-col justify-end p-6 text-white">
                                    <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#f9e5cf] opacity-90">
                                        {concert.date}
                                    </p>
                                    <h3 className="text-3xl font-bold leading-tight tracking-tight text-white">
                                        {concert.artist}
                                    </h3>
                                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#f3d9b2]/90">
                                        {concert.title}
                                    </p>
                                    <p className="mt-4 text-sm text-[#f8f1e8]/90">
                                        {concert.location}
                                    </p>
                                    <div className="mt-6 inline-flex rounded-full bg-[#ffffff]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#ffe7c1] backdrop-blur-sm">
                                        Billets disponibles
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConcertsDuMoment;
