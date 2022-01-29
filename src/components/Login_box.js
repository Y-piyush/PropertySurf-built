import React from "react";
import "./Login_box.css";
function Loginbox()
{
    return(
         <div>
        <button class="btn dropdown-toggle" type="text" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            Login
        </button>
        <ul class="dropdown-menu" id="drpd2" aria-labelledby="dropdownMenu2">
          <li><button class="dropdown-item" type="button">Login/Resister</button></li>
          <li><button class="dropdown-item" type="button">My Activity</button></li>
          <li><button class="dropdown-item" type="button">Contact Us</button></li>
        </ul>
      </div>
    );
}

export default Loginbox;