import { ShoppingCartIcon } from "@heroicons/react/solid";
import React from "react";
import FoodItem from "../FoodItem/FoodItem";

const Food = (props) => {
  const { name, price, foodItems } = props.food;
  return (
    <div className="bg-white p-4 rounded-lg">
        <h1 className="bg-indigo-200 py-2 rounded-lg font-bold text-xl font-mono">{name}</h1>
        <p>
            <span className="text-2xl font-bold italic">৳ {price}</span>
            <span className="text-gray font-semibold"> /day</span>
        </p>
        <div className="">
            <h1 className="text-left font-bold mb-2">Food Items:</h1>
            {
                foodItems.map(item => <FoodItem item = {item}></FoodItem>)
            }
        </div>
        <button className="flex items-center justify-center w-full font-bold bg-indigo-200 rounded-lg mt-5 py-2 hover:bg-indigo-300">
            Order Now <ShoppingCartIcon className="w-6 h-6 ml-2"></ShoppingCartIcon>
        </button>
    </div>
  );
};

export default Food;
