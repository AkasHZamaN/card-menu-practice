import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

const FoodItem = (props) => {
  return (
    <p className="flex items-center ">
      <CheckCircleIcon className="text-green-500 w-4 h-4 mr-2"></CheckCircleIcon>
      {props.item}
    </p>
  );
};

export default FoodItem;
