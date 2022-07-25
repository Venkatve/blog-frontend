import { useContext, useRef,useState } from "react";
import axios from "axios";
import { ToastContainer,toast} from 'react-toastify';
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import Loading from "../utilltes/Loading";
import ValidationError from "../utilltes/ValidationError";
import { Context } from "../context/Context";
import  './login.css'
import { URLDevelopment } from "../Helper/Url";


function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    dispatch({ type: "LOGIN_START" });




    try {
      const res = await axios.post(`${URLDevelopment}api/login/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" })
        if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500)
                toast.error("Email or Password is Invalid");
    }
    
      setError(error.response.data.message)
  

  };

  return (

    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="login">
        <span className="loginTitle">LOGIN</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter username"
            ref={userRef}
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter password"
            ref={passwordRef}
          />
          <br></br>
          <div>Username : Admin |<span> Password : User@123</span></div>
          {error && <ValidationError message={error} />}
      
         
          <button className="loginButton bg-red-600" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
       
      </div>
    </>


  );
}

export default Login;