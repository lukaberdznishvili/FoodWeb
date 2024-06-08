"use client";
import { useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import classes from "./image-picker.module.css";
export default function ImagePicker({label, name}){
    const [pickedImage, setPickedImage] = useState();
    const imageInputRef = useRef();
    function handleClick(){
        imageInputRef.current.click();
    };
    function handleImageChange(event){

        const file = event.target.files[0];
        if(!file){
            return;
        }
        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }; 

        fileReader.readAsDataURL(file);
    };
    return(
        <>
        <div className={classes.picker}>

            <label htmlFor="image">{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>NO Image Picked Yet!</p>}
                    {pickedImage && <Image src={pickedImage} alt="The image selected" fill />}
                </div>
                <input  
                className={classes.input}
                type="file" 
                id="image" 
                accept="image/png, image/jpeg" 
                name={name} 
                ref={imageInputRef}
                onChange={handleImageChange}/>
                <button className={classes.button} 
                type="button"
                onClick={handleClick}>Pick an Image</button>
            </div>
        </div>
        </>
    )
}