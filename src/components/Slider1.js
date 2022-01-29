import React from "react";
// import "./Slider1.css";
import { useEffect, useState } from "react";
import Slider2 from "./Slider2";
import ProjectStackList1 from "./ProjectStackList";
import axios from "axios";



const serverUrl = "https://fswi-99acres-clone.herokuapp.com/";

function Slider1(){

     const [cities, setCities] = useState([]);
  const [properties, setProperties] = useState([]);
  // const [navShow, setNavShow] = useState(false);
  const [pn, setPn] = useState(0);
  const [infp, setInfp] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState({});
  // const [citySelect, setCitySelect] = useState("all");
  const [searchText, setSearchText] = useState("");

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
    //  console.log('Reached cities!')
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
    //  getCities();
    //  getProperties();
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
    //  getCities();
    //  getProperties();
   };
 
   const handlePropertyClick = (data) => {
     setSelectedProperty(data);
     setPn(3);
   };

    return(
        
        <div className="projects">
               <h3>Projects in high demand</h3>
               <h6>The most explored projects in Dhanbad</h6>
               <ProjectStackList1
        properties={properties.filter((property) => {
          // if (citySelect !== "all" && property.city !== citySelect)
          //   return false;
          const val =
            property.address +
            property.type +
            property.price +
            property.title +
            property.description +
            property.pinCode;
          return val.toLowerCase().includes(searchText);
        })}
        serverUrl={serverUrl}
        handlePropertyClick={handlePropertyClick}
        handleEmptyList={setInfp}
      />
               <hr></hr>
                {/* <div className="Project_stack">
                    <div className="card">
                        <div><img src={pic1}  alt="..."/>
                        <div className="fav"><i className="far fa-star"></i></div></div> 
                         
                              <h5 className="card-title">Vindya Bliss</h5>
                              <p className="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         
                    </div>
                    <div className="card">
                    <div> <img src={pic2} alt="..."/>
                    <div className="fav"><i className="far fa-star"></i></div>
                    </div>
                         <div className="card-body">
                              <h5 className="card-title">Vindya Bliss</h5>
                              <p className="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         </div>
                    </div>
                    <div className="card">
                    <div><img src={pic3} alt="..."/>
                    <div className="fav"><i className="far fa-star"></i></div>
                    </div>
                         <div className="card-body">
                              <h5 className="card-title">Vindya Bliss</h5>
                              <p className="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         </div>
                    </div>
                    <div className="card">
                    <div> <img src={pic4}  alt="..."/>
                    <div className="fav"><i className="far fa-star"></i></div>
                    </div>
                         <div className="card-body">
                              <h5 className="card-title">Vindya Bliss</h5>
                              <p className="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>  
                         </div>
                    </div>
                    <div className="card">
                    <div className="image_card"> <img src={pic5} alt="..."/>
                    <div className="fav"><i className="far fa-star"></i></div>
                    </div>
                         <div className="card-body">
                              <h5 className="card-title">Vindya Bliss</h5>
                              <p className="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         </div>
                    </div>
                    <div className="card">
                    <div><img src={pic6} alt="..."/>
                    <div className="fav"><i className="far fa-star"></i></div>
                    </div>
                         <div className="card-body">
                              <h5 className="card-title">Vindya Bliss</h5>
                              <p className="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         </div>
                    </div>
                    <div className="card">
                         <div><img src={pic7} alt="..."/>
                         <div className="fav"><i className="far fa-star"></i></div>
                         </div>
                         <div className="card-body">
                              <h5 className="card-title">Vindya Bliss</h5>
                              <p className="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         </div>
                    </div>
               </div>  */}

               <h3>Popular localities</h3>
               <h6>The most explored localities in Dhanbad</h6>
               <Slider2/>
            </div>
    );

}
export default Slider1;
