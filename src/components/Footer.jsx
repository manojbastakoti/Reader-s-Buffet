import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import '../styles/Footer.css'
import * as Icon from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <>
            <div className="FooterSection d-block">
                <div className="row">
                    <div className="column">

            <Button href="/contact" variant="primary" size="lg">Contact Us</Button>{' '}
            </div>
            <div className="column">
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about" eventKey="link-1">About</Nav.Link>
                    <Nav.Link href="/buy" eventKey="link-2">Buy</Nav.Link>
                    <Nav.Link href="/exchange" eventKey="link-3">Exchange</Nav.Link>
                    <Nav.Link href="/blog" eventKey="link-3">Blog</Nav.Link>

                </Nav>
            </div>
            <div className="column">
                <Nav.Link href="/"><Icon.Instagram/></Nav.Link>
                    <Nav.Link href="/about" eventKey="link-1"><Icon.Facebook/></Nav.Link>
                    <Nav.Link href="/buy" eventKey="link-2"><Icon.Twitter/></Nav.Link>
                    <Nav.Link href="/exchange" eventKey="link-3"><Icon.Youtube/></Nav.Link>
                    <Nav.Link href="/blog" eventKey="link-3"><Icon.Mailbox/></Nav.Link>
            </div>
            </div>
            </div>
        </>
    )
}


