import React from 'react'
import Container from 'react-bootstrap/Container';

export default function Footer() {
    return (
        <Container style={containerStyle}>
            <span style={spanElementStyle}>Background vector created by <a href="https://www.freepik.com/vectors/background" target="_blank">kjpargeter - www.freepik.com</a></span>
            <span style={spanElementStyle}>Header duck icon made by <a href="https://www.freepik.com" target="_blank" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a></span>
        </Container>
    )
}

const containerStyle = {
    maxWidth: "700px",
    minWidth: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
}

const spanElementStyle = {
    marginBottom: 5
}