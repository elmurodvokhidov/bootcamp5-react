import { useState } from "react";

function AllProducts() {
    const [allProducts, setAllProducts] = useState([
        {
            id: 1,
            img: "./img/s1.png",
            status: true,
            title: "Fresh organic apricot",
            price: 15,
            count: 0,
            discount: 15,
            top: true,
            cat: 1,
        },
        {
            id: 2,
            img: "./img/c2.png",
            status: true,
            title: "Cucumber",
            price: 20,
            count: 0,
            discount: 15,
            cat: 2,
        },
        {
            id: 3,
            img: "./img/h1.png",
            status: false,
            title: "Hazelnuts filbert nut",
            price: 22,
            count: 0,
            discount: 15,
            cat: 3,
        },
        {
            id: 4,
            img: "./img/r1.png",
            status: true,
            title: "raw broccoli",
            price: 19,
            count: 0,
            discount: 15,
            cat: 2,
        },
        {
            id: 5,
            img: "./img/o1.png",
            status: true,
            title: "Organic quince",
            price: 16,
            count: 0,
            discount: 15,
            top: true,
            cat: 3,
        },
        {
            id: 6,
            img: "./img/redapple.png",
            status: false,
            title: "Red apple",
            price: 14,
            count: 0,
            discount: 15,
            cat: 1,
        },
        {
            id: 7,
            img: "./img/capsicum-green.png",
            status: false,
            title: "capsicum-green",
            price: 30,
            count: 0,
            discount: 15,
            cat: 2,
        },
        {
            id: 8,
            img: "./img/Pear fruit.png",
            status: true,
            title: "Pear fruit",
            price: 25,
            count: 0,
            discount: 15,
            cat: 1,
        },
        {
            id: 9,
            img: "./img/Blueberry.png",
            status: true,
            title: "Blueberry",
            price: 24,
            count: 0,
            discount: 15,
            top: true,
            cat: 3,
        },
        {
            id: 10,
            img: "./img/Fresh raspberry.png",
            status: true,
            title: "Fresh raspberry",
            price: 28,
            count: 0,
            discount: 15,
            cat: 3,
        },
        {
            id: 11,
            img: "./img/Ginger.png",
            status: false,
            title: "Ginger",
            price: 26,
            count: 0,
            discount: 15,
            cat: 2,
        },
        {
            id: 12,
            img: "./img/Two fresh figs.png",
            status: true,
            title: "Two fresh figs",
            price: 25,
            count: 0,
            discount: 15,
            top: true,
            cat: 3,
        },
        {
            id: 13,
            img: "./img/Strawberry.png",
            status: false,
            title: "Strawberry",
            price: 27,
            count: 0,
            discount: 15,
            cat: 1,
        },
        {
            id: 14,
            img: "./img/Eggplant.png",
            status: false,
            title: "Eggplant",
            price: 17,
            count: 0,
            discount: 15,
            top: true,
            cat: 2,
        },
        {
            id: 15,
            img: "./img/Egg.png",
            status: true,
            title: "Egg",
            price: 10,
            count: 0,
            discount: 15,
            cat: 3,
        },
        {
            id: 16,
            img: "./img/s1.png",
            status: true,
            title: "Fresh organic apricot",
            price: 15,
            count: 0,
            discount: 15,
        },
        {
            id: 17,
            img: "./img/c2.png",
            status: true,
            title: "Cucumber",
            price: 15,
            count: 0,
            discount: 15,
            top: true,
        },
        {
            id: 18,
            img: "./img/h1.png",
            status: true,
            title: "Hazelnuts filbert nut",
            price: 15,
            count: 0,
            discount: 15,
        },
        {
            id: 19,
            img: "./img/r1.png",
            status: true,
            title: "raw broccoli",
            price: 15,
            count: 0,
            discount: 15,
            top: true,
        },
        {
            id: 20,
            img: "./img/o1.png",
            status: true,
            title: "Organic quince",
            price: 15,
            count: 0,
            discount: 15,
        },
        {
            id: 21,
            img: "./img/redapple.png",
            status: false,
            title: "Red apple",
            price: 15,
            count: 0,
            discount: 15,
        },
        {
            id: 22,
            img: "./img/capsicum-green.png",
            status: true,
            title: "capsicum-green",
            price: 15,
            count: 0,
            discount: 15,
            top: true,
        },
        {
            id: 23,
            img: "./img/Pear fruit.png",
            status: true,
            title: "Pear fruit",
            price: 15,
            count: 0,
            discount: 15,
        },
        {
            id: 24,
            img: "./img/Blueberry.png",
            status: true,
            title: "Blueberry",
            price: 15,
            count: 0,
            discount: 15,
        },
        {
            id: 25,
            img: "./img/Fresh raspberry.png",
            status: true,
            title: "Fresh raspberry",
            price: 15,
            count: 0,
            discount: 15,
            top: true,
        },
        {
            id: 26,
            img: "./img/Ginger.png",
            status: false,
            title: "Ginger",
            price: 15,
            count: 0,
            discount: 15,
        },
        {
            id: 27,
            img: "./img/Two fresh figs.png",
            status: true,
            title: "Two fresh figs",
            price: 15,
            count: 0,
            discount: 15,
        },
        {
            id: 28,
            img: "./img/Strawberry.png",
            status: false,
            title: "Strawberry",
            price: 15,
            count: 0,
            discount: 15,
        },
        {
            id: 29,
            img: "./img/Eggplant.png",
            status: false,
            title: "Eggplant",
            price: 15,
            count: 0,
            discount: 15,
        },
        {
            id: 30,
            img: "./img/Egg.png",
            status: true,
            title: "Egg",
            price: 15,
            count: 0,
            discount: 15,
            top: true,
        },
    ]);
    localStorage.getItem('allProducts') ? JSON.parse(localStorage.getItem('allProducts'))
        : localStorage.setItem('allProducts', JSON.stringify(allProducts));
    return localStorage.getItem('allProducts');
};

export default AllProducts;