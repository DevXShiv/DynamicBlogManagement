import "../App.css";
import {useNavigate} from "react-router-dom";
function Login()
{
    const navigate=useNavigate();
  return (
    <div className="container">
      <div className="login-card">
        <h2> Welcome Back Blogger</h2>
        <input type="email" placeholder="Enter Email"/>
        <br></br>
        <input type="password" placeholder="Enter Pasword"/>
        <button onClick={()=> navigate("/author")}> 
            Login 
            </button>
      </div>
    </div>
  );
}
export default Login;