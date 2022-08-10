import React, { useState } from 'react'
import "./App.css"
import {maleIcon,femaleIcon,kidImage,boyImage,manImage} from './constants'
export const MainIndex = () => {

    const [hidden, setHidden] = useState<boolean>(false)
    const [icon, setIcon] = useState<boolean>(true)
    const [image, setImage] = useState<string>("")

    const onAgeChange = (e: any) => {
        console.log(e.target.value)
        
        if(e.target.value >= 1 && e.target.value <= 2){
            setImage(kidImage)
        }
        else if(e.target.value >= 18 && e.target.value <= 22){
            setImage(boyImage)
        }
        else if(e.target.value >= 25 && e.target.value <= 35){
            setImage(manImage)
        }
        else if(e.target.value === ""){
            setImage("")
        }
        
    }

    const onNameChange = (e: any) => {
        console.log(e.target.value)
        if(e.target.value !== null){
            setHidden(true)
        }
       }
       
    const onGenderChange = (e: any) => {
    console.log(e.target.value)
    if(e.target.value === "Male"){
        setIcon(true)
    }
    else{
        setIcon(false)
    }
    }
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div className='overallBg'>
            <div>
                <h1>Name</h1>
                <input type="text" placeholder='Enter the name' onChange={e => onNameChange(e)}>
                </input>
            </div>
            {hidden &&
            <>
            <div>
                <h1>Age</h1>
                
                <input type="number" placeholder='Enter the age' onChange={e=>onAgeChange(e)}>
                </input>
            </div>
            <div>
                <h1>Gender</h1>
                <div style={{display:"flex",justifyContent:"center"}}>
                <select name="gender" id="gender" onChange={e=>onGenderChange(e)}>
                    <option value="Male" >Male</option>
                    <option value="Female">Female</option>
                </select>
                {icon ?
                <img src={maleIcon} alt="maleIcon" style={{height:"30px"}}/> :
                <img src={femaleIcon} alt="femaleIcon" style={{height:"30px",paddingLeft:"8px"}}/> 
                }
                </div>
            </div>
            </>
            }

        </div>
        <div style={{marginTop:"50px",paddingLeft:"500px"}}>
        {(image != "") && 
        <img src={image} alt="image" height="40%" width="50%"/>
        }
        </div>
        </div>
    )
}


