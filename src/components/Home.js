
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

//CSS import
import "../css/components/Home.css";

const Home = () => {

return(
  <div>
    <div>
    <h1>Naomi's Portfolio</h1>
    </div>
    <container>
    <Col xs={6} md={4}>
      <Image src="https://images.unsplash.com/photo-1612170482263-b7e393c4e87f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" roundedCircle />
    </Col>
    </container>
  </div>

)
}

export default Home;
