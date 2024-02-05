import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import miImagen from './limkedin.JPG';
function Header() {
  const headerRef = useRef();
  const nameRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    gsap.set(descRef.current, { x: 100, autoAlpha: 0 });
  }, []);

  const onHover = () => {
    gsap.to(nameRef.current, { duration: 0.5, x: -100, autoAlpha: 0 });
    gsap.to(descRef.current, { duration: 1, x: 0, autoAlpha: 1, ease: "power3.out" });

    gsap.to(descRef.current, {
      duration: 2,
      text: "<span class='highlighted-word2'>Desarrollador</span> de Software <span class='highlighted-word'>apasionado</span> por las nuevas tecnologías y la programación.",
      delay: 0.5,
    });
  };
  const onLeave = () => {
    gsap.to(nameRef.current, { duration: 0.5, x: 0, autoAlpha: 1 });
    gsap.to(descRef.current, { duration: 1, x: 100, autoAlpha: 0, ease: "power3.out" });
    gsap.to(descRef.current, {
      duration: 1,
      text: "",
      delay: 0,
    });
  };

  return (
    <div className="header-container bg-pattern-gray text-white p-5 shadow-xl h-96 flex items-center justify-start"
        ref={headerRef} 
        onMouseEnter={onHover} 
        onMouseLeave={onLeave}>
        <div className='header-left'>
            <h1 className="text-4xl font-bold" ref={nameRef}>
            JAVIER PÉREZ
            </h1>
            <p className="text-white text-xl mt-2" ref={descRef}>
            {/* Texto inicial vacío para la animación de tipo máquina de escribir */}
            </p>
        </div>
        <div className='header-right'>
        <div class="tooltip-container">
          <div class="tooltip">
            <div class="profile">
              <div class="user">
                <div class="img"><img src={miImagen} alt="perfil" /></div>
                <div class="details">
                  <div class="name">User</div>
                  <div class="username">Javier Pérez</div>
                </div>
              </div>
            </div>
          </div>
          <div class="text">
            <a class="icon" href="https://www.linkedin.com/in/javier-pérez-9030271b1/" target="_blank">
              <div class="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="fab fa-linkedin">
                  <svg viewBox="0 0 448 512" height="2em">
                    <path
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="text">LinkedIn</div>
            </a>
            
      </div>
      
      
  </div>
  <div className='btngit'>
      
  </div>
</div>
     
    </div>
  );
}

export default Header;
