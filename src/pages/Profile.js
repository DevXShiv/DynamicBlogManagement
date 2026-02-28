import Navbar from "../components/Navbar";
import "../App.css";
function Profile() {
  return (
    <>
      <Navbar />

      <div className="profile-container">
        <div className="profile-card">
          <div className="avatar">S</div>

          <h2>Shivanshu</h2>
          <p className="email">author@gmail.com</p>

          <div className="profile-stats">
            <div>
              <h3>12</h3>
              <p>Blogs</p>
            </div>

            <div>
              <h3>340</h3>
              <p>Likes</p>
            </div>

            <div>
              <h3>89</h3>
              <p>Comments</p>
            </div>
          </div>

          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>
    </>
  );
}

export default Profile;