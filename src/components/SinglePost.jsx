import React from "react";
import Image from "react-bootstrap/Image";
import * as Icon from "react-bootstrap-icons";
import "../styles/SinglePost.css";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";



export default function SinglePost() {
  return (
    <>
      <div className="SinglePost">
        <div className="singlePostWrapper">
          <div className="singlePostImg">
            <Image src="./assets/8.jpg" alt="PostDetail" fluid thumbnail/>
          </div>
          <h1 className="singlePostTitle">
            Heading of the post
            <div className="singlePostEdit">
            <Row className="siglePostIcons">
            <Nav defaultActiveKey="/">
              <Nav.Link href="/">
                <Icon.PencilSquare size={16} color="green" />
              </Nav.Link>
              <Nav.Link href="/" eventKey="link-1">
                <Icon.TrashFill size={16} color="red" />
              </Nav.Link>
              
            </Nav>
            </Row>
            </div>
          </h1>
          <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b>Asbin</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
          </div>
        
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          molestiae nobis. Quasi recusandae nobis temporibus quam provident
          accusamus repellendus voluptatibus, repellat dolores quidem
          repudiandae maiores quas minima sequi, odit sit. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Provident libero illum
          eligendi! Neque, vitae quae repudiandae, corporis tempora, eveniet
          suscipit quibusdam itaque deserunt esse dolor hic similique non modi
          unde? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates, molestiae nobis. Quasi recusandae nobis temporibus quam
          provident accusamus repellendus voluptatibus, repellat dolores quidem
          repudiandae maiores quas minima sequi, odit sit. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Provident libero illum
          eligendi! Neque, vitae quae repudiandae, corporis tempora, eveniet
          suscipit quibusdam itaque deserunt esse dolor hic similique non modi
          unde? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates, molestiae nobis. Quasi recusandae nobis temporibus quam
          provident accusamus repellendus voluptatibus, repellat dolores quidem
          repudiandae maiores quas minima sequi, odit sit. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Provident libero illum
          eligendi! Neque, vitae quae repudiandae, corporis tempora, eveniet
          suscipit quibusdam itaque deserunt esse dolor hic similique non modi
          unde? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates, molestiae nobis. Quasi recusandae nobis temporibus quam
          provident accusamus repellendus voluptatibus, repellat dolores quidem
          repudiandae maiores quas minima sequi, odit sit. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Provident libero illum
          eligendi! Neque, vitae quae repudiandae, corporis tempora, eveniet
          suscipit quibusdam itaque deserunt esse dolor hic similique non modi
          unde? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates, molestiae nobis. Quasi recusandae nobis temporibus quam
          provident accusamus repellendus voluptatibus, repellat dolores quidem
          repudiandae maiores quas minima sequi, odit sit. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Provident libero illum
          eligendi! Neque, vitae quae repudiandae, corporis tempora, eveniet
          suscipit quibusdam itaque deserunt esse dolor hic similique non modi
          unde?
        </p>
        </div>
      </div>
    </>
  );
}
