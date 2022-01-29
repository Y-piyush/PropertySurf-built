import PostCard from "./PostCard";
import "./DisplayProperty.css";
import { MdLocationPin, MdPin, MdLocationCity } from "react-icons/md";
import { formatDate } from "./Utils";
import pic2 from '../pics/ap1.jpg'

function DisplayProperty({ handlePopup, data, serverUrl }) {
  return (
    <PostCard className="post-card" handlePopup={handlePopup} title="Property">
      <div className="property-display">
        <div className="image-div1">
          {/* <object data={pic2} type="image/png"> */}
            <img 
                        src={serverUrl + data.propertyImage.replace("\\", "/")}
                        alt="..."/>
                         {/* </object> */}
          
        </div>
        <div className="full-content">
          <h4 id="fc-title">{data.title}</h4>
          <p id="fc-description">{data.description}</p>
          <h4 id="fc-price">₹ {data.price.toLocaleString("en-IN")}</h4>

          <p>
            <MdLocationCity className="icon" />
            <strong>Type:</strong> {data.type}
          </p>
          <p>
            <MdLocationPin className="icon" />
            <strong>Address:</strong> {data.address}
          </p>
          <p>
            <MdPin className="icon" />
            <strong>Pincode:</strong> {data.pinCode}
          </p>

          <div className="date-card">
            <div>
              <h5>Last updated</h5>
              {formatDate(data.updatedAt)}
            </div>
            <div>
              <h5>Posted on</h5>
              {formatDate(data.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </PostCard>
  );
}

export default DisplayProperty;
