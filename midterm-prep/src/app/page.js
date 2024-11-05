"use client";
import { useState } from "react";


//TO DO
// - add button
// - function to fetch data
// - function to add data to state
// - responsive design
// - display data
// - function to clear data
// - component for empty state
// - component for data state
// - error handling if the data doesn't come back
// - note that this template is not atomic design - still needs to be split into components, not one long JS page for test

export default function Home() {
  // if useState !null, probably fetching or loading data, or have data
  //if useState === data, we can display our data
  const [astronomyData, setAstronomyData] = useState(null);
  const [loading, setLoading] = useState(null);

  async function fetchData() {
    //fetchData
    setLoading(true);
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5");

    const data = await response.json();

    setAstronomyData(data);
    setLoading(false);
  }

  const DisplayAstronomyData = () => {
    // display if we have data
    // loading state (maybe data?)
    // fulfilled state (data exists)
    // empty state (!data)
    const formattedData = JSON.stringify(astronomyData)
    if (loading) return <div>Loading!</div>
    
    
    // title, url, description
    if (astronomyData) {
      const dataDisplayed = [];
      astronomyData.forEach((entry, i) => {
        dataDisplayed.push(
        <article key={i}>
          <img src={entry.url} />
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
        </article>)
      });
      return <section>{dataDisplayed}</section>
    }
    return <div>Empty, no data fetched!</div>
  }

  const Header = () => {
    // build the UI that grabs data
    return (<header>
      Welcome to my Midterm Prep
      <br />
      <button
        disabled={loading}
        onClick={fetchData}
      >Fetch stuff!</button>
      </header>
      
  
    )
  }

  return (
    <div className="m-8">
        <Header/>
        <DisplayAstronomyData/>
    </div>
  );
}
