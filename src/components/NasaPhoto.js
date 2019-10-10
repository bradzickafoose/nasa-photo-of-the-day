import React, { useState } from "react";
import axios from "axios";

export default function NasaPhoto(props) {
    const [photoState, setPhotoState] = useState('');
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=inPjaaJyTMnb0cJsR1l50D3EJ8sNVlM6wD7sADgx`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log("the data was not return", error);
        });
    }, []);

}