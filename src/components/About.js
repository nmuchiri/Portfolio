import React from 'react'
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaPython,
  FaGit,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiFlask,
} from "react-icons/si";

function About() {
  return (
    <div>

        <div>
            <h1>About Me</h1>
        </div>
        <div>
        <p>
        I am an entrepreneurial individual with strong skills in full-stack software engineering.
        I bring over ten years' experience in customer facing roles through work in retail and performing arts. In
        addition, I am a divergent and quick thinker who can bring a creative bend to any enterprise.
        </p>
      </div> 
      <div>
      <a className="btn buttons project-button"
              href="https://drive.google.com/file/d/1dqh-kVKmvf6uiTLDNSfdDHz3O8btnOH3/view?usp=sharing"
        >
              My Resume
            </a>
      </div> 
      <div>
        <h3>Skills</h3>
      </div>

    <div>

    <div className="row">
          <div className="col s4 m2 l2">
              <SiJavascript size="4em" />
              <div>Javascript</div>
            </div>

            <div className="col s4 m2 l2">
              <FaHtml5 size="4em" />
              <div>HTML5</div>
            </div>

            <div className="col s4 m2 l2">
              <FaReact size="4em" />
              <div>React</div>
            </div>

            <div className="col s4 m2 l2">
              <FaNodeJs size="4em" />
              <div>Node JS</div>
              </div>

            <div className="col s4 m2 l2">
              <FaCss3Alt size="4em" />
              <div>CSS</div>
            </div>

            <div className="col s4 m2 l2">
              <FaPython size="4em" />
              <div>Python</div>
            </div>
          </div>
      </div>
          <div className="row">
            <div className="col s4 m2 l2">
              <SiMongodb size="4em" />
              <div>MongoDB</div>
            </div>

            <div className="col s4 m2 l2">
              <SiPostgresql size="4em" />
              <div>PostgreSQL</div>
            </div>

            <div className="col s4 m2 l2">
              <SiPostman size="4em" />
              <div>Postman</div>
            </div>

            <div className="col s4 m2 l2">
              <FaGit size="4em" />
              <div>git</div>
            </div>

            <div className="col s4 m2 l2">
              <SiFlask size="4em" />
              <div>Flask</div>
            </div>

            <div className="col s4 m2 l2">
              <FaDatabase size="4em" />
              <div>SQL</div>
            </div>
      </div> 

    </div>

  )
}

export default About