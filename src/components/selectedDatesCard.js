import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


export default function SelectedDatesCard(props) {
    const startDate = props.startDate;
    const endDate = props.endDate;

    return (
        <Container>
            <Card>
                <Card.Header><h2>Selected date range</h2></Card.Header>
                <Card.Body>
                    <Card.Text style={cardTextStyle}>
                        <Container style={textContainerStyle}>
                            <label style={labelStyle}>Starting date:</label>
                            <span>{startDate}</span>
                        </Container>
                        <Container style={textContainerStyle}>
                            <label  style={labelStyle}>Ending date:</label>
                            <span>{endDate}</span>
                        </Container>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

const textContainerStyle = {
    display: "flex",
    justifyContent: "space-between"
}

const cardTextStyle = {
    fontSize: "1.2rem"
}

const labelStyle = {
    marginRight: 5
}

