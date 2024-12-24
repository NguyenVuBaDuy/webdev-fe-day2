import './assets/style/style.scss'
import background from './assets/images/background.png'
import { Divider } from "antd"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Form = (props) => {

    const { type } = props
    const navigate = useNavigate()

    return (
        <div className="page">
            <div className="container">
                <div className="wrapped" style={{ height: type === 'register' ? '638px' : '583px' }}>
                    <div className="title">
                        {type === 'login' ?
                            <h1>Welcome back!</h1>
                            :
                            <h1>Get Started Now</h1>
                        }
                        {type === 'login' && <h2>Enter your Credentials to access your account</h2>}
                    </div>


                    <form className="form">
                        {type === 'register' &&
                            <div className="form-item">
                                <label htmlFor="input-name">Name:</label>
                                <input type="text" placeholder="Enter your name" id="input-name" />
                            </div>
                        }
                        <div className="form-item">
                            <label htmlFor="input-email">Email address:</label>
                            <input type="text" placeholder="Enter your email" id="input-email" />
                        </div>
                        <div className="form-item">
                            <div className="wrapped-password">
                                <label htmlFor="input-password">Password</label>
                                {type === 'login' && <span>forgot password</span>}
                            </div>
                            <input type="text" placeholder="Enter your password" id="input-password" />
                        </div>
                        <div className="form-item form-item-checkbox">
                            <input type="checkbox" id="checkbox" />
                            {type === 'login' ?
                                <label htmlFor="checkbox">Remember for 30 days</label>
                                :
                                <label htmlFor="checkbox">I agree to the <u><a href="#" style={{
                                    color: "black"
                                }}>terms & policy</a></u></label>
                            }
                        </div>
                        <div className="form-item form-item-btn">
                            <button className="btn-submit">{type === 'login' ? "Login" : "Signup"}</button>
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
                        {type === 'login' ?
                            <div className="signUp">Don't have an account? <a onClick={() => { navigate('/register') }}>Sign Up</a></div>
                            :
                            <div className="signUp">Have an account? <a onClick={() => { navigate('/login') }}>Sign In</a></div>
                        }
                    </div>
                </div>
            </div>
            <div className="background">
                <img src={background} alt="image" />
            </div>
        </div>
    )
}

export default Form