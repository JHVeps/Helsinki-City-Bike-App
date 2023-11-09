import { useNavigate } from "react-router-dom";

import "./LandingPage.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        <>
          <h1>Bicycle stations and routes accross Helsinki/Espoo.</h1>
          <h2>Access anywhere. Plan your routes..</h2>
          <button
            onClick={() => navigate("/signin")}
            className="loginScreen__signIn"
          >
            SIGNIN
          </button>
          OR
          <button
            onClick={() => navigate("/signup")}
            className="loginScreen__signIn"
          >
            SIGNUP
          </button>
        </>
      </div>
    </div>
  );
};

export default Login;
