import React from "react";
import "./Twelveth.css";

const Twelveth = () => {
  return (
    <>
      <div id="twelvea">
        <div id="twelvea1">200px</div>
        <div id="twelvea2">75px</div>
      </div>
      <div id="twelveb">
        <div id="twelveb1">item1</div>
        <div id="twelveb2">item2</div>
        <div id="twelveb3">item3</div>
      </div>

      <div class="flexbox">
        <div class="lightpink">item1</div>
        <div class="lightpink">item2</div>
        <div class="lightpink">item3</div>
        <div class="lightpink">item4</div>
      </div>
      <div id="twelved">
        <div id="twelvedone">item1</div>
        <div id="twelvedone">item2</div>
      </div>
      <div id="twelvee">
        <div id="line1">
          <p id="linehome">Home</p>
          <div id="linehomenumber">14</div>
        </div>
        <div id="line1">
          <p id="linehome">Notifications</p>
          <div id="linehomenumber">14</div>
        </div>
        <div id="line1">
          <p id="linehome">Messages</p>
          <div id="linehomenumber">14</div>
        </div>
      </div>
      <div id="twelveg">
        <div id="profile">
          <img src="public/cat.jpg" alt="" id="profilepic" />
          <div id="profilecontents">
            <p id="namesection">Oliver</p>
            <p id="subnamesection">the cat</p>
            <p id="popular">popular</p>
          </div>

          <button id="follow">Follow</button>
        </div>
        <div id="profile">
          <img src="public/cat.jpg" alt="" id="profilepic" />
          <div id="profilecontents">
            <p id="namesection">Mimi</p>
            <p id="subnamesection">Sleepy cat</p>
            <p id="popular">popular</p>
          </div>

          <button id="follow">Follow</button>
        </div>
        <div id="profile">
          <img src="public/cat.jpg" alt="" id="profilepic" />
          <div id="profilecontents">
            <p id="namesection">Rex</p>
            <p id="subnamesection">Happy bulldog</p>
            <p id="popular">popular</p>
          </div>

          <button id="follow">Follow</button>
        </div>
      </div>
      <div id="nav">
        <p id="home">Home</p>
        <input type="text" id="search" placeholder="search" />
        <button id="download">Download</button>
      </div>



    </>
  );
};

export default Twelveth;
