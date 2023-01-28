import React, { useEffect, useState } from "react";
import "./hero.css";

//Date manipulating library
import * as dayjs from "dayjs";

export const Hero = () => {
  const [age, setAge] = useState(0);
  useEffect(() => {
    const ageInterval = setInterval(() => {
      const birthday = dayjs("2000-05-27");
      const currTime = dayjs();
      const age = currTime.diff(birthday, "year", true);
      setAge(age.toString().substring(0, 12));
    }, 100);
    return () => {
      clearInterval(ageInterval);
    };
  });

  return (
    <div className="intro-wrapper">
      <img
        className="headshot"
        src="headshot.png"
      />
      <h1>Hello, my name is Ben!</h1>
      <p>
        I am <strong>{age} years</strong> old and I am currently learning to be
        a Full-Stack Web Developer, Below you can learn more about me!
      </p>
    </div>
  );
};
