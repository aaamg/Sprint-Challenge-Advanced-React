import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import './PlayerCard.css'

function TheCard(props) {
  return( 
   <div className="contain">   
    <p>Player: {props.item.name}</p>
    <p>Country: {props.item.country}</p>
    <p>Searches: {props.item.searches}</p>
    </div>
  );
}

export default TheCard;


{/* <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>Player: {props.item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Country: {props.item.country}</Card.Subtitle>
        <Card.Text><p>Searches: {props.item.searches}</p></Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
    </Card> */}