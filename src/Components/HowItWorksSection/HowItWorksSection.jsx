import { Button, Card, Container } from "react-bootstrap";

const HowItWorksSection = ({ card3Title, card3Text }) => {
  return (
    <Container className="my-5 text-center">
      <h1>How It Works</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque
        voluptas error quae voluptatem veritatis, tempore, minus iure expedita
        provident adipisci! Molestiae quos pariatur consectetur excepturi
        quisquam fugit facilis odio.
      </p>
      <Card>
        <Card.Body>
          <Card.Title>Phone Consultation</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ratione beatae explicabo iusto eaque soluta vel eos magnam mollitia
            et, molestias, nostrum enim ullam veniam vitae excepturi dignissimos
            dolorem fugit?
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Design and Renovation</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ratione beatae explicabo iusto eaque soluta vel eos magnam mollitia
            et, molestias, nostrum enim ullam veniam vitae excepturi dignissimos
            dolorem fugit?
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>{card3Title}</Card.Title>
          <Card.Text>{card3Text}</Card.Text>
        </Card.Body>
      </Card>
      <Button variant="outline-primary">Learn More About Our Process</Button>
    </Container>
  );
};

export default HowItWorksSection;
