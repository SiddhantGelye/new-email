import React from 'react'
import './App.css'
import image from './siddhu.jpg'
const App = ()=>{
    return(
        <div>
            <div className="container">
                <div className="email-signature">
                    <div className="image">
                        <img src={image} alt=""/>
                    </div>
                    <div className="content">
                        <h1 className="name">Siddhant Gelye</h1>
                        <h3 className="post">Full Stack Web Developer</h3>
                        <ul className="contact">
                            <li><i className="fas fa-phone-alt"></i> +919769545684</li>
                            <li><i className="fas fa-envelope"></i>siddhantwebdeveloper@gmail.com</li>
                            <li><i className="fas fa-map-marker-alt"></i> Wagle Estate, Thane(W)-400604</li>
                        </ul>
                        <ul className="icons">
                            <li><i className="fab fa-facebook-f facebook"></i></li>
                            <li><i className="fab fa-twitter twitter"></i></li>
                            <li><i className="fab fa-instagram instagram"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default App;