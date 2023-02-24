import React from "react"
import { Link } from 'react-scroll';
import  Content from  '../../Layout/Content';

import  './Home.css';


function HomeScreen() {
    return (
        <div className="lead">
            <div  className="lead-content">
                <h1>COTATO</h1>
                <br/>
                <h2>감자밭 친구들 환영합니다!</h2>

          </div>
          <div className="lead-overlay"></div>
          <div className="lead-down">
              <Link rel="nofollow" to="content" spy={true} smooth={true} duration={500}>
                <span>
                    About Us
                </span>
               </Link>
          </div>
        </div>
    )
}

export default HomeScreen;
