import Login from "../components/Login";
import "./LoginPage.css";
import NavBar from "../common/NavBar";
const LoginContainer = () => {
  return (
    <div>
      <NavBar sx={{ justifyContent: "space-between" }} />
      <div className="container">
        <Login />
      </div>
    </div>
  );
};
export default LoginContainer;
