import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div id="about" className="about-area border-bottom ptb-100">
            <div className="common-right-text">
                <span>ABOUT</span>
            </div>

            <div className="container">
                <div className="about-content">
                    <div className="section-title">
                        <h2>Full Stack Engineer & Data Scientist</h2>
                        <span className="sub-title">Summary</span>
                        <p>
                            Proactive, enthusiastic and result-oriented software engineer possessing comprehensive experience in frontend development, UI/UX design, and backend development.
                        </p>
                        <p>
                            Creative problem solver who loves to solve technical difficulties, friendly team player collaborated with cross-functional team members.
                        </p>
                    </div>
                    <div className="section-title">
                        <span className="sub-title">Key Competencies</span>
                        <p>Frontend development | UI/UX design | agile | communication | problem solving | mentoring | project planning | object-oriented programing | backend development | database | devops | machine learning | authentication | authorization | version control | fast learning | test-driven development | attention to detail | payment integration | code review </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;