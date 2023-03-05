import { Ui } from "./ui-module.js";

export class GameDetails {
   constructor(id) {
      this.ui                   = new Ui();

      document.getElementById("btnClose").addEventListener("click", () => {
        $("#gameDetails").fadeOut(500,()=> {$("#home").fadeIn(500); $("#nav").fadeIn(500)})
      });

      this.getDetails(id);
   }

 async  getDetails(id) {
    $("#loading").fadeIn(500);

      const options = {
         method                 : "GET",
         headers: {
            'X-RapidAPI-Key'    : 'e064e038e9msh750e85947e737c9p1fa9a9jsn8e4549868617',
            'X-RapidAPI-Host'   : 'free-to-play-games-database.p.rapidapi.com'
         },
      };

     const api                  = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        //  .then((response) => response.json())
        //  .then((response) => this.ui.displayDetails(response))
        //  .catch((err) => console.error(err));
        const response          = await api.json();
        this.ui.showDetails(response);
        
         $("#loading").fadeOut(500);
   }
}