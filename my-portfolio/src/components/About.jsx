import React from "react";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I’m a Frontend Developer with 3+ years of experience in creating
          websites and web apps using React.js, JavaScript, and Redux. I enjoy
          building fast, clean, and easy-to-use interfaces that work well on all
          devices. I’m good at working with components, using APIs, and
          improving website performance. I follow clean coding practices and
          always try to write code that’s easy to understand and maintain. I
          work well in teams and have experience in Agile environments. I’m
          always looking to learn new things and improve my skills in frontend
          development.
        </p>

        <h3>Skills</h3>
        <ul className="skills">
          <li>React / Vite</li>
          <li>HTML &amp; CSS (Flexbox, Grid)</li>
          <li>JavaScript</li>
          <li>UI design &amp; accessibility</li>
          <li>Redux/Redux Toolkit</li>
        </ul>
      </div>
    </section>
  );
}
