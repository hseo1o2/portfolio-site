import React, { useState } from 'react';
import '../styles/experiences.css';

const projectsData = {
  ING: [
    {
      title: 'LOOPy 리워드 플랫폼',
      date: '2025.07 -',
      roles: ['Product Owner', 'Backend Developer'],
      description: [
        '카페 사장님과 고객을 연결하는 챌린지 기반 리워드 플랫폼',
        'Node.js, Express, Prisma, MySQL 기반 MVP 개발 중',
        '챌린지, 스탬프, 인증 시스템 중심 설계 및 ERD 구성'
      ],
      tags: ['#팀 프로젝트', '#백엔드', '#MVP 개발 중'],
      githubLink: 'https://github.com/Organization-LOOPy/LOOPy-BE'
    },
    {
      title: '포트폴리오 웹사이트',
      date: '2025.07 -',
      roles: ['Frontend Developer'],
      description: [
        'React 기반으로 개발한 개인 포트폴리오 사이트',
        'Vite 환경 + 컴포넌트 기반 설계',
        '경험 / 프로젝트 / 소개 탭 구현 및 스타일링'
      ],
      tags: ['#프론트엔드', '#React', '#Vite'],
      githubLink: 'https://github.com/hseo1o2/portfolio-site'
    }
  ],
  '2025': [],
  '2024': [],
  '2023': []
};

const Projects = () => {
  const [selectedYear, setSelectedYear] = useState('ING');
  const data = projectsData[selectedYear];

  return (
    <div className="experiences">
      <h2>My Projects</h2>
      <div className="year-tabs">
        {['ING', '2025', '2024', '2023'].map((year) => (
          <button
            key={year}
            className={`year-tab ${selectedYear === year ? 'active' : ''}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="cards">
        {data.length > 0 ? (
          data.map((proj, idx) => (
            <div className="card" key={idx}>
              <div className="card-header">
                <p className="date">{proj.date}</p>
                <h3>{proj.title}</h3>
              </div>

              <div className="card-body">
                <div className="card-roles">
                  {proj.roles.map((role, i) => (
                    <p className="role" key={i}># {role}</p>
                  ))}
                </div>

                <div className="card-content">
                  <ul>
                    {proj.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-bottom">
                <div className="card-tags">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                {proj.githubLink && (
                  <a
                    href={proj.githubLink}
                    className="github-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="empty">아직 이 연도에는 등록된 프로젝트가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
