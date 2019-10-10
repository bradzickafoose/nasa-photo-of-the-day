import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NasaPhoto(props) {
    const [photoState, setPhotoState] = useState('');
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=inPjaaJyTMnb0cJsR1l50D3EJ8sNVlM6wD7sADgx`)
        .then(response => {
            setPhotoState(response.data)
            // console.log(response.data);
        })
        .catch(error => {
            console.log("no data for you!", error);
        });
    }, []);

    if (!photoState.url) return <h3>Loading...</h3>;
    return (
       <>
        <img src={photoState.url} alt={photoState.title}/>
       </>  
    );
}

