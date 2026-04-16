import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Intern</h4>
                <h5>Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            {/* <p>
              Built and maintained responsive frontend interfaces using React and Next.js,
              focusing on reusable components, performance optimization, and clean UI/UX.
              Collaborated with backend teams to integrate APIs and ensure smooth user experience across devices
            </p> */}
            <p>
              <ul>
                <li>
                  Developed responsive and modern frontend interfaces using{" "}
                  <b>React.js and Next.js</b>
                </li>
                <li>
                  Built reusable components to improve code efficiency and
                  maintainability
                </li>
                <li>
                  Integrated REST APIs to connect frontend with backend services
                </li>
                <li>
                  Focused on performance optimization for faster load times and
                  smooth UX
                </li>
                <li>
                  Implemented responsive design for all screen sizes (mobile,
                  tablet, desktop)
                </li>
                <li>
                  Collaborated with designers and backend developers to deliver
                  features end-to-end
                </li>
                <li>
                  Debugged and fixed UI issues to improve application stability
                  and user experience
                </li>
                <li>
                  Followed best practices for clean code structure and project
                  scalability
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
