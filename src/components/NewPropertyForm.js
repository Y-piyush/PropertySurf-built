import "./FormStyle.css";
import PostCard from "./PostCard";
import {
  MdTitle,
  MdDescription,
  MdLocationPin,
  MdPin,
  MdMap,
  MdLocationCity,
  MdImage
} from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";

function NewPropertyForm(props) {
  return (
    <PostCard title="Post Property" handlePopup={props.handlePopup}>
      <form className="p-form" onSubmit={(props.handleFormSubmit)}>
        <label for="title">
          <MdTitle className="icon" />
          Title
        </label>
        <input
          className="field"
          type="text"
          name="title"
          minLength="10"
          maxLength="80"
          required
        ></input>

         <label for="type">
          <MdLocationCity className="icon" />
          Type
        </label>
        <input
          className="field"
          type="text"
          name="type"
          minLength="3"
          maxLength="20"
          required
        ></input>

        <label for="description">
          <MdDescription className="icon" />
          Description
        </label>
        <textarea
          className="field"
          name="description"
          minLength="10"
          maxLength="250"
          required
        ></textarea>

        

        <label for="address">
          <MdLocationPin className="icon" />
          Address
        </label>
        <textarea
          className="field"
          name="address"
          minLength="10"
          maxLength="250"
          required
        ></textarea>

        <label for="pinCode">
          <MdPin className="icon" />
          Pincode
        </label>
        <input className="field" type="number" name="pinCode" required></input>

        <label for="city">
          <MdMap className="icon"/>
          City
        </label>
        <select className="field" name="city" required>
          {props.cities.map((city) => (
            <option value={city._id}>{city.name}</option>
          ))}
        </select>

        <label for="price">
          <IoMdPricetag className="icon" />
          Price Rate (₹)
        </label>
        <input
          className="field"
          type="number"
          name="price"
          min="5000"
          required
        ></input>

        <label for="propertyImage">
          <MdImage className="icon" />
          Property Image
        </label>
        <input
          className="field"
          type="file"
          name="propertyImage"
          accept="image/png, image/jpeg"
          required
        ></input>

        <div className="button-container">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </PostCard>
  );
}

export default NewPropertyForm;
