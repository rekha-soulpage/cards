import React from "react"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import penImage from '../images/pen'
import { Card} from 'react-bootstrap';
function Cards() {

    return (
<div>
<Container>
  <Row>
    <Col> <>
 <Card style={{ width: '21rem' }}>
     
     <Card.Img variant="top" src="/images/fashopi.jpg" />
  
  <Card.Body>
    <Card.Title>Search</Card.Title>
    <Card.Text>
    Looking for shopping ? Best offers in your Location ? New Collections in Stores
    </Card.Text>
    
  </Card.Body>
</Card>
</></Col>
    <Col> <>
 <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="/images/fashopi.jpg" />
  <Card.Body>
    <Card.Title>Select</Card.Title>
    <Card.Text>
    Browse and select the best store near your that matches your shopping in there
    </Card.Text>
    
  </Card.Body>
</Card>
</></Col>
<Col> <>
 <Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src="/images/fashopi.jpg" />
  <Card.Body>
    <Card.Title>Shop</Card.Title>
    <Card.Text>
    Go & have a great shopping,rate and review your experience.Finally,Thank FASHOPI!
    </Card.Text>
    
  </Card.Body>
</Card>
</></Col>
  </Row>
  </Container>
  </div>
    )
    }
    export default Cards;






 
//        <>
//  <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
// </>
// );

//   }
  
// export default Cards;