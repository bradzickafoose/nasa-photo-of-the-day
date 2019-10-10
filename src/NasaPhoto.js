import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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


    const PhotoTitle = styled.h2`
        font-size: 3rem;
        color: #282828;
        padding: 0 1rem;
    `;

    const PhotoImage = styled.img`
        max-width: 100%;
    `;

    const PhotoHD = styled.a`
        margin-top: 1rem;
        color:#fc3d21;
        text-decoration: none;

        span:hover {
            text-decoration: underline;
        }
        &:before {
            content: "\\1F4F7";
            padding-right: 8px;
        }
    `;

    const PhotoExplanation = styled.p`
        padding: 0 3rem;
    `;

    const PhotoCopyright = styled.p`
        color: #86868b;
        font-size: .8em;
    `;

    return (
       <div class="container">
        <PhotoImage src={photoState.url} alt={photoState.title}/> <br/>
        <PhotoHD href={photoState.hdurl}><span>View photo in HD</span></PhotoHD>
        <PhotoTitle>{photoState.title}</PhotoTitle>
        <PhotoExplanation>{photoState.explanation}</PhotoExplanation>
        <PhotoCopyright>Copyright &copy; {photoState.copyright}. All rights reserved.</PhotoCopyright>
       </div>  
    );
}

