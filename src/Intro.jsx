import React from "react";
import "./Intro.css"; // ملف الـ CSS 

function Intro({ onSkip }) {
  return (
    <div className="intro-container">
      <h2>"وَأَقِمِ الصَّلَاةَ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ "</h2>
      <div className="arrow" onClick={onSkip}>➡️</div>
    </div>
  );
}

export default Intro;
