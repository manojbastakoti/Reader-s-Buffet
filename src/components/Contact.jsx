import React from "react";
import "../styles/Contact.css";
import * as Icon from "react-bootstrap-icons";
export default function Contact() {
  return (
  <div>
    <div className="abt">
      <h2>About Reader's Buffet</h2>
      <p>As of the present moment, Reader's Book Shop is the sole vendor of Reader's Buffet and a local bookstore, based at Balkumari, Kathmandu. Since 2021, Reader's Book Shop has existed as a tiny island of peace in a fast-moving world. Thriving and growing every year, the business that started from a post-card board selling postcards to tourists in the heart of Balkumari has grown to be one of the hidden jewels of Kathmandu with floor-to-ceiling stacks of books and a generally inclusive vibe that makes it seem like a neighborhood spot for anyone and everyone. The bookshop is one of the largest book distributors in Nepal. The shelves store an endless choice of books and the catalogue is always growing. You can take time browsing the seemingly endless selection of rare coffee table books and attractive souvenir items.</p>
    </div>

    <div className="row" id="ContactCard">
      <div className="col-6" id="pic">
        <img src="./assets/draft1.jpg" alt="contact us" class="pictorial" />
      </div>
      <div className="col-6" id="dtl">
        <h1>Contact Us</h1>
        <div className="formcontent">
          <form>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="FullName"
            />
            <br></br>
            <input type="text" id="msg" placeholder="Write Your Message..." />
            <br></br>
            <input type="button" id="sbtn" value="Submit" />
            <br></br>
          </form>
          <div className="conus">
            <h2>Connect with us:</h2>
            <Icon.Instagram size={25} color="black" id="icn" />
            @Bad.script<br></br>
            <Icon.Envelope size={25} color="black" id="icn" />
            manoj.181524@gmail.com<br></br>
            <Icon.Telephone size={25} color="black" id="icn" />
            01-410081<br></br>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

