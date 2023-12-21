import React from 'react';
import './HomePage.css'
import {Link} from 'react-router-dom';
function HomePage() {
  return (
<div>
        <section className="about-us">
          <div className="about">
            <img src="img/logo.png" className="pic" alt='Digix.png' />
            <div className="text">
              <h2>Welcome</h2>
              <h1>India's Adored</h1>
              <h1>Digital Marketing App</h1><br></br>
              <p>Design the Appilication , websites</p>
              <p><br></br>
              "Unlock the power of digital marketing, where every click is an opportunity, every post is a conversation, and every campaign is a journey toward success."</p>
              <div className="data">
                
                <p>
                  <b>
                    Hey not yet joined
                  </b>
                  
                </p>
                <br />
                <button className="hire"><Link className="SigninForm" to={'/SigninForm'}><b>GET STARTED ⫸</b></Link>
                
                </button>
                
              </div>
            </div>
          </div>
        </section>

        {/* //footer */}
     
</div>
  );
}

export default HomePage;
