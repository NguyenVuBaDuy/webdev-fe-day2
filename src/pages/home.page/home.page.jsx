import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const navigate = useNavigate()

    return (
        <div className="home-page"
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "800px",
                margin: "0 auto"
            }}>
            <div className="login"
                style={{
                    padding: "30px 50px",
                    fontSize: "56px",
                    backgroundColor: "blue",
                    color: "white",
                    display: "inline",
                    borderRadius: "20px",
                    cursor: "pointer"
                }}
                onClick={() => { navigate("/login") }}
            >
                Login
            </div>

            <div className="register"
                style={{
                    padding: "30px 50px",
                    fontSize: "56px",
                    backgroundColor: "green",
                    color: "white",
                    display: "inline",
                    borderRadius: "20px",
                    cursor: "pointer"
                }}
                onClick={() => { navigate("/register") }}
            >
                Register
            </div>
        </div>
    )
}

export default HomePage