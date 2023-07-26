import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Atomic Habits",
    image:"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    author: "James Clear",
    price: 500,
    realPrice : 999,
    nonfiction: "nonfiction",
    rating:2,
    quantity:1,
    isLiked:false,
    isAddedToCart:false,
    isWished:false
  },
  {
    _id: uuid(),
    title: "The House Of Strange Stories",
    image:"https://m.media-amazon.com/images/I/71Mf4H6rrcL.jpg",
    author: "Ruskin Bond",
    price: 1000,
    realPrice:1500,
    horror: "horror",
    rating:1,
    quantity:1,
    isLiked:false,
    isAddedToCart:false,
    isWished:false
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    image:"https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    author: "Napolean Hill",
    price: 1000,
    realPrice:1200,
    fiction: "fiction",
    rating:3,
    quantity:1,
    isLiked:false,
    isAddedToCart:false,
    isWished:false
    
  },
  {
    _id: uuid(),
    title: "The Kite Runner",
    image:"https://m.media-amazon.com/images/I/81IzbD2IiIL.jpg",
    author: "Khaled Hosseini",
    price: 500,
    realPrice:799,
    fiction: "fiction",
    rating:4,
    quantity:1,
    isLiked:false,
    isAddedToCart:false,
    isWished:false
    
  },
  {
    _id: uuid(),
    title: "The Haunting of Hill House",
    image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTSr3b0yUQBXK9Uv5JqasUBq3UK46u9yR31WnIzsXlmxv7WS05l",
  
    author: "Shirley Jackson    ",
    price: 1500,
    realPrice:1800,
    horror: "horror",
    rating:5,
    quantity:1,
    isLiked:false,
    isAddedToCart:false,
    isWished:false
    




    
  },{
    _id: uuid(),
    title: "Silent Spring",
    image:"https://m.media-amazon.com/images/I/31lNdry1IGL._SX324_BO1,204,203,200_.jpg",
    author: "Rachel Carson",
    price: 1500,
    realPrice:899,
    nonfiction: "nonfiction",
    rating:5,
    quantity:1,
    isLiked:false,
    isAddedToCart:false,
    isWished:false
    
  },{

    _id: uuid(),
    title: "The Edge of the Sea",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UIxXJbTbFd0kZLxj7bMXpUwsmSs3O_d3gP138pGD-hXYxeh2",
    author: "Rachel Carson",
    price: 1200,
    realPrice:1500,
    nonfiction: "nonfiction",
    rating:4,
    quantity:1,
    isLiked:false,
    isAddedToCart:false,
    isWished:false



  },{

    _id: uuid(),
    title: "The Shining",
    image:"https://m.media-amazon.com/images/I/81k5sx8YOhL._AC_UF1000,1000_QL80_.jpg",
    
    author: "Stephen King",
    price: 1300,
    realPrice:1600,
    horror: "horror",
    rating:4,
    quantity:1,
    isLiked:false,
    isAddedToCart:false,
    isWished:false



  },{
    _id: uuid(),
    title: "In Cold Blood",
    image:"https://books.google.co.in/books/content?id=NGJubhmwqfoC&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U1kIe297VPeINdjHd51o6pxJt8DSQ&w=1280",
    author: "Truman Capote",
    price: 700,
    realPrice:100,
    nonfiction: "nonfiction",
    rating:3,
    quantity:1,
    isLiked:false,
    isAddedToCart:false,
    isWished:false


  }

];
