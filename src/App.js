import React from "react";
import ImageCard from "./components/ImageCard";
import imageData from "./data";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">Image Gallery</h1>

      <div className="gallery">
        {imageData.map((image) => (
          <ImageCard
            key={image.id}
            url={image.url}
            title={image.title}
            description={image.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;