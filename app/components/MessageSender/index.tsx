import { Avatar } from "@material-ui/core";
// import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={"sd"} />
        <form>
          <input
            type="text"
            className="messageSender__input"
            placeholder="What's on your mind?"
          />
          <input
            type="text"
            placeholder="Image URL(optional)"
          />

          <button onClick={() => console.log("hi")
          } type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "yellow" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;