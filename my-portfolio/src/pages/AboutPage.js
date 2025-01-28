import React from 'react';
import Links from '../components/Links';
import '../style/about.css';

function AboutPage() {
    return (
      <div className="about-page">  
        <div className="content">
        <h1>About Me</h1>
          <p>Hello, I’m Felix Taylor, a developer based in Moseley, VA. I’m currently pursuing a Master of Information Technology at Virginia Tech (expected graduation: 2026) and hold a Bachelor of Science in Computer Science from James Madison University (class of 2022). I graduated with honors and was inducted into the International Honor Society for the Computing and Information Disciplines. Since then, I have gained extensive experience in full-stack development through professional training and over a year as an FSD with Hexaware Technologies. I also dedicate time as a volunteer webmaster and developer for a nonprofit organization, having independently designed, developed, and deployed their website myself.</p>
          <p>I have a deep love of computer science and pride myself on being a versatile, fast learner. My work style is fastidious—I ensure my code is thoroughly tested, well-documented, and formatted for efficiency, effectiveness, and readability. As a highly creative person, I bring imaginative problem-solving skills to my work, whether it’s debugging complex systems or designing user-friendly features. I thrive in collaborative environments, where I can learn from talented developers and gain new perspectives. Because of my passion for and enjoyment of every aspect of the development process, I consider it more than just a job—it’s something I truly love and enjoy, and I’m committed to dedicating the rest of my life to growing as a developer and contributing to meaningful projects.</p>
          <p>Outside of computer science, I also love reading and writing, and believe that my storytelling and writing skills assist in my development work in ways that may not be immediately apparent, such as through my ability to break down complex problems into more manageable, logical steps, or by approaching challenges with a creative mindset that helps me think outside the box and find innovative solutions. These skills help me tackle development projects with a balance of logic and creativity. When I’m reading, writing, or coding, I’ll also be listening to music (most likely The Beatles or Paul McCartney). I have three animals, whose pictures are shown below.</p>
          <p>My ultimate goal is to establish myself as a full-time software developer or full-stack developer, with a strong emphasis on continuous learning and growth in the field of computer science. I am excited to hone my expertise in technologies like Java/Spring Boot, React/Angular, and SQL, while also exploring new languages, frameworks, and tools that are reshaping the industry. As I advance in my career, I aim to contribute to impactful projects that not only challenge my technical abilities but also offer opportunities for collaboration and creative problem-solving.</p>
          <p>If you're looking for a dedicated developer with a strong skillset in full-stack development and a commitment to continuous growth, I would love to connect and discuss how I can contribute to your team. Please feel free to reach out. Thank you!</p>
          <footer className="footer">
          <p>Best wishes, Felix Taylor</p>
        </footer>
        
        </div>
  
  
        <div className="images">
          <div className="image-container">
            <img src="https://i.imgur.com/y7BzhCy.jpeg" alt="My cat Zola" />
            <p>Zola</p>
          </div>
          <div className="image-container">
            <img src="https://i.imgur.com/idoHQDE.jpeg" alt="My cat Muse" />
            <p>Muse</p>
          </div>
          <div className="image-container">
            <img src="https://i.imgur.com/gbUw1E5.jpeg" alt="My dog Vampy" />
            <p>Vampy</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutPage;