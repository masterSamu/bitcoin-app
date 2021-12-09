import React from 'react'
import Image from "react-bootstrap/Image";
import logo from '../images/icon-duck.png';

import Container from 'react-bootstrap/Container';


export default function Header() {
    return (
        <Container style={containerStyle}>
            <Image src={logo} style={iconImageStyle} fluid rounded />
            <h1>Scroog's crypto</h1>
        </Container>
    )
}


const containerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    minWidth: "260px",
    maxWidth: "700px",
    marginBottom: 25,
    marginTop: 15,
}

const iconImageStyle = {
    backgroundColor: "#FFF",
    width: "100px",
    height: "100px",
    marginRight: 30
}