import React, { useEffect, useState } from "react";
import "./hero.css";

//Date manipulating library
import dayjs from "dayjs";

export const Hero = () => {
  const [age, setAge] = useState(0);
  useEffect(() => {
    const ageInterval = setInterval(() => {
      const birthday = dayjs("2000-05-27");
      const currTime = dayjs();
      const age = currTime.diff(birthday, "year", true);
      setAge(age.toFixed(10));
    }, 100);
    return () => {
      clearInterval(ageInterval);
    };
  });

  const generateRandomAccent = () => {
    const r = Math.floor(Math.random() * 256),
          g = Math.floor(Math.random() * 256),
          b = Math.floor(Math.random() * 256)

    const newColor = `${r}, ${g}, ${b}`;
    
    document.documentElement.style.setProperty('--accent-color', newColor);
  } 

  return (
    <div className="hero-wrapper">
      <div className="hero-headshot">
        <img
          className="headshot"
          src="headshot.png"
          onClick={() => generateRandomAccent()}
        />
      </div>

      <div className="hero-text">
        <h1>Hello, my name is Ben!</h1>
        <p>
          I am <span id="hero-age">{age}</span>years old and I am currently
          learning to be a Full-Stack Web Developer, Below you can learn more
          about me!
        </p>
      </div>
    </div>
  );
};
