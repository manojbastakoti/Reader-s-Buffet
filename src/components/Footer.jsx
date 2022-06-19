import React from 'react'
import Nav from 'react-bootstrap/Nav';

import '../styles/Footer.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import * as Icon from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'react-bootstrap/Image'

export default function Footer() {
    return (
        <>
            <div className="FooterSection d-block">
                <Row>
                    <Col >
                        <Row>
                            <Col xs={2}>
                                <Image fluid rounded thumbnail
                                    src="./assets/logonly.png"
                                    alt="First slide"
                                />
                            </Col>
                            <Col>
                                <h3>Reader's Buffet</h3>
                            </Col>
                            <Row><p>Sample paragraph is needed to test whether the applied
                                css is correct and up to the mark or not</p></Row>
                        </Row>
                        <Row className="NavIcons">
                            <Nav defaultActiveKey="/">
                                <Nav.Link href="/"><Icon.Instagram color=" #E1306C" size={40} /></Nav.Link>
                                <Nav.Link href="/about" eventKey="link-1"><Icon.Facebook color="royalblue" size={40} /></Nav.Link>
                                <Nav.Link href="/buy" eventKey="link-2"><Icon.Twitter color="#1DA1F2" size={40} /></Nav.Link>
                                <Nav.Link href="/exchange" eventKey="link-3"><Icon.Youtube color="red" size={40} /></Nav.Link>

                            </Nav>
                        </Row>
                    </Col>
                    <Col>
                        <h3>Navigation</h3>
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link href="/"><FontAwesomeIcon icon="home-alt" size={40} />Home</Nav.Link>
                            <Nav.Link href="/about" eventKey="link-1"><Icon.Book/> About</Nav.Link>
                            
                            <Nav.Link href="/blog" eventKey="link-3"><Icon.BlockquoteRight/> Blog</Nav.Link>

                        </Nav>
                    </Col>
                    <Col>
                        <h3>Books</h3>
                        <Nav defaultActiveKey="/" className="flex-column">

                            <Nav.Link href="/buy" eventKey="link-1"><Icon.Cash/>  Buy</Nav.Link>
                            <Nav.Link href="/exchange" eventKey="link-2"><Icon.Recycle/>  Exchange</Nav.Link>


                        </Nav>
                    </Col>
                    <Col>
                        <h3>Help</h3>
                        <Nav defaultActiveKey="/" className="flex-column">

                            <Nav.Link href="/" eventKey="link-1"><Icon.DoorOpen/>  Sign In</Nav.Link>
                            <Nav.Link href="/" eventKey="link-2">Sign Up</Nav.Link>
                            <Nav.Link href="/contact" eventKey="link-2"><Icon.Messenger/>  Contact</Nav.Link>


                        </Nav>
                    </Col>
                </Row>
                <Row text-center>© Reader's Buffet, 2022. All Rights Reserved.</Row>
            </div>
        </>
    )
}


