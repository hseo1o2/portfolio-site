import React, { useState } from 'react';
import '../styles/experiences.css';

const experiencesData = {
  ING: [
    {
      title: '대학생 단체 - 기업 매칭 플랫폼 UNI:CONNECT',
      date: '2025.03 -',
      roles: ['2025.03 - Product Manager', '2025.07 - Frontend Engineer'],
      description: [
        '대학생 단체와 기업을 연결하는 학생 커뮤니티 기반 마케팅 플랫폼',
        '신촌권 4개 대학교와 F&B 기업을 대상으로 MVP 검증 완료',
      ],
      tags: ['#기획', '#FE 개발']
    },
    {
      title: '이화여자대학교 중앙 실전창업학회 UNIS 6기',
      date: '2025.03 -',
      roles: ['2025.03 - 기획관리팀장'],
      description: [
        '1학기 동안 프론트엔드 직무스터디 진행',
        '아이디어 창업 프로젝트에서 창업에 대한 기본적인 사항 학습',
        '기획관리팀장으로서 해커톤/홈커밍데이 기획'
      ],
      tags: ['#FE 개발', '#기획', '#리더']
    },
    {
      title: '대학생 연합 IT 프로젝트 동아리 UMC 8기',
      date: '2025.03 -',
      roles: ['2025.03 - 2025.06 Node.js 파트장 역할', '2025.07 - 이화여대-가톨릭대-한국항공대 지부TF'],
      description: [
        '1학기 동안 Node.js 학습 (총 12주차 워크북 진행)',
        '파트장을 역임하며 총 6명의 워크북 확인 및 피드백',
        '협업 프로젝트(LOOPy) 진행 중'
      ],
      tags: ['#BE 개발', '#리더']
    }
  ],
  '2025': [],
  '2024': [],
  '2023': []
};

const Experiences = () => {
  const [selectedYear, setSelectedYear] = useState('ING');
  const data = experiencesData[selectedYear];

  return (
    <div className="experiences">
      <h2>My Experiences</h2>
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
          data.map((exp, idx) => (
            <div className="card" key={idx}>
              <div className="card-header">
                <p className="date">{exp.date}</p>
                <h3>{exp.title}</h3>
              </div>

              <div className="card-body">
                <div className="card-roles">
                  {exp.roles.map((role, i) => (
                    <p className="role" key={i}># {role}</p>
                  ))}
                </div>

                <div className="card-content">
                  <ul>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="empty">아직 이 연도에는 등록된 경험이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Experiences;
