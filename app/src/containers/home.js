import React, {Component} from 'react';
import {Button, Container, Row, Col} from 'reactstrap';
import Carousel from '../components/Carousel';

export default class Home extends Component {
    render() {
        return (
                <Row>
                    <Col sm='12'>
                        <Carousel/>
                    </Col>
                </Row>
        )
    }
}