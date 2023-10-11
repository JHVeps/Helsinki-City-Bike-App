import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        <>
          <h1>Stations, routes accross Helsinki/Espoo, Locations on map.</h1>
          <h2>Access anywhere. Start searching now.</h2>
          <h3>Sign in with your Google credentials.</h3>
          <button
            onClick={() => navigate("/home")}
            className="loginScreen__signIn"
          >
            SIGN IN
          </button>
        </>
      </div>
    </div>
  );
};

export default Login;
