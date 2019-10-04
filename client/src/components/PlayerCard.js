import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  margin: auto;
  border: 2px solid black;
  margin-bottom: 2rem;
`;

function Card(props) {
  return( 
   <Container>   
    <p>Player: {props.item.name}</p>
    <p>Country: {props.item.country}</p>
    <p>Searches: {props.item.searches}</p>
  </Container>
  );
}

export default Card;