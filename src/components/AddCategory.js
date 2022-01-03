import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ setCategories }) => {
  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    setValue(e.target.value);
    console.log("value", value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 2) {
      setCategories((cats) => [value, ...cats]);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category</h2>
      <input type="text" value={value} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
