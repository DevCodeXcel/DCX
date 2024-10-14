import React from 'react';
import myImage from './cobin.jpg'; // Make sure to 

function About() {
  return (
    <section id="about">
      <img src={myImage} alt="Cobin Blair" className="about-image" />
      <p>
        <strong>DCX (DevCodeXcel)</strong> is more than just a brand; it’s a creative platform pushing the limits of web and mobile app development. 
        Founded by <strong>Cobin Blair</strong>, DCX aims to blend cutting-edge technology with inclusive and authentic representation. 
        At DCX, we focus on building projects that challenge the status quo, with an emphasis on innovative design, diverse voices, and community-driven solutions.
      </p>
      <p>
        Our mission is to empower developers and creators from all backgrounds, making sure everyone has a voice in the tech world. 
        Whether it’s through creating sleek and functional web/mobile applications or fostering a community that supports diversity in development, 
        DCX is here to break barriers and set new standards for creativity in technology.
      </p>
      <p>
        <strong>Cobin Blair</strong>, the visionary behind DCX, has a deep passion for coding and creativity. Starting his journey as a designer with over 
        15 years of experience in Photoshop, Cobin later transitioned to web and app development, dedicating himself to mastering frameworks like React and React Native. 
        Diagnosed with glaucoma in 2024, Cobin’s vision may be fading, but his ambition to build and inspire is stronger than ever. 
        His goal is to create a lasting impact in the tech world, not just through code, but by advocating for inclusivity, creativity, and forward-thinking solutions.
      </p>
      <p>
        DCX is built on the principles of hard work, learning, and innovation. Whether it's coding live on Twitch under the DevCodeXcel brand, building apps that solve real-world problems, 
        or fostering a community of like-minded developers through the DevBase initiative, Cobin strives to ensure DCX stands for creativity without limits. 
        The brand isn’t just about developing apps; it’s about developing a better world through tech.
      </p>
    </section>
  );
}

export default About;
