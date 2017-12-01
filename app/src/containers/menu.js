import React, {Component} from 'react';
import {Button, CardBlock, Row, Col, Container} from 'reactstrap';
import Dish from '../components/Dish';
import shkembe from "../assets/photos/dishes/istinsko-shkembe.jpg";
import Tabs from "../components/Tabs";

const Menu = (props) => {
  return (
    <Container>
      <Tabs/>
      <Row >
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
      </Row>
       <Row >
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
      </Row>
       <Row >
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
      </Row>
       <Row >
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
      </Row>
       <Row >
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
        <Col sm="4">
          <Dish
            img={shkembe}
            title="Шкембе Чорба"
            subtitle="Супи"
            text="Люто, горещо ми е най-любимото нещо.."/>
        </Col>
      </Row>
    </Container>
  )
}

export default Menu;