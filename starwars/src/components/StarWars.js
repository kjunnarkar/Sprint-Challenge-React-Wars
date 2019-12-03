import React from "react";
import "./StarWars.css";
import styled from "styled-components";

/* styled-components */
const Card = styled.div `
  border: solid black 2px;
  margin: 50px 250px 50px 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const Name = styled.h2 `
  color: yellow;
  font-weight: bold;
`;

const ListHeader = styled.ul `
  list-style-type: none;
`;

const ListItems = styled.li `
  color: white;
`;

const Link = styled.a `
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  :hover {
    color: red;
  }
`;
/* End styled-components */

const StarWars = props => {
  return (
    <Card>
      <Name>Name: {props.name}</Name>
      <ListHeader>
        <ListItems>Gender: {props.gender}</ListItems>
        <ListItems>Birth Date: {props.birth}</ListItems>
        <ListItems>Height: {props.height}</ListItems>
        <ListItems>Mass: {props.mass}</ListItems>
        <ListItems>Hair Color: {props.hair}</ListItems>
        <ListItems>Skin Type: {props.skin}</ListItems>
        <ListItems>Eye Color: {props.eye}</ListItems>
        <Link href={`${props.species}`}>Species: {props.species}</Link>
        <Link href={`${props.home}`}>Home: {props.home}</Link>
      </ListHeader>
    </Card>
  );
};

export default StarWars;
