import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import poster from '../image/vecteezy_space-galaxy-background_3549556/vecteezy_space-galaxy-background_.jpg'
import { FcGoogle } from 'react-icons/fc'

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordconfirm, setPasswordconfirm] = useState("")
    return (
        <div style={{
            display: "flex",
            maxWidth: "100vw"
        }}>
            <div className="overviewhandler"
                style={{
                    backgroundImage: `url(${poster})`,
                    width: "30vw",
                    minHeight: "100vh",
                    backgroundPosition: "right",
                    backgroundSize: "contain",
                    backgroundAttachment:"fixed"
                    
                }}>
            </div>
            <div className="Register" style={{
                width: "70vw",
                display: "flex",
                flexDirection: "column",
                padding: "50px 40px ",
                justifyContent:"flex-start"
            }}>
              
                <div className="googlebutton" 
                    style={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid rgb(0,0,0,0.3)",
                        padding: "12px 20px",
                        margin:"0px 25px",
                        borderRadius: "5px",
                        justifyContent: "space-evenly",
                        width: "250px",
                        boxShadow: "0px 1px 3px 2px rgb(0,0,0,0.1)",
                        cursor: "pointer"
                    }}>
                    <FcGoogle fontSize={25} />
                    <p style={{
                        margin: "0px 10px "
                    }}>SignIn with Google</p>

                </div>
                <div className="or-container"
                    style={
                        {
                            width: "350px",
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            padding: "15px 0px 10px 0px"
                        }
                    }>
                    <div style={{
                        width: "130px",
                        height: "5px",
                        borderRadius: "4px",
                        backgroundColor: "rgb(66,25,66)"
                    }}></div>
                    <div className='or'
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "rgb(66,25,66)",
                            color: "white",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center"
                        }}>or</div>
                    <div style={{
                        width: "130px",
                        height: "5px",
                        backgroundColor: "rgb(66,25,66)",
                        borderRadius: "4px",
                    }}>

                    </div>
                </div>
                <h1 style={{ color: "rgb(66, 22, 66)" }}>Create an account</h1>
                <form style={{
                    margin:"10px 20px"
                }}>
                    <div className="namesection"
                        style={{
                            display: "flex", justifyContent: "center",
                            flexDirection: "column",
                            margin: "10px 0px"
                        }}>
                        <label style={{ margin: "5px 0px", fontSize: "18px", color: "rgb(0,0,0,0.7)" }}>Name</label>
                        <input style={{ width: "300px", height: "35px", borderRadius: "5px", border: "1px solid rgb(0,0,0,0.4)", padding: "0px 10px", fontSize: "17px" }} type="text" />
                    </div>
                    <div className="namesection"
                        style={{
                            display: "flex", justifyContent: "center",
                            flexDirection: "column",
                            margin: "10px 0px"
                        }}>
                        <label style={{ margin: "5px 0px", fontSize: "18px", color: "rgb(0,0,0,0.7)" }}>Email address</label>
                        <input type="text" style={{ width: "300px", height: "35px", borderRadius: "5px", border: "1px solid rgb(0,0,0,0.4)", padding: "0px 10px", fontSize: "17px" }} />
                    </div>
                    <div className="namesection"
                        style={{
                            display: "flex", justifyContent: "center",
                            flexDirection: "column",
                            margin: "10px 0px"
                        }}>
                        <div className="passwordcontainer"
                            style={{
                                display: "flex", justifyContent: "center",
                                flexDirection: "column",
                                margin: "10px 0px"
                            }}>
                            <label style={{ margin: "5px 0px", fontSize: "18px", color: "rgb(0,0,0,0.7)" }}>Password</label>
                            <input type="text" style={{ width: "300px", height: "35px", borderRadius: "5px", border: "1px solid rgb(0,0,0,0.4)", padding: "0px 10px", fontSize: "17px" }} />
                        </div>
                        <div className="passwordcontainer"
                            style={{
                                display: "flex", justifyContent: "center",
                                flexDirection: "column",
                                margin: "10px 0px"
                            }}>
                            <label style={{ margin: "5px 0px", fontSize: "18px", color: "rgb(0,0,0,0.7)" }}>PasswordConfirm</label>
                            <input type="text" style={{ width: "300px", height: "35px", borderRadius: "5px", border: "1px solid rgb(0,0,0,0.4)", padding: "0px 10px", fontSize: "17px" }} />
                        </div>

                    </div>
                    <div className="namesection"
                        style={{
                            display: "flex",
                            justifuContent: "space-between"
                        }}>
                        <div className="passwordcontainer">
                            <label style={{ margin: "5px 0px", fontSize: "18px", color: "rgb(0,0,0,0.7)" }}>Country</label>
                            <input type="text" style={{ width: "250px", height: "35px", borderRadius: "5px", border: "1px solid rgb(0,0,0,0.4)", padding: "0px 10px", fontSize: "17px" }} />
                        </div>
                        <div className="passwordcontainer">
                            <label style={{ margin: "5px 0px", fontSize: "18px", color: "rgb(0,0,0,0.7)" }}>State</label>
                            <input type="text" style={{ width: "250px", height: "35px", borderRadius: "5px", border: "1px solid rgb(0,0,0,0.4)", padding: "0px 10px", fontSize: "17px" }} />
                        </div>
                        <div className="passwordcontainer">
                            <label style={{ margin: "10px 0px", fontSize: "16px", color: "rgb(0,0,0,0.7)" }}>City</label>
                            <input type="text" style={{ width: "250px", height: "35px", borderRadius: "5px", border: "1px solid rgb(0,0,0,0.4)", padding: "0px 10px", fontSize: "17px" }} />
                        </div>

                    </div>
                    <div style={{
                        display:"flex",
                        alignItems:"center"
                    }}>
                        <button style={{
                            width: "200px", height: "40px", backgroundColor: "rgb(66, 22,66)", margin: "20px 0px", color: "white",
                            border: "none", outline: "none",
                            fontSize: "16px",
                            borderRadius: "5px"
                        }}>Signup</button>
                        <p style={{margin:"0px 20px"}}>already have account ? <Link to="/">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register