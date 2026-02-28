import Navbar from "../components/Navbar";
import "../App.css";
function Settings() {
  return (
    <>
      <Navbar />

      <div className="settings-container">
        <div className="settings-card">
          <h2>Account Settings ⚙️</h2>

          <div className="setting-item">
            <label>Change Password</label>
            <button>Update</button>
          </div>

          <div className="setting-item">
            <label>Dark Mode</label>
            <button>Enable</button>
          </div>

          <div className="setting-item danger">
            <label>Delete Account</label>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;