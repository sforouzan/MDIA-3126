"use client";
import { useState } from "react";
import Header from "./components/Header";
import DisplayDogData from "./components/DisplayDogData";

const apiURL = "https://api.thedogapi.com/v1/images/search?limit=5&order=RAND";
const apiKey = "live_1VMRmqAZALYnwZKN6IiMkw1lp93cBKEWIFN6gtLCO83yN3dHtNIhsN52xUkOagDZ";

export default function Home() {
  const [dogData, setDogData] = useState(null);
  const [loading, setLoading] = useState(false);


  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(apiURL, {
        headers: {
          "x-api-key": apiKey,
        },
      });
      const data = await response.json();
      setDogData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDogData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="m-8">
      <Header loading={loading} fetchData={fetchData} />
      <DisplayDogData dogData={dogData} loading={loading} />
    </div>
  );
}