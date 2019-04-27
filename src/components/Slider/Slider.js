import React, {Component} from 'react';
import './Slider.css';

class Slider extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    
                        <div className="carousel" data-flickity="{ &quot;wrapAround&quot;: true,&quot;imagesLoaded&quot;: true,&quot;initialIndex&quot;: 2, &quot;autoPlay&quot;: true}">

                            
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-5.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-43.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-29.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-1.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-37.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-78.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-42.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-45.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-106.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-83.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-70.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-30.png" alt="card" />
                            </div>
                            </div>
                            <div className="carousel-cell">
                            <div className="slider-img">
                                <img src="./cards/card-99.png" alt="card" />
                            </div>
                            </div>



                        </div>

                        

                        

                    </div>
                </div>
            </div>


        );
    }
}

export default Slider;