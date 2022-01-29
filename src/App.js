// import logo from './logo.svg';
import './App.css';
// import PropertyList from "./components/PropertyList.js";
import { useEffect, useState } from "react";
import pic from './pics/family-home.jpeg'
// import pic1 from './pics/ap.jpg'
// import pic2 from './pics/ap1.jpg'
// import pic3 from './pics/ap2.jpg'
// import pic4 from './pics/ap3.jpg'
// import pic5 from './pics/ap4.jpg'
// import pic6 from './pics/ap5.jpg'
// import pic7 from './pics/ap6.jpg'
// import pic8 from './pics/defaultLocality.png'
// import Navbar from './components/Navbar';
// import Searchbox from './components/Search_box';
// import Slider1 from './components/Slider1';
import Slider2 from './components/Slider2';
import axios from "axios";
import MagicLineMenu from 'react-magic-line-menu';
//import "./components/Navbar.css";
import RequestCityForm from './components/RequestCity';
import NewPropertyForm from './components/NewPropertyForm';
import DisplayProperty from './components/DisplayProperty';
import ProjectStackList1 from './components/ProjectStackList';
// import Loginbox from './components/Login_box';
import ResidentialCheckBox from './components/Residential_dropdown';



     const serverUrl = "https://fswi-99acres-clone.herokuapp.com/";
    
    //  const [pn, setPn] = useState(0);
     function App() {
      const [active, setActiveIndex] = useState(0);
       const [cities, setCities] = useState([]);
       const [properties, setProperties] = useState([]);
     
       const [pn, setPn] = useState(0);
       const [infp, setInfp] = useState(true);
       const [selectedProperty, setSelectedProperty] = useState({});
       const [citySelect, setCitySelect] = useState("all");
       const [searchText, setSearchText] = useState("null");
     
       const removePopup = () => {
         setPn(0);
       };
     
       const getCities = () => {
         axios
           .get(serverUrl + "cities")
           .then((res) => setCities(res.data))
           .catch((error) =>
             alert("Something went wrong while trying to fetch cities! " + error)
           );
        
       };
       const getProperties = () => {
         axios
           .get(serverUrl + "properties")
           .then((res) => setProperties(res.data))
           .catch((error) =>
             alert("Something went wrong while trying to fetch properties! " + error)
           );
       };
     
       useEffect(getCities, []);
       useEffect(getProperties, []);
     
       const handleRequestCityForm = (event) => {
         const formData = new FormData(event.currentTarget);
         event.preventDefault();
         let formObject = Object.fromEntries(formData.entries());
         axios
           .post(serverUrl + "cities", formObject)
           .then((res) => {
             console.log(res.data);
             getCities();
            
            })
           .catch((error) =>
             alert("Something went wrong while submitting your request! " + error)
           );
         removePopup();
       
       };
     
       const handleNewPropertyForm = (event) => {
         const formData = new FormData(event.currentTarget);
         event.preventDefault();
         axios
           .post(serverUrl + "properties", formData)
           .then((res) => {
             console.log(res.data);
             getProperties();
          })
           .catch((error) =>
             alert(
               "Something went wrong while submitting your property details! " +
                 error
             )
           );
         removePopup();
        
       };
     
       const handlePropertyClick = (data) => {
         setSelectedProperty(data);
         setPn(3);
       };
     
return (
    <div className="App">
      <div id="popup">
        {(() => {
          switch (pn) {
            case 1:
              return (
                <NewPropertyForm
                  cities={cities}
                  handlePopup={removePopup}
                  handleFormSubmit={handleNewPropertyForm}
                />
              );
            case 2:
              return (
                <RequestCityForm
                  handlePopup={removePopup}
                  handleFormSubmit={handleRequestCityForm}
                />
              );
            case 3:
              return (
                <DisplayProperty
                  handlePopup={removePopup}
                  data={selectedProperty}
                  serverUrl={serverUrl}
                />
              );
            default:
              return "";
          }
        })()}
      </div>
      <nav className="navbar navbar-expand-lg  bg-transparent ">
           <div className="container-fluid">
                {/*  */}
                 <div>
                      <div className="logo_img">
                        <img src="https://static.99acres.com/universalapp/img/nnacres_white.png" alt="..."/>
                      </div>
                      
                 </div>

                 {/*  */}
                 <nav className="navbar navbar-expand-sm  bg-transparent" id="navbar_top">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                 </button>
          
          <div className="collapse navbar-collapse" id="navbarNav2">
            <ul className="navbar-nav">
              <li className="nav-item item2">
                <a className="nav-link active" aria-current="page" href="#">For Buyers</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">For Tenants</a>
              </li> */}
              <li className="nav-item item2">
                <a className="nav-link" href="#">For Owners</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">For Dealers/Builders</a>
              </li> */}
              
              <li className="nav-item">
                <a className="nav-link"  onClick={() => setPn(1)} href="#">Post property</a>
              </li>
              {/* <li className="nav-item">
                   
                     
                          <Loginbox/>
                          
                  
              </li> */}
              
              
            </ul>
          </div>
        </div>
      </nav>
                
               
            </div>
           
          </nav>
          <img className="main_pic" src={pic} alt="logo"></img>
          {/* <Searchbox/> */}

          {/*  */}

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
        <hr className="demo1"></hr>
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

          {/*  */}
          {/* <h4 id="infpt">{infp ? "Browse Properties" : "NONE FOUND"}</h4> */}
          <ProjectStackList1
        properties={properties.filter((property) => 
          {
          if (citySelect !== "all" && property.city !== citySelect)
            return false;
           
          const val =
            property.address +
            property.type +
            property.price +
            property.title +
            property.description +
            property.pinCode;
          return val.toLowerCase().includes(searchText);
        }
        )}
        serverUrl={serverUrl}
        handlePropertyClick={handlePropertyClick}
        handleEmptyList={setInfp}
      />
          <hr className="demo2"></hr>
          
            <div className="projects">
               <h3>Projects in high demand</h3>
               <h6>The most explored projects in Dhanbad</h6>
               {/* <Slider1/> */}
               <ProjectStackList1
        properties={properties.filter((property) => 
          {
          // if (citySelect !== "all" && property.city !== citySelect)
          //     return false;
              
          const val =
            property.address +
            property.type +
            property.price +
            property.title +
            property.description +
            property.pinCode;
          return val.toLowerCase().includes("all");
        })}
        serverUrl={serverUrl}
        handlePropertyClick={handlePropertyClick}
        handleEmptyList={setInfp}
      />
               <hr></hr>
                
          
          
          <h3>Popular localities</h3>
               <h6>The most explored localities in Dhanbad</h6>
               <Slider2/>
              
          </div>
         
          <footer>
        <div>
          <section>
            <h4>Our Partners</h4>
            <ul>
              <li>
                <a href="https://www.naukri.com/">Naukri.com - Jobs in India</a>
              </li>
              <li>
                <a href="https://www.naukrigulf.com/">
                  Naukrigulf.com - Jobs in middle east
                </a>
              </li>
              <li>
                <a href="https://www.jeevansathi.com/">
                  Jeevansathi.com - Matrimonials
                </a>
              </li>
              <li>
                <a href="http://www.brijj.com/">
                  Brijj.com - Professional Networking
                </a>
              </li>
              <li>
                <a href="https://www.shiksha.com/">
                  Shiksha.com - Education Career Info
                </a>
              </li>
              <li>
                <a href="https://www.policybazaar.com/">
                  Policybazaar.com - Insurance India
                </a>
              </li>
              <li>
                <a href="https://www.meritnation.com/">
                  Meritnation.com - Online Educational Assessment
                </a>
              </li>
              <li>
                <a href="https://www.paisabazaar.com/">PaisaBazaar.com</a>
              </li>
              <li>
                <a href="https://www.ambitionbox.com/">AmbitionBox.com</a>
              </li>
              <li>
                <a href="https://www.firstnaukri.com/">
                  FirstNaukri.com - A jobsite for campus hiring
                </a>
              </li>
              <li>
                <a href="https://www.jobhai.com/">
                  Jobhai.com – Find Jobs Near You
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <section>
            <h4>Contact Us</h4>
            <div>
              Toll Free - 1800 41 99099
              <br />
              <small>Monday - Saturday (9:00AM to 11:00PM IST)</small>
            </div>
            <h5>Email - feedback@99acres.com</h5>
          </section>
          <section>
            <h4>Connect with us</h4>
            <p>
              All rights reserved - Info Edge (India) Ltd.
              <br />A naukri.com group venture
            </p>
          </section>
        </div>
      </footer>
     </div>
  );
}

export default App;
