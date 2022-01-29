import React from "react";
import "./ProjectStackList_Object.css";
// import pic1 from '../pics/ap.jpg'
// import pic2 from '../pics/ap1.jpg'
// import pic3 from '../pics/ap2.jpg'
// import pic4 from '../pics/ap3.jpg'
// import pic5 from '../pics/ap4.jpg'
// import pic6 from '../pics/ap5.jpg'
// import pic7 from '../pics/ap6.jpg'


function ProjectStackListObject({ details, serverUrl, _handlePropertyClick })
{    

    return(
         
                    <div className="card"  onClick={() => {
                        _handlePropertyClick(details);}}>
                        <div className="image-div" >
                            {/* <object data={pic2} type="image/png"> */}
                                <img 
                        src={`https://fswi-99acres-clone.herokuapp.com/${details.propertyImage}`}
                        alt="..."/> 
                        {/* </object> */}
                            <div className="fav">
                                <i className="far fa-star"></i>
                            </div>
                            
                        </div> 
                         
                        <h5 className="card-title">{details.title}</h5>
                        <p className="card-text">{details.description}</p>
                        <h5 className="card-value">₹ {details.price.toLocaleString("en-IN")}</h5>
                         
                    </div>

    );
}

export default ProjectStackListObject;