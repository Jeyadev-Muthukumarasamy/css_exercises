import React from 'react'
import './Seven.css'

const Seven = () => {
  return (
    <>
     <div>
      <div id="sevenimgone">
        <p>7a</p>
        <img src="./public/cat.jpg" alt="" id="seventhimageone" />

      </div>
    </div>
    <div id="sevenimgtwo">
    <p>7b</p>
    <img src="./public/cat.jpg" alt="" id="seventhimagetwo" />
    </div>
    <div id="sevenimgthree">
    <p>7c</p>
    <img src="./public/cat.jpg" alt="" id="seventhimagethree" />
    </div>
    <div>
    <p>7d</p>
    <input type="text" id="seventhimagefour" placeholder="Search" />
</div>

    <div>
    <p>7e</p>
    <input type="text" id="seventhimagefive" className="bar" placeholder="Search Google or type a URL" />
</div>
<div>
    <p>7f</p>
    <p id="seventhimagesixlabel">Email</p>
    <input type="text" id="sevenethimagesix" />
    <p id="seventhimagesixcontent">By clicking Agree & Join, you agree to the privacy and policy</p>
    <button id="sevenethimagebutton">Agree & Join</button>
</div>  
<div id = "seventhimageseven">
    <p>7g</p>
    <img src ="public/cat.jpg" id="seventhimagesevenphoto"/>
   
  
    <p id="seventhimagesevencontent">What's happening?</p>
    <button id="seventhimagesevenbutton">Tweet</button>
</div> 


    </>
   

  )
}

export default Seven
