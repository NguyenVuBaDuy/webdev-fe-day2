import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="home-page"
                style={{
                    height: "100vh",
                    width: "800px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column"
                }}>

                <h1 style={{ textAlign: "center" }}>CLICK TO VIEW</h1>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            </div>
        </>
    )
}

export default HomePage