import React from 'react';
import {
  Col,
  Container,
  Row,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {AiOutlineMail} from 'react-icons/all';
import './CTA.scss';

const CTA = () => {
  return (
    <Container>
      <div id="cta">
        <div className="cta__content">
          <Row>
            <Col sm>
              <h1 className="cta__content__title">
                Want to 
                <br /> know
                <br /> more?
              </h1>
            </Col>
            <Col sm>
              <div className="cta__content__buttons">
                <Row>
                  <Col sm className="text-center">
                    <a href="mailto:sohil170246@gmail.com">
                      <Button variant="light" size="lg">
                        <AiOutlineMail />
                        &nbsp;Email&nbsp;Me
                      </Button>
                    </a>
                  </Col>
                  <Col sm className="text-center">
                    <Link to="/work">
                      <Button variant="outline-light" size="lg">
                        See&nbsp;More&nbsp;Projects
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default CTA;
