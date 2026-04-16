import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>

                <div>
                  <h4>Workalify EMS</h4>
                  <p>Web Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Javascript, TypeScript, React</p>
            </div>
            <WorkImage
              image="/images/workalifyDashboard.png"
              alt="workalifyDashboard.png"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>

                <div>
                  <h4>Yardzie</h4>
                  <p>Web Based Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Javascript, TypeScript, React</p>
            </div>
            <WorkImage
              image="/images/yardzieDashboard.png"
              alt="yardzieDashboard.png"
            />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>

                <div>
                  <h4>News App</h4>
                  <p>React.js UI Component</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Javascript, BootStrap, React</p>
            </div>
            <WorkImage image="/images/newsApp.png" alt="newsApp.png" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>

                <div>
                  <h4>React Text Editor</h4>
                  <p>React.js UI Component</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Javascript, BootStrap, React</p>
            </div>
            <WorkImage
              image="/images/reactTextEditor.png"
              alt="reactTextEditor.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
