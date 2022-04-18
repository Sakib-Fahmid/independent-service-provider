import React from 'react';
import visa from '../../images/banner/visa.jpg';
import german from '../../images/banner/german.jpg';
import study from '../../images/banner/study.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='banner-img' src={german} alt="..."/>
                            <div className="carousel-caption d-none d-md-block bg-dark rounded">
                                <h5>Learn German from me</h5>
                                <p>I have passed C2 level from Goethe Institute in German Language. I Would love to teach you too.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className='banner-img' src={study} alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark rounded">
                            <h5>Apply to German Universities</h5>
                            <p>I help you to get offer letter from top German universities like TUM, Frei Berlin RWTCH Aachen and so on</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='banner-img' src={visa} alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark rounded">
                            <h5>Visa application</h5>
                            <p>You can rest free and give me the responsibility to land you an interview with your local German consulate's VO</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;