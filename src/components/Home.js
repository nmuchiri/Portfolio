
import Image from 'react-bootstrap/Image'
import { Link }  from 'react-router-dom'

//CSS import
import "../css/components/Home.css";

const Home = () => {

return(
  <div>
    <div>
    <h1>Naomi Muchiri</h1>
    <h2>Full-Stack Software Engineer</h2>
    </div>
    <container>
    <div className="col s12 m5 l5 left-div">
      <Image src="https://i.ibb.co/t4cf2h1/CIRUS-HS2-WEB.jpg" height="300" widith= "300"/>
    </div>
    <br></br>
    <div>
    <Link to="/About">
            <a className="home-buttons btn" href>More about me</a>
          </Link>
    </div>
    </container>
      <br></br>
  </div>

)
}

export default Home;
