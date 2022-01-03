import React from 'react'
import Image from "react-bootstrap/Image";
import logo from '../images/icon-duck.png';

import Container from 'react-bootstrap/Container';


export default function Header() {
    return (
        <Container style={containerStyle}>
            <Image src={logo} style={iconImageStyle} fluid />
            <h1 style={h1Style}>Coin Tool</h1>
        </Container>
    )
}


const containerStyle = {
    minWidth: "260px",
    maxWidth: "700px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 15,
    borderRadius: 20,
}

const iconImageStyle = {
    backgroundColor: "#FFFFFF",
    width: "100px",
    height: "100px",
    marginRight: 30,
    borderRadius: 20,
}

const h1Style = {
    fontSize: "5vw",
}