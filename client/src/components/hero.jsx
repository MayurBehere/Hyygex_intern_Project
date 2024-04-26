import React, { useState } from "react";
import "../App.css";
import bulb from "../assets/bulb.svg";
import speaker from "../assets/speaker.svg";
import refresh from "../assets/refresh.svg";
import max from "../assets/max.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

const links = ["Study", "Quiz", "Test", "Game", "Others"];
const questions = ["9 + 6 + 7x - 2x - 3", "5x - 3 + 2x - 7", "6x - 2 + 3x - 5", "7x - 3 + 4x - 6", "8x - 4 + 5x - 7"];

const Hero = () => {
  const [activeLink, setActiveLink] = useState(links[0]);
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handlePrevQuestion = () => {
    setQuestionIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length);
  };

  const refreshQuestions = () => {
    setQuestionIndex(0);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto pt-10 pb-10">
          <nav className="flex justify-center">
            <ul className="flex justify-between space-x-10">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={() => setActiveLink(link)}
                    className={`font-bold text-xl text-white ${
                      activeLink === link
                        ? "gradient-secondary border-b-6 border-rgba(6, 40, 110, 1)"
                        : "text-gray-500"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div
        className="flex justify-center align-center pt-5 "
        style={{ maxWidth: "1440px", margin: "0 auto" }}
      >
        <div
          className="gradient-pic"
          style={{
            width: "700px",
            height: "370px",
            borderRadius: "40px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "500px",
          }}
        >
          <div style={{ position: "absolute", top: 35, left: 35 }}>
            <img src={bulb} alt="" />
          </div>
          <div style={{ position: "absolute", top: 35, right: 35 }}>
            <img src={speaker} alt="" />
          </div>
          <h1 className="text-center text-4xl text-white">{questions[questionIndex]}</h1>
        </div>
      </div>
      <div className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto pt-10 pb-10">
        <nav className="flex justify-center">
          <ul className="flex justify-between space-x-10">
            <li><img src={refresh} alt="" className='pr-10 pt-2' onClick={refreshQuestions} /></li>
            <li><img src={left} alt="" onClick={handlePrevQuestion} /></li>
            <li><h1 className='font-bold text-xl pt-2'>{questionIndex + 1}/{questions.length}</h1></li>
            <li><img src={right} alt="" onClick={handleNextQuestion} /></li>
            <li><img src={max} alt="" className='pl-10 pt-2'/></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Hero;