let url='http://www.omdbapi.com/?i=tt3896198&apikey=ecbbf73c&t=';
let moviename=document.getElementById("title");
let error=document.getElementById("error");
let about=document.getElementById("about");
let spinner=document.getElementById("spinner");
let title=document.getElementById("Title");
let plot=document.getElementById("plot");
let actors=document.getElementById("actors");
let director=document.getElementById("director");
let genre=document.getElementById("genre");
let boxoffcie=document.getElementById("boxoffice");
let rating=document.getElementById("imdbrating");
let runtime=document.getElementById("runtime");
let type=document.getElementById("type");
let poster=document.getElementById("poster");

function displayResults(data){

    let {Title,Plot,Actors,Director,Genre,Error,BoxOffice,imdbRating,Runtime,Type,Poster}=data;
    
    spinner.classList.toggle("d-none");
    if(data.Error==="Movie not found!"){
        title.textContent=Error;
    }else if(moviename.value===""){

        error.textContent="Please Enter the movie name..."
    }
    else{
        title.textContent=Title;
        plot.textContent=Plot;
        actors.textContent=Actors;
        director.textContent=Director;
        genre.textContent=Genre;
        boxoffcie.textContent=BoxOffice;
        rating.textContent=imdbRating;
        runtime.textContent=Runtime;
        type.textContent=Type;
        poster.src=Poster;
    }
}



function render(){
    moviename.textContent="";
    error.textContent="";
    title.textContent="";
    plot.textContent="";
    actors.textContent="";
    director.textContent="";
    genre.textContent="";
    boxoffcie.textContent="";
    rating.textContent="";
    runtime.textContent="";
    type.textContent="";
    poster.src=""; 
    spinner.classList.toggle("d-none");
    let titlemovie=url+moviename.value;
    console.log(titlemovie)
    fetch(titlemovie)
    .then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
        
        displayResults(data);
    })
}
