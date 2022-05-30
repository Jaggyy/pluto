import React, { useEffect, useState } from 'react'
import {BiErrorCircle} from 'react-icons/bi'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'

export function Errorhandle() {
    const dispatch = useDispatch()
    const error= useSelector(state=> state.error.condition)
    const [width , setWidth] = useState(100)
    const errormess = useSelector(state=> state.error.error)
    const[animation , setAnimation] = useState(0)
    
 
    if(error){
        setTimeout(()=>{
            setWidth(0)
            setAnimation(2)
        }, 1000)
        setTimeout(()=>{
            dispatch({
                type:"found error",
                data: {
                    condition: false,
                    error: null
                }
            }) 
            setWidth(100)
            setAnimation(0)
        },3000)
  
    }
    
    

  return (
    <div className='errorhandle'
    style={{
        width:"400px",
        minHeight:"70px",
        backgroundColor:"white",
        position:"absolute",
        top:"-100px",
        transform:`${error ? "translateY(110px)" : "translateY(0px)"}`,
        transition:`0.${animation}s all ease-in`,
        borderRadius:"10px",
        boxShadow:"0px 2px 2px 2px rgb(0,0,0,0.4)",
        display:"flex",
        flexDirection:"column",
        justifyContent:'space-between'

    }}>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"flex-start",
            minHeight:"100%",
            padding:"15px 20px"
        }}>
              <BiErrorCircle fontSize={34} color="rgb(66, 22, 66)"/>
              <div className="errortitle"
              style={{
                  
                  height:"100%"
              }}>
                 <p style={{padding:"10px 10px" , textAlign:"justify"}}>{"Plese provide valid data !"}</p>
              </div>
              <div style={{
                  position: "absolute",
                  top: "30px",
                  right: "20px",
                  color: "black",
                  cursor: "pointer",
                  fontWeight: "300"
              }} 
              ><ImCross fontSize={14} /></div>
        </div>
      
        
        <div className="errorremaing"
        style={{
            width:`${width}%`,
            transition:`${animation}s width ease-in`,
            backgroundColor:"rgb(66, 22, 66)",
            height:"10px"
        }}>

        </div>
    </div>
  )
}
