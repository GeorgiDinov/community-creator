import {Button, Card} from "react-bootstrap";

const TipOfTheDay = () => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top"
                      src="https://i.pinimg.com/originals/4e/f5/0e/4ef50e1d457d37fd7383959d1fb2dd22.jpg"/>
            <Card.Body>
                <Card.Title>Functional Strikes</Card.Title>
                <Card.Text>
                    In this article chief instructor Vladimir Vasiliev will teach you how to make your
                    strikes more efficient and powerful.
                </Card.Text>
                <Button variant="outline-info">Learn More</Button>
            </Card.Body>
        </Card>
    );
}
export default TipOfTheDay;