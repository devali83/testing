let productTitle = document.querySelector('.title')
let productDescription = document.querySelector('.description')
let productPrice = document.querySelector('.price')

let laptops =
{
    "url": "laptops-details.html",
    "id": 6,
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 1749,
    "discountPercentage": 11.02,
    "rating": 4.57,
    "stock": 83,
    "brand": "Apple",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
    "images": [
        "https://i.dummyjson.com/data/products/6/1.png",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
}

productTitle.innerHTML = laptops.title
productDescription.innerHTML = laptops.description
productPrice.innerHTML = laptops.price