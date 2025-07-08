import React from 'react';
import '../styles/About.css';
import emojiImg from '../assets/images/emoji.png';
import githubIcon from '../assets/icons/Github-Dark.svg';
import htmlIcon from '../assets/icons/HTML.svg';
import figmaIcon from '../assets/icons/Figma-Dark.svg';
import cssIcon from '../assets/icons/CSS.svg';
import vscodeIcon from '../assets/icons/VSCode-Dark.svg';
import nodeIcon from '../assets/icons/NodeJS-Dark.svg';
import discordIcon from '../assets/icons/Discord.svg';
import reactIcon from '../assets/icons/React.svg';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <img src={emojiImg} alt="Memoji" className="emoji-img" />

        <div className="about-content">

          <h2>장현서 / Jang Hyeonseo</h2>
          <p>
            마케팅도 하고, 기획도 하고, 개발도 하는 다각적 인재입니다! <br />
            다양한 분야를 경험하며 열정 속에서 매일 한걸음씩 성장하는 중입니다!
          </p>

          {/* EDUCATION 섹션 */}
          <div className="section-horizontal">
            <h3 className="section-title">EDUCATION</h3>
            <div className="section-content">
              <p>이화여자대학교 컴퓨터공학전공 23</p>
              <p>복수전공 1: 기업가정신(벤처경영학)</p>
              <p>복수전공 2: 스크랜튼학부 자기설계전공 디지털인문학 트랙</p>
            </div>
          </div>

          {/* SKILLS 섹션 */}
          <div className="section-horizontal">
            <h3 className="section-title">SKILLS & TOOLS</h3>
            <div className="skills-icons section-content">
              <div className="skill-box"><img src={githubIcon} alt="GitHub" /></div>
              <div className="skill-box"><img src={htmlIcon} alt="HTML" /></div>
              <div className="skill-box"><img src={figmaIcon} alt="Figma" /></div>
              <div className="skill-box"><img src={cssIcon} alt="CSS" /></div>
              <div className="skill-box"><img src={vscodeIcon} alt="VSCode" /></div>
              <div className="skill-box"><img src={nodeIcon} alt="Node.js" /></div>
              <div className="skill-box"><img src={discordIcon} alt="Discord" /></div>
              <div className="skill-box"><img src={reactIcon} alt="React" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
