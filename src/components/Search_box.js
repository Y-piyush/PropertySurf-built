import React, { useEffect, useState } from "react";
import ResidentialCheckBox from "./Residential_dropdown";
import "./Search_box.css";
import MagicLineMenu from 'react-magic-line-menu';
import axios from "axios";

const serverUrl = "https://fswi-99acres-clone.herokuapp.com/";

function Searchbox() {
      const [active, setActiveIndex] = useState(0);
      const [cities, setCities] = useState([]);
      const [searchText, setSearchText] = useState("");
      const [citySelect, setCitySelect] = useState("all");
      
      const getCities = () => {
            axios
              .get(serverUrl + "cities")
              .then((res) => setCities(res.data))
              .catch((error) =>
                alert("Something went wrong while trying to fetch cities! " + error)
              );
            //console.log('Reached cities!')
          };
          useEffect(getCities, []);

    return(
        <div className="header_card">
        <div className="headercard1">
        <MagicLineMenu
        active={active}
        onItemClick={(index) => setActiveIndex(index)}
        easing="easeInQuad"
        duration={100}
        lineHeight={4}
        lineColor="rgb(72, 182, 247)"
      >
             <div className="act2"><p>Buy</p></div>
             <div className="act2"><p>Rent</p></div>
             <div className="act2"><p>PG</p></div>
             <div className="act2"><p>Commercial</p></div>
             <div className="act2"><p>Coworking</p></div>
             <div className="act2"><p>Projects</p></div>
             <div className="act2"><p>Dealer</p></div>
      </MagicLineMenu>

        </div>
        <hr></hr>
        <div className="main_search">
        
        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" value="all">
            All Residentials</button>   
            <ResidentialCheckBox/>  
        </div> 
       
        <div className="container-fluid2">
        
         {/* <form className="d-flex"> */}
            
         <input className="form-control" type="search" placeholder="Enter City/Project/Society" aria-label="Search" onChange={({ target: { value } }) =>
                    setSearchText(value.toLowerCase())
                  }/>
              <select
                  onChange={({ target: option }) => {
                    setCitySelect(option.value.toString());
                  }}
                >
                  <option value="all">All India</option>
                  {cities.map((city) => (
                    <option value={city._id}>{city.name}</option>
                  ))}
                </select>  
         {/* <span><i className="fas fa-crosshairs"></i>Near Me</span> */}
         <button className="btn btn-outline-success" type="submit">Search</button>
         {/* </form> */}
         </div>
        </div>

        

 </div>

            // 
                





    );
    
}
export default Searchbox;