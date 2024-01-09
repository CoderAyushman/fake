import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
 

  return (
    <>
    
    <div className="wrapper">
      <div className="contener-main">
      <header class="logo-container">
<span className="quedate-logo"> <img src="Screenshot 2024-01-09 221340.png"  width="100%"></img></span>
</header>
 
    <marquee  scrolldelay={170}
      bgcolor="#09132d"
      width="100%"
      direction="left"
      style={{ color: '#ffffff', borderColor: '#ff0000' }}> Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki  Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki Sandhya 😂 Chhutki </marquee>
     
      </div>
    </div>
      



     <div className="chat">
      <div className="chat__reactions">
        <span className="chat__reactions-icon">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
            {/* SVG content */}
          </svg>
        </span>
        <span className="chat__reactions-icon">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
            {/* SVG content */}
          </svg>
        </span>
        <span className="chat__reactions-text">Ruchi Sharma and 400K others </span>
        <span className="chat__reactions-counter">365k</span>
        <span className="chat__reactions-text">Comments</span>
        <span className="chat__reactions-counter js-counter">549</span>
        <span className="chat__reactions-text">Share</span>
      </div>
      <div className="chat__actions">
        <div className="chat__actions-box">
          <span>
            <svg width="40" style={{ enableBackground: 'new 0 0 48 48' }} version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              {/* SVG content */}
            </svg>
          </span>
          <span className="chat__actions-text">Like</span>
        </div>
        <div className="chat__actions-box">
          <span>
            <svg width="40" style={{ enableBackground: 'new 0 0 48 48' }} version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              {/* SVG content */}
            </svg>
          </span>
          <span className="chat__actions-text">Comments</span>
        </div>
      </div>
      <div className="chat__conversation">
      <div className="chat__conversation-box fadeInDown" id="js-box-1">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEityq_ZrNFM2zEqb5Tae2JXapOg_NyfRKoYQCnuZELmyHBTOiNCkO3BOHO8GJSIFx2ez5DQKh-fL5r_Pgf0v0iX2eA-zmF40YWIUrKRHUA5DrIHwegRafPNaMD9eoJJofklRuXpSYoUW85SLnbnF1AF6s752DYZdc_TGpvOnXMqJXKMTgsGfrwtUYSovA/s99/ny1.jpg" alt="" className="chat__conversation-box-img" />
        <span className="chat__conversation-box-active"></span>
        <div className="chat__conversation-box-content">
          <div className="chat__conversation-box-content-comment ">
            <span className="chat__conversation-box-content-comment-name">Aman Rajput</span>
            <span className="chat__conversation-box-content-comment-text">Wow, you both look absolutely stunning! 👭💖
        Sisters by chance, best friends by choice. 😊✨..</span>
          </div>
          <div className="chat__conversation-box-content-cta">
            <span className="chat__conversation-box-content-cta-text">Like</span>
            <span className="chat__conversation-box-content-cta-text">Reply</span>
            <span className="chat__conversation-box-content-cta-text">1m</span>
          </div>
        </div>
      </div>

      {/* Add JSX for other conversation boxes similarly */}

      
        {/* Conversation boxes and input field */}
      </div>
      <div className="chat__conversation">
      <div className="chat__conversation-box fadeInDown" id="js-box-2">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3KRX7CQRcPYssEJcEwJBJQ9A1jp2P5N5T5Jt-xpSu3NuEmytIDrbf2chHQqTTS23KYi5SGTFMc8Puh4JPFgSJswEyf9BVvhD87x0ubV7vyXQpaI4GqqJNScZrsNiEtS_JnycvTLJbYdabcFyw7AXxyn3nsrmeNlD5IfV72V2XcnrRcsZa9YrbPJpNfA/s99/uT2As9Sb.jpg"
        alt=""
        className="chat__conversation-box-img"
      />
      <span className="chat__conversation-box-active"></span>
      <div className="chat__conversation-box-content">
        <div className="chat__conversation-box-content-comment">
          <span className="chat__conversation-box-content-comment-name">Pooja Verma</span>
          <span className="chat__conversation-box-content-comment-text">
           Nice ❤️
          </span>
        </div>
        <div className="chat__conversation-box-content-cta">
          <span className="chat__conversation-box-content-cta-text">Like</span>
          <span className="chat__conversation-box-content-cta-text">Reply</span>
          <span className="chat__conversation-box-content-cta-text">1m</span>
        </div>
      </div>
    </div>
      </div>
      <div className="chat__conversation">
      <div className="chat__conversation-box fadeInDown" id="js-box-2">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYaGfSxvbcvOjuFpCJRloJssGLCDFL8QhkXBiXPR2XXz0_N20kdiP9gEdFv3lNUUknEi1bjQBBPNOUsQG5_r2sIpta3nUUD-2n1ZxAW6Br04G1mivXhE1p2dgN6KF3dSyu0dYRxvORx1W4ihyo4Gdlo1oMIjuWFWSEON9sPcnK0NAQNUUS1oYNZA7AVA/s99/images%20%287%29.jpeg"
        alt=""
        className="chat__conversation-box-img"
      />
      <span className="chat__conversation-box-active"></span>
      <div className="chat__conversation-box-content">
        <div className="chat__conversation-box-content-comment">
          <span className="chat__conversation-box-content-comment-name">rajna parmer</span>
          <span className="chat__conversation-box-content-comment-text">
          Wow god bless you ❤️❤️❤️❤️
          </span>
        </div>
        <div className="chat__conversation-box-content-cta">
          <span className="chat__conversation-box-content-cta-text">Like</span>
          <span className="chat__conversation-box-content-cta-text">Reply</span>
          <span className="chat__conversation-box-content-cta-text">1m</span>
        </div>
      </div>
    </div>
      </div>
      <div className="chat__conversation">
      <div className="chat__conversation-box fadeInDown" id="js-box-2">
      <img
        src="https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/416128504_2333133433741065_5133731826250956831_n.jpg?ccb=11-4&oh=01_AdTzfAWrbY3RYGtQ0vugSoEdy_ZpQGNOobUUAYsiLluF_w&oe=65AABFAD&_nc_sid=e6ed6c&_nc_cat=106"
        alt=""
        className="chat__conversation-box-img"
      />
      <span className="chat__conversation-box-active"></span>
      <div className="chat__conversation-box-content">
        <div className="chat__conversation-box-content-comment">
          <span className="chat__conversation-box-content-comment-name">Rahul Kara</span>
          <span className="chat__conversation-box-content-comment-text">
           Akla Akla bala❤️❤️❤️❤️
          </span>
        </div>
        <div className="chat__conversation-box-content-cta">
          <span className="chat__conversation-box-content-cta-text">Like</span>
          <span className="chat__conversation-box-content-cta-text">Reply</span>
          <span className="chat__conversation-box-content-cta-text">1m</span>
        </div>
      </div>
    </div>
      </div>
      <div className="chat__conversation">
      <div className="chat__conversation-box fadeInDown" id="js-box-2">
      <img
        src="https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/414722722_1406819646930665_518498440685337084_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQRvwt_fO2nyM_S6ry-4Le0sZtV8YH1p6PthW1ANT9q-Q&oe=65AA8A35&_nc_sid=e6ed6c&_nc_cat=111"
        alt=""
        className="chat__conversation-box-img"
      />
      <span className="chat__conversation-box-active"></span>
      <div className="chat__conversation-box-content">
        <div className="chat__conversation-box-content-comment">
          <span className="chat__conversation-box-content-comment-name">pratyush Acharya</span>
          <span className="chat__conversation-box-content-comment-text">
          love you ❤️❤️❤️
          </span>
        </div>
        <div className="chat__conversation-box-content-cta">
          <span className="chat__conversation-box-content-cta-text">Like</span>
          <span className="chat__conversation-box-content-cta-text">Reply</span>
          <span className="chat__conversation-box-content-cta-text">1m</span>
        </div>
      </div>
    </div>
      </div>
      
      
    </div>
    
    <div className="chat__conversation-write">
        <input type="text" name="comment" id="write" placeholder="Write a comment" />
        <label className="chat__conversation-write-text" htmlFor="write"></label>
        <div className="chat__conversation-write-icons">
          {/* Add JSX for icons here */}
        </div>
      </div>
    </>
  )
}

export default App
