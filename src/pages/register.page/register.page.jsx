import { Divider } from "antd"
import background from "./assets/images/background.png"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import './assets/style/login.scss'

const RegisterPage = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="wrapped">
                    <div className="title">
                        <h1>Welcome back!</h1>
                        <h2>Enter your Credentials to access your account</h2>
                    </div>


                    <form className="form">
                        <div className="form-item">
                            <label htmlFor="input-email">Email address:</label><br />
                            <input type="text" placeholder="Enter your email" id="input-email" />
                        </div>
                        <div className="form-item">
                            <div className="wrapped-password">
                                <label htmlFor="input-password">Password</label>
                                <span>forgot password</span>
                            </div>
                            <input type="text" placeholder="Enter your password" id="input-password" />
                        </div>
                        <div className="form-item form-item-checkbox">
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Remember for 30 days</label>
                        </div>
                        <div className="form-item form-item-btn">
                            <button className="btn-submit">Login</button>
                        </div>

                        <Divider orientation="center"
                            style={{
                                fontSize: "10px",
                                lineHeight: "13.5px",
                                fontWeight: "500"
                            }}>Or</Divider>
                    </form>


                    <div className="other-option">
                        <div className="wrapped-option">
                            <div className="option option-google">
                                <div className="icon">
                                    <FcGoogle style={{ width: "100%", height: "100%" }} />
                                </div>
                                <div className="option-title">Sign in with Google</div>
                            </div>

                            <div className="option option-apple">
                                <div className="icon">
                                    <FaApple style={{ width: "100%", height: "100%" }} />
                                </div>
                                <div className="option-title">Sign in with Apple</div>
                            </div>
                        </div>
                        <div className="signUp">Don't have an account? <a href="#">Sign Up</a></div>
                    </div>
                </div>
            </div>
            <div className="background">
                <img src={background} alt="image" />
            </div>
        </div>
    )
}

export default RegisterPage