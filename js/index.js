import { Games } from "./gamesModules.js";

let games = new Games();




// import { Module  } from "./ui-module.js";
// import { GameDetails } from "./detailsModules.js";
// // import {GamesModule} from "./gamesModules.js"

// export const categoryTabs = Array.from(document.getElementsByClassName("nav-link"));
// export let gameCards = Array.from(document.getElementsByClassName("card"));


// // export const currentlyActive = document.getElementsByClassName("active");

// // let gameMoudule = new GamesModule();
// let module = new Module();


// categoryTabs.forEach(element=>{
//     element.addEventListener("click", ()=>{
//         console.log(element.innerHTML,"Clicked");
//         console.log(document.getElementsByClassName("active")[0].innerHTML,"active before");
//         document.getElementsByClassName("active")[0].classList.remove("active");
//         element.classList.add("active");
//         let category=document.getElementsByClassName("active")[0].innerHTML;
//         console.log(document.getElementsByClassName("active")[0].innerHTML,"active after");
//         let module = new Module();

//         module.showGames(category);
//         })
// })
// console.log(gameCards);
// gameCards.forEach(element =>{
//     element.addEventListener("click",function (){
//         document.getElementById("#details").style=display=block;
//         // let gameDetails =new GameDetails();
//         // gameDetails.image=element.thumbnail;
//         // console.log(element.thumbnail);
//         // gameDetails.title=element.title;
//     })
// })