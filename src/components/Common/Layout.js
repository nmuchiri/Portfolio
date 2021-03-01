import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai";

const Layout =(props)=>{
    return(
        <div>
            <nav>
                <div className="nav-wrapper">
                <ul>
                  <li> <Link to = "/">Home</Link>{' '}</li>
                  <li> <Link to = "/About">About</Link>{' '}</li>
                  <li> <Link to = "/Projects">Projects</Link>{' '}</li>
                  <li> <Link to = "/Contact">Contact</Link>{' '}</li>
                </ul>
                </div>
        </nav>
        <div>
            {props.children}
        </div>

        <footer className="page-footer">
        <div className="container">
          <div className="footer-container">
            <a href="https://github.com/nmuchiri">
              {" "}
              <FaGithub size="2em" color="white" />
            </a>
            <a href="www.linkedin.com/in/nmuchiri">
              {" "}
              <FaLinkedin size="2em" color="white" />
            </a>
            <a href="mailto:lonesomebounty@gmail.com">
              {" "}
              <AiOutlineMail size="2em" color="white" />
            </a>
            <div>© Naomi Muchiri 2021</div>
          </div>
        </div>
      </footer>
        </div>
    )
}
export default Layout