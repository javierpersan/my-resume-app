import React, { useRef, useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { gsap } from 'gsap';
import Img from '../Images/avatar.png';
import '../App.css';


const skills = [
  { skill: '.NET', percentage: 75 },
  { skill: 'JavaScript', percentage: 90 },
  { skill: 'HTML', percentage: 85 },
  { skill: 'CSS', percentage: 80 },
  { skill: 'React', percentage: 70 },
  { skill: 'Angular', percentage: 65 },
  { skill: 'Node.js', percentage: 75 },
  { skill: 'Python', percentage: 60 },
  { skill: 'Java', percentage: 70 },
  { skill: 'SQL', percentage: 75 },
  { skill: 'Git', percentage: 80 },
  { skill: 'Android', percentage: 55 },
  { skill: 'Ionic', percentage: 60 },
  { skill: 'Flutter', percentage: 85 },
  { skill: 'QC', percentage: 90 },
];

function Skills() {
  const [progress, setProgress] = useState(skills.map(() => 0));
  const textRef = useRef(null);

  const animateSkill = (index, percentage) => {
    gsap.to(progress, {
      duration: 0.2,
      ease: 'power1.out',
      [index]: percentage,
      onUpdate: () => setProgress([...progress]),
    });
  };

  const onHover = () => {
    const timeline = gsap.timeline();
    timeline.to(textRef.current, {
      duration: 3,
      text: { value: "A la derecha tienes mis skills haz hover en cada una para conocer el nivel", delimiter: ' ' },
      ease: "power3.out",
    });
  };

  return (
    <div className="skills-container">
      <div style={{ overflow: 'hidden', backgroundColor: 'transparent' }} className='separador'>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#000000', width: '131%', height: '135px' }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
      </div>
      <div className="flex items-center h-screen">
        {/* Tarjeta en la mitad izquierda */}
        <div className="w-1/2 flex justify-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">SKILLS</p>
                <img
                  src={Img}
                  alt=""
                  className="w-40 h-40 rounded-full mx-auto" // Ajusta el tamaño y el estilo según tus necesidades
                />
              </div>
              <div className="flip-card-back" onMouseEnter={onHover}>
                <p className="title">HOVER</p>
                <p ref={textRef}></p>
              </div>
            </div>
          </div>
        </div>

        {/* Círculos de habilidades en la mitad derecha */}
        <div className="w-1/2 flex flex-wrap justify-center -m-4">
          {skills.map((skill, index) => (
            <div key={index} className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32 p-4 m-4 flex flex-col items-center">
              <p className="text-white font-bold mb-2">{skill.skill}</p>
              <div onMouseEnter={() => animateSkill(index, skill.percentage)}>
                <CircularProgressbar
                  value={progress[index]}
                  styles={{
                    path: {
                      stroke: `rgb(228, 98, 221)`,
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
