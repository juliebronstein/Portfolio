import React from "react";

const CategoryButton = ({ category, className, onChangeCategory }) => {
  return (
    <div className={className} onClick={() => onChangeCategory(category)}>
      {category}
    </div>
  );
};

export default CategoryButton;
