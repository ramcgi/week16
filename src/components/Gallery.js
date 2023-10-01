import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
export default function Gallery() {
  const [state, setState] = useState({
    input: "Crystal",
    count: 2,
    apiKey: "5cPefQHFZNNtI60wUpR1K4yEjeZoXmJe",
  });
  const [pictures, setPictures] = useState([]);
  const fetchPictures = async () => {
    const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${state.apiKey}&q=${state.input}&limit=${state.count}`;

    await fetch(BASE_URL, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setPictures(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <h1>Gallery</h1>
      <input
        type="text"
        value={state.input}
        onChange={(e) => setState({ ...state, input: e.target.value })}
      ></input>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="50"
        value={state.count}
        onChange={(e) => setState({ ...state, count: e.target.value })}
      />
      <button type="button" className="btn btn-primary" onClick={fetchPictures}>
        Fetch Pictures
      </button>
      <div>
        {pictures.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_width.url}
            alt={gif.title}
            style={{ margin: "1em" }}
          />
        ))}
      </div>
    </Container>
  );
}
