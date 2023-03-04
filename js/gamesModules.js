import { Ui } from "./ui-module.js";
import { GameDetails } from "./detailsModules.js";

export class Games {
    constructor() {
        this.fetchApi("mmorpg");
        
        document.querySelectorAll(".nav-item a").forEach(element=>{
            element.addEventListener("click", (e)=>{
                
                Array.from(document.getElementsByClassName("active")).forEach(element=> element.classList.remove("active"));
                console.log( e.target);
                e.target.classList.add("active");
                console.log(e.target.innerText.toLowerCase());
                this.fetchApi(e.target.innerText.toLowerCase());
                });
        });
        this.ui=new Ui();
    }

    async  fetchApi(category){
        $("#loading").fadeIn(500);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e064e038e9msh750e85947e737c9p1fa9a9jsn8e4549868617',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
        };
        const api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
    //     .then(response => response.json())
	// .then(response => this.ui.showGames(response))
	// .catch(err => console.error(err));
        const response = await api.json();
        this.ui.showGames(response);
        this.setEvents();
        $("#loading").fadeOut(500);
    }

    setEvents(){
        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click", () => {
                console.log(card.getAttribute("id"));
               const id = card.getAttribute("id");
               this.switchModules(id);
            });
         });
    }

    switchModules(id){
        const details = new GameDetails(id);
        $("#nav").fadeOut(100);
        $("#home").fadeOut(500,()=> $("#gameDetails").fadeIn(500))
    }
}