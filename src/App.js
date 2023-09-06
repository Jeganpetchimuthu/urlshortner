import React, { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:6000/url", {
        longUrl,
      });
      setShortUrl(response.data.shortUrl);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1 className="h">URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="m1"
          type="text"
          placeholder="Enter a long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button className="m2" type="submit">
          Shorten
        </button>
      </form>
      {shortUrl && (
        <div>
          <p>Short URL:</p>

          {shortUrl}
        </div>
      )}
    </div>
  );
}

export default App;
