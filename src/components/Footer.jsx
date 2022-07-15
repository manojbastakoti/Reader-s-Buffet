import React from 'react'
import Nav from 'react-bootstrap/Nav';

import '../styles/Footer.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image'

export default function Footer() {
    return (
        <>
            <div className="FooterSection d-block mt-5">
                <Row>
                    <Col xs={3} >


                        <Image rounded fluid
                            src="/assets/onlylogo.png"
                            alt="First slide"
                        />


                    </Col>
                    <Col xs={3}>
                        <h3>Explore</h3>
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about" eventKey="link-1">About</Nav.Link>

                            <Nav.Link href="/blog" eventKey="link-3"> Blog</Nav.Link>

                        </Nav>
                    </Col>
                    <Col xs={3}>
                        <h3>Books</h3>
                        <Nav defaultActiveKey="/" className="flex-column">

                            <Nav.Link href="/buy" eventKey="link-1"> Buy</Nav.Link>
                            <Nav.Link href="/exchange" eventKey="link-2">  Exchange</Nav.Link>


                        </Nav>
                    </Col>
                    <Col xs={3}>
                        <h3>Help</h3>
                        <Nav defaultActiveKey="/" className="flex-column">

                            <Nav.Link href="/login" eventKey="link-1"> Sign In</Nav.Link>
                            <Nav.Link href="/register" eventKey="link-2">Sign Up</Nav.Link>
                            <Nav.Link href="/contact" eventKey="link-2"> Contact</Nav.Link>


                        </Nav>
                    </Col>
                </Row>
                <hr />
                <Row className="NavIcons">
                    <Nav defaultActiveKey="/">
                        <Nav.Link href="/"><Icon.Instagram size={20} color="black" /></Nav.Link>
                        <Nav.Link href="/about" eventKey="link-1"><Icon.Facebook size={20} color="black" /></Nav.Link>
                        <Nav.Link href="/buy" eventKey="link-2"><Icon.Twitter size={20} color="black" /></Nav.Link>
                        <Nav.Link href="/exchange" eventKey="link-3"><Icon.Youtube size={20} color="black" /></Nav.Link>

                    </Nav>
                </Row>
                <hr />
                <Row>© Reader's Buffet, 2022. All Rights Reserved.</Row>
            </div>
        </>
    )
}


