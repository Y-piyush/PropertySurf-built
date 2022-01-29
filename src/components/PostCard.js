import { FiX } from "react-icons/fi";
import "./PostCard.css";

function PostCard(props) {
  return (
    <div className="overlay">
      <div className="post-card">
        <div className="title-bar">
          <h3>{props.title}</h3>
          <button onClick={props.handlePopup}>
            <FiX className="icon" size="24px" />
          </button>
        </div>
        <div>{props.children}
      </div></div>
    </div>
  );
}

export default PostCard;
