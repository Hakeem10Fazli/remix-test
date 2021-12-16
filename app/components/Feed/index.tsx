// import "./Feed.css";
import MessageSender from "../MessageSender";
import Post from "../Post";
import StoryReel from "../StoryReel";

function Feed() {

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic={
          "https://cutewallpaper.org/21/anime-profile-pictures-boy/cartoon-and-anime-profile-pics-toon.pfps-Instagram-Profile-.jpg"
        }
        message="Attack on Titan Last season on the way!!"
        timeStamp={"2002"}
        username={"Mahen Dunsinghe"}
        image={"https://wallpapercave.com/wp/wp6575735.jpg"}
      />
    </div>
  );
}

export default Feed;