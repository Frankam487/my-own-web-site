// import { useState, useEffect } from "react";
// import "./Home.css";

// const Home = () => {
//   const fullText = "Bienvenue sur mon site !";
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayText(fullText.slice(0, index));
//       index++;
//       if (index > fullText.length) clearInterval(interval);
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="home">
//       <div className="home-hero">
//         <div className="text">
//           <h1>Frank Kamgang</h1>
//           <h2 className="typing">{displayText}</h2>
//           <p>
//             Développeur Web passionné, créant des expériences interactives et
//             immersives.
//           </p>
//           <button>
//             Découvrir 👋
//             <i className="uil uil-arrow-right"></i>
//           </button>
//         </div>
//         <div className="home-img"></div>
//       </div>
//       <div className="icons">
//         <a href="#" aria-label="Facebook">
//           <i className="uil uil-facebook"></i>
//         </a>
//         <a href="#" aria-label="Twitter">
//           <i className="uil uil-twitter"></i>
//         </a>
//         <a href="#" aria-label="Instagram">
//           <i className="uil uil-instagram"></i>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Home;



import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-hero">
        <div className="text">
          <h1 className="typing-text">Frank Kamgang</h1>
          <div className="designer-title">
            <span className="line"></span>
            <h2>Designer Visuel</h2>
          </div>
          <p>
            Développeur Web passionné, créant des expériences interactives et
            immersives.
          </p>
          <button>
            Découvrir 👋
            <i className="uil uil-arrow-right"></i>
          </button>
        </div>
        <div className="home-img"></div>
      </div>
      <div className="icons">
        <a href="#" aria-label="Facebook">
          <i className="uil uil-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="uil uil-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="uil uil-instagram"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
