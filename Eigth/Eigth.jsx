import React from 'react'
import "./Eigth.css"
import "../Seventh/Seven.css"

const Eigth = () => {
  return (
    <div>
      <div id="eightone">
        <p>8a</p>
        <input type="text" id="nameeight" placeholder='Name'/>
        <input type="text" id="emaileight" placeholder='Email'/>
      </div>
      <div id="eighttwo">
        <p>8b</p>
        <p id='eightbone'>Thanks for chatting with our customer support.would you like to take our quick survey</p>
        <div id="eightnested">
    
        <button id="eightbtnyes">Yes</button>
        <button id="eightbtnno">No</button>

        </div>



        <div id = "#eightthree">
            <p>8c</p>
            <img src="public/googlelogo.png" alt="" id="googlelogo" />
            <input type="text" id="bar" placeholder="Search Google or type a URL" />
        </div>
        <div id="eightfour">
            <p>8d</p>
            <div id="eightdcontainerone">
                <input type="text" id="boxone" placeholder='first name'/>
                <input type="text" id="boxtwo" placeholder='first name'/>
            </div>
            <div id="eightdcontainertwo">
                <input type="text" id="boxthree" placeholder='email'/>
          
            <button id="eightdsignup">Sign Up</button>
            </div>
            <div id="eighte">
                <p>8e</p>
                <p id="eightecontent">Request a ride now</p>
                <input type="text" id="eightefirstinput" placeholder='Enter pickup location'/>
                <input type="text" id="eightefirstinput" placeholder='Enter Destination'/>
                <div id="eightebuttoncontainer">
                    
                    <button id="eightebuttonone">Request now</button>
                    <button id="eightebuttontwo">Schedule for later</button>
                </div>

                
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Eigth
