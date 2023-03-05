
export class Ui{
  constructor(){

  }
  showGames(results){    
    let gamesList           = ``;
    results.forEach(element =>{
        gamesList           += `<div class="col-md-6 col-lg-4 col-xl-3 ">
        <div id             = "${element.id}" class="card  h-100 bg-black border-white text-white">
          <img src          = ${element.thumbnail} class="card-img-top p-2 rounded-4" alt="...">
          <div class        = "card-body">
            <h5 class       = "card-title text-primary">${element.title}<span class="badge text-bg-primary float-end">Free</span></h5>
            
            <p class        = "card-text">${element.short_description}</p>
          </div>
          <div class        = "card-footer">
            <small class    = "text-muted"><span class="badge text-bg-primary float-start">${element.genre}</span><span class="badge text-bg-primary float-end">${element.platform}</span></small>
          </div>
        </div>
      </div>`;
    })  
    document.querySelector("#gamesRow").innerHTML=gamesList;
  }
  showDetails(gameData){
    let details             = ``;
    details                 += `<div class="col-md-4">
    <img src                = ${gameData.thumbnail?gameData.thumbnail:"../images/pexels-photo-103305.jpeg"} class="w-100" alt="image details">
    </div>
    <div class              = "col-md-8">
    <h3>Title               : ${gameData.title}</h3>
    <p>Category             : <span class="badge text-bg-info"> ${gameData.genre}</span> </p>
    <p>Platform             : <span class="badge text-bg-info"> ${gameData.platform}</span> </p>
    <p>Status               : <span class="badge text-bg-info"> ${gameData.status}</span> </p>
    <p class                = "small">${gameData.description} </p>
    <a  class               = "btn btn-outline-warning" target="_blank" href=${gameData.game_url} data-ur1313m3t="true">Show Game</a>
  </div>`;

  document.querySelector("#detailsContent").innerHTML=details;
}

}



