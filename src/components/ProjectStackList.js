import React from "react";
// import "./ProjectStackList.css";
// import pic1 from '../pics/ap.jpg'
// import pic2 from '../pics/ap1.jpg'
// import pic3 from '../pics/ap2.jpg'
// import pic4 from '../pics/ap3.jpg'
// import pic5 from '../pics/ap4.jpg'
// import pic6 from '../pics/ap5.jpg'
// import pic7 from '../pics/ap6.jpg'
import ProjectStackListObject from "./ProjectStackList_Object";
// import { useEffect, useState } from "react";


function ProjectStackList1({properties, serverUrl, handlePropertyClick, handleEmptyList}){
     
     if(properties.length===0) handleEmptyList(false)
    else handleEmptyList(true)
    
    return(
        
          <div className="Project_stack">
             {properties.map(
                property=>
                <ProjectStackListObject
                    key={property._id}
                    id={property._id}
                    details={property}
                   
                    serverUrl={serverUrl}
                    _handlePropertyClick={handlePropertyClick}
                />
            )}     
          </div>
    );
}

export default ProjectStackList1;