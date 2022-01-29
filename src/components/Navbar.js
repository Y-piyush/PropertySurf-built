import React from "react";

import "./Navbar.css";
import Loginbox from "./Login_box";

function Navbar()
{
  // const [pn, setPn] = useState(0);
    return(
        <nav class="navbar navbar-expand-md  bg-transparent" id="navbar_top">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          
          <div class="collapse navbar-collapse" id="navbarNav2">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">For Buyers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">For Tenants</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">For Owners</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">For Dealers/Builders</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">For Owners</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  href="#">Post property</a>
              </li>
              <li class="nav-item">
                   
                     
                          <Loginbox/>
                          
                  
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;