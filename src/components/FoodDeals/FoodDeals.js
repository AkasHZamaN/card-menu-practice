import React from 'react';
import Food from '../Food/Food';

const FoodDeals = () => {
    const foodOptions = [
        {id: 1, name: 'Regular', price: 550, foodItems: [
            'Plain Rice',
            'Vegitable Salad',
            'Chicken Curry',
            'Fish Fry',
            'Plain Lentil',
            'Water Bottle'
        ]},
        {id: 1, name: 'Premium', price: 980, foodItems: [
            'Fried Rice',
            'Seafood Salad',
            'Rupchada Fish',
            'Peri Peri Chicken',
            'Meat Dish',
            'Water Bottle'
        ]},
        {id: 1, name: 'Special Prime', price: 1290, foodItems: [
            'Thai Soup',
            'Onthon',
            'Seafood BBQ',
            'Koral Fry',
            'Rice Bread',
            'Water Bottle'
        ]}
    ]
    return (
        <div className='bg-indigo-300 mt-5 pb-5'>
            <h1 className='pt-5 text-3xl font-mono text-white'>Best Food Deals in Town</h1>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    foodOptions.map(food => <Food 
                        key = {food.id}
                        food = {food}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default FoodDeals;