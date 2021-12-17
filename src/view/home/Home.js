import React from 'react'
import "../../components/Home/home.css";

export default function home() {
    return (
        <div>
            <section className='home' id='home'>
            <div className='home-slider'>
                <div className='wrapper_home'>
                    <div className='slide'>
                        <div className='box' id='home-box'>
                            <div className='content'>
                                <span>Never Stop</span>
                                <h3>Explora</h3>
                                <p>Explora nuestra amplia seleccion de prendas y articulos de viaje. Todo al alcance de tus manos</p>
                                <a href='/productos' className='home-btn'>Comencemos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </div>
        
        
    )
}


