import { useState } from "react";
import CustomInput from "..//..//components/customInput";
import COLOR from "../../config/color";
import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

function LoginPage() {
  // let count = 0;
  // const [count, setCount] = useState(0);
  return (
    <div className="loginPageBaseContainer">




      
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1>Login Your Account</h1>
          <h2>Login</h2>
        </div>
        <div className="loginPageContentInputContainer">
          <CustomInput
            type={"email"}
            placeholder={"Enter Email"}
            Icon={FaUserAlt}
            
          />
          <CustomInput
            type="password"
            placeholder={"Enter Password"}
            Icon={FaKey}
            isSecureEntry={true}
          />
          {/* <p>{count}</p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button> */}
        </div>
        <div className="loginPageContentButtonContainer"><button class="my-button">SIGN IN</button></div>
        <div className="loginPageContentForgotPasswordContainer">Forgot Password</div>
        
      
      </div>
    </div>
  );
}

export default LoginPage;