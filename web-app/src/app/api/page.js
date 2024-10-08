"use client"
// API PAGE
import { useState } from "react";

export default function Page() {
    // const DATA_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
    const DATA_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5"
    const [data, setData] = useState(null);


    // add try and catch for error handling to the below async function
    async function fetchData() {
        try {
            const response = await fetch(DATA_URL);
            console.log(response);
            const data = await response.json();
            console.log(data);
            setData(data);
        }
        catch(error) {
            console.log(response.error)
        }

    }

    // const DisplayProducts = () => {
    //     if (data) {
    //         let productsList = [];
    //         data.forEach((product, index) => {
    //             productsList.push(
    //                 <li key={index}>{product.name}</li>
    //             )
    //         })

    const DisplayMedia = () => {
        if (data) {
            let mediaList = [];
            data.forEach((medium, index) => {
                let formattedMedia = medium.media_type === 'image' ? <img src={medium.url} /> : (
                    <video controls width="250" crossorigin="anonymous">
                        <source src={medium.url} type="video/webm" />
                        <source src={medium.url} type="video/mp4" /> {/* Fallback */}
                        Your browser does not support the video tag.
                    </video>
                )

                mediaList.push(
                    <li key={index}>
                        {formattedMedia}
                        <h3>{medium.title}</h3>
                        {medium.explanation}
                    </li>
                );
            });
            
            return(
                <div className="border-4 border-black p-4 mb-4">
                    <ul>
                        {mediaList}
                    </ul>
            </div>
            )

        } else {
            return(
                <div className="border-4 border-black p-4 mb-4">
                    <ul>
                        In a galaxy far far away...
                    </ul>
                </div>
            )
        }
    }

    return (
        <div className="p-4 bg-black-300 text-white">
            <header className="border-4 border-black p-4 mb-4">
                <h1>Welcome to my Astronomy Page.</h1>
                <button 
                    className="border-neutral-200 rounded-xl bg-white px-6 text-black mt-3"
                    onClick={fetchData}
                    >Fetch media!</button>
            </header>
            <DisplayMedia/>
        </div>
    );
}

