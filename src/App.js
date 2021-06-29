import React from 'react'
import './App.css'
import image from './siddhu.jpg'
const App = ()=>{
    return(
        <div>
            <div class="container">
                <div class="email-signature">
                    <div class="image">
                        <img src={image} alt=""/>
                    </div>
                    <div class="content">
                        <h1 class="name">Siddhant Gelye</h1>
                        <h3 class="post">Full Stack Web Developer</h3>
                        <ul class="contact">
                            <li><i class="fas fa-phone-alt"></i> +919769545684</li>
                            <li><i class="fas fa-envelope"></i>siddhantwebdeveloper@gmail.com</li>
                            <li><i class="fas fa-map-marker-alt"></i> Wagle Estate, Thane(W)-400604</li>
                        </ul>
                        <ul class="icons">
                            <li><i class="fab fa-facebook-f"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default App;