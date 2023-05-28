import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: 500,
    categoryName: "non-fiction",
    rating:2
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: 1000,
    categoryName: "horror",
    rating:1
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: 1000,
    categoryName: "fiction",
    rating:3
    
  },
  {
    _id: uuid(),
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 500,
    categoryName: "fiction",
    rating:4
    
  },
  {
    _id: uuid(),
    title: "The Haunting of Hill House",
  
    author: "Shirley Jackson    ",
    price: 1500,
    categoryName: "horror",
    rating:5
    




    
  },{
    _id: uuid(),
    title: "Silent Spring",
    author: "Rachel Carson",
    price: 1500,
    categoryName: "non-fiction",
    rating:5
    
  }
];
