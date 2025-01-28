import React from 'react';
import Links from '../components/Links'
import '../style/home.css';
import '../style/text-link.css';

function HomePage() {
return (
<div className="home big-div">

    <section className="intro">
        <div className="intro-text">
            <h1>Welcome!</h1>
            <p>
                Hello! I'm Felix Taylor, a Virginia Tech Master of Information Technology student and James Madison
                University Computer Science graduate. Click the links above to learn more about me and explore my work!
            </p>

            <h2>Contact</h2>

            <Links />



            </div>
            <div className="intro-image">
                <img src="https://i.imgur.com/8HgV0Ho.jpeg" alt="A photo of Felix Taylor" />
            </div>
    </section>

</div>);
}

export default HomePage;