import './FormStyle.css'
import PostCard from './PostCard';
import { MdMap } from "react-icons/md";

function RequestCityForm(props){
    return (
        <PostCard title="Request City" handlePopup={props.handlePopup}>
            <p>
                <br/>
                Couldn't find your city in our service? 
                <br/>
                Submit a request to unlock our service in your area in future.
            </p>
            <form className="p-form" onSubmit={props.handleFormSubmit}>
                <label htmlFor="name"><MdMap className="icon"/>City Name</label>
                <input type="text" className='field' name="name" minLength="3" maxLength="30" required></input>
                <div className='button-container'>
                    <button>SUBMIT</button>
                </div>
            </form>
        </PostCard>
    )
}

export default RequestCityForm;