import React, { useState } from "react";

const Romeo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {selectedImage && (
        <div>
          <img className="image"
            alt="not found"
            width={"90px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br /> <br />
          <button className="remove" onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />

      <input  
      className="opplo"
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default Romeo;
