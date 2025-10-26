import React, { useState } from 'react';
import './EventCarousel.css';

interface Slide {
    title: string;
    description: string;
    image: string;
    buttonText: string;
}

const EventCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides: Slide[] = [
        {
            title: 'Annual Leadership & Ethics Seminar',
            description: 'Join distinguished speakers and community leaders as they share insights on leadership, ethics, and service. This signature event brings together West Point graduates, ROTC cadets, and community members.',
            image: `${import.meta.env.BASE_URL}images/audience.jpg`,
            buttonText: 'Learn More'
        },
        {
            title: 'Student Leadership Development',
            description: 'Supporting the development of future leaders through mentorship, scholarships, and educational programs focused on character and leadership excellence.',
            image: `${import.meta.env.BASE_URL}images/event-photo.jpg`,
            buttonText: 'Get Involved'
        },
        {
            title: 'Community Engagement',
            description: 'Connecting West Point graduates and supporters in the Greater Cincinnati area, fostering leadership, camaraderie, and service to our community.',
            image: `${import.meta.env.BASE_URL}images/seminar-bg.jpg`,
            buttonText: 'Join Us'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="event-carousel">
            <div className="carousel-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="slide-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                            <button className="carousel-btn">{slide.buttonText}</button>
                        </div>
                    </div>
                ))}

                <button className="carousel-nav prev" onClick={prevSlide} aria-label="Previous slide">
                    ‹
                </button>
                <button className="carousel-nav next" onClick={nextSlide} aria-label="Next slide">
                    ›
                </button>

                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventCarousel;
