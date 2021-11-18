import { Button, Card, Container, Stack } from "react-bootstrap";

const HowItWorksSection = ({ card3Title, card3Text, image }) => {
  return (
    <Container className="my-5 text-center">
      <h1>How It Works</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque
        voluptas error quae voluptatem veritatis, tempore, minus iure expedita
        provident adipisci! Molestiae quos pariatur consectetur excepturi
        quisquam fugit facilis odio.
      </p>
      <Stack direction="horizontal" gap={3} className="mb-4">
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          {image}
          <Card.Body>
            <Card.Title>Phone Consultation</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              ratione beatae explicabo iusto eaque soluta vel eos magnam
              mollitia et, molestias, nostrum enim ullam veniam vitae excepturi
              dignissimos dolorem fugit?
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          {image}
          <Card.Body>
            <Card.Title>Design and Renovation</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              ratione beatae explicabo iusto eaque soluta vel eos magnam
              mollitia et, molestias, nostrum enim ullam veniam vitae excepturi
              dignissimos dolorem fugit?
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          {image}
          <Card.Body>
            <Card.Title>{card3Title}</Card.Title>
            <Card.Text>{card3Text}</Card.Text>
          </Card.Body>
        </Card>
      </Stack>
      <Button variant="outline-primary">Learn More About Our Process</Button>
    </Container>
  );
};

export default HowItWorksSection;
