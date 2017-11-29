import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const Dish = (props) => {
    return (
      <div className="card">
      <Card body>
        <CardImg top src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button>Добави</Button>
        </CardBody>
      </Card>
    </div>
    );
  };

export default Dish;
