import React from "react";

const Image = () => {
  return (
    <div className="my-5">
      <label htmlFor="image" className="block mb-1">
        写真を選択してください
      </label>
      <input type="file" name="image" id="image" accept="image/*" />
    </div>
  );
};

export default Image;
