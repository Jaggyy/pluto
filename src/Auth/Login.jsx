import React, { useEffect, useState } from 'react'
import poster from '../image/vecteezy_space-galaxy-background_3549556/vecteezy_space-galaxy-background_.jpg'
import { FcGoogle } from 'react-icons/fc'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleauth } from "../firebase";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import GhostLogo from '../image/character.jpg'
import { useNavigate } from 'react-router'

function Login() {
  const history = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [changecolor, setChangecolor] = useState(false)
  const [errorfound, setErrorfound] = useState(false)
  const error = useSelector(state => state.error)
  const [loading, setLoading] = useState(false)

  async function data(res) {
    const posting = await axios.post("http://localhost:3001/user/googlelogin", {
      name: res.user.displayName,
      email: res.user.email,
      password: res.user.uid,
      photoUrl: res.user.photoUrl,
      authtype: "google"
    }).then(() => {
      history("/v1/pluto/home")
    })
      .catch(err => {
        console.log(err)
      })
    return posting
  }

  const google = () => {
    signInWithPopup(auth, googleauth).then(res => {
      data(res)
    }).catch((err) => {
      console.log(err)

    })
  }

  const submit = (e) => {
    e.preventDefault()
    async function postdata() {
      const data = await axios.post("http://localhost:3001/user/login", {
        email: email,
        password: password,
      }).then(re => {
        history("/v1/pluto/home")
        setLoading(true)
      }).catch(error => {
        console.log(error)
        dispatch({
          type: "foundederror",
          error: error.response.data.data
        })

        setErrorfound(true)
        setTimeout(() => {
          setErrorfound(false)
        }, 5000)
      })
      return data
    }
    postdata()
  }

  return (
    <div className='logincontainer'
      style={{
        maxWidth: "100vw",
        maxHeight: "100vh",
        display: "flex",

      }}>
      <div className="loginhandler"
        style={{
          width: "30vw",
          maxHeight: "100vh",
        }}>
        <div className="header"
          style={{
            height: "10%",
            padding: "15px 20px"
          }}>
          <h1 style={{
            fontSize: "34px",
            color: "rgb(66, 22, 66)",

          }}>Pluto</h1>
        </div>
        <div className="logincontainer"
          style={{
            width: "100%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <h1 style={{
            padding: "20px 0px"
          }}>Login To continue</h1>
          <div className="googlebutton" onClick={google}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgb(0,0,0,0.3)",
              padding: "12px 20px",
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
                width: "280px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "15px 0px 10px 0px"
              }
            }>
            <div style={{
              width: "80px",
              height: "5px",
              borderRadius: "4px",
              backgroundColor: "rgb(66,25,66)"
            }}></div>
            <div className='or'
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgb(66,25,66)",
                color: "white",
                alignItems: "center",
                display: "flex",
                justifyContent: "center"
              }}>or</div>
            <div style={{
              width: "80px",
              height: "5px",
              backgroundColor: "rgb(66,25,66)",
              borderRadius: "4px",
            }}>

            </div>
          </div>
          {errorfound &&
            <div className="errormessage"
              style={{

                width: "280px",
                // minHeight: "40px",
                backgroundColor: "white",
                border: "1px solid rgb(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                color: "black",
                borderRadius: "5px",
                boxShadow: "0px 1px 3px 2px rgb(0,0,0,0.1)",
                transition: "10s all ease-in",
              }}>
              <div className="sidebar"
                style={{
                  width: "5%",
                  height: "100%",
                  backgroundColor: "red",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px"
                }}></div>
              <p style={{
                margin: "10px 20px",
                color: "rgb(0,0,0,0.7)"
              }}>{error}</p>
            </div>
          }
          <form onSubmit={submit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start"
            }}>
            <label style={{ margin: "10px 0px" }}>Email</label>
            <input type="text"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              style={{
                width: "260px",
                height: "35px",
                borderRadius: "5px",
                outline: "none",
                padding: "0px 10px",
                fontSize: "15px",

                border: `${changecolor ? "1px solid green" : "1px solid rgb(0,0,0,0.4"}`

              }} />
            <label style={{ margin: "10px 0px" }}>Password</label>
            <input type="password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              value={password} style={{
                width: "260px",
                height: "35px",
                borderRadius: "5px",
                outline: "none",
                padding: "0px 10px",
                fontSize: "15px",
                border: "1px solid rgb(0,0,0,0.4)"
              }} />
            <button style={{
              width: "285px",
              height: "40px",
              borderRadius: "5px",
              outline: "none",
              border: "none",
              backgroundColor: "rgb(66, 25 ,66)",
              margin: "10px 0px",
              color: "white",
              fontSize: "16px"

            }}>{loading ? "Loading..." : "Login"}</button>
          </form>
          <div className="forgotandcreate"
            style={{
              display: "flex",
              justifyContent: "space-between", width: "300px"
            }}>
            <p style={{ color: "rgb(66, 22,66)", cursor: "pointer" }}>forget password ?</p>
            <Link to="/NewUser/register"><p style={{ cursor: "pointer" }}>Create new one</p></Link>
          </div>
          <p></p>
        </div>

      </div>
      <div className="overviewhandler"
        style={{
          backgroundImage: `linear-gradient(rgb(0,0,0,0.2) 0% , rgb(0,0,0,0.6) 100%), url(${poster})`,
          width: "70vw",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}>
        {/* <div className="imagecontainer"
          style={{
            width: "150px",
            height: "150px",
            background: "white",
            borderRadius: "50%"
          }}>
          <img src={GhostLogo} alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              borderRadius: "50%"

            }} />
        </div>

        <button style={{
          margin: "10px 0px",
          width: "250px",
          height: "45px",
          border: "1px solid rgb(255,255,255,0.3)",
          backgroundColor: "white",
          borderRadius: "5px",
          fontSize: "16px",
          background: "rgb(66,22,66)",
          color: "rgb(255,255,255,0.9)",
          boxShadow: "0px 1px 3px 2px rgb(66,25,66,0.1)",
          cursor: "pointer"

        }}>Continue With GhostID</button> */}
      </div>
    </div>
  )
}

export default Login