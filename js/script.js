let Field = document.getElementById("movie-search");
let Button = document.getElementById("search-btn");
let MovieDivContainer = document.querySelector(".movie-info-banner");

let key = "7847211c";

function FetchData(){
    let InputValue = Field.value;
    fetch(`http://www.omdbapi.com/?t=${InputValue}&apikey=${key}`)
    .then((response) => {
        return response.json();
    })
    .then(data => CreateData(data));
}

function CreateData(data){

    let InnerDiv = document.createElement("div");
    let PosterContainer = document.createElement("div");
    let MovieDetail = document.createElement("div");
    let Poster = document.createElement("img")
    let Title = document.createElement("h1");
    let ReleaseDate = document.createElement("h4");
    let StoryLine = document.createElement("p");
    let Genre = document.createElement("li");
    let Director = document.createElement("li");
    let ImdbRating = document.createElement("li");
    let Cast = document.createElement("p");


    InnerDiv.setAttribute("id", "movie-info");
    Poster.setAttribute("src", `${data.Poster}`);
    
    Title.innerHTML = `${data.Title}`;
    ReleaseDate.innerHTML = `Release:  ${data.Released}`;
    StoryLine.innerHTML = `Plot: ${data.Plot}`;
    Genre.innerHTML = `Genre: ${data.Genre}`;
    Director.innerHTML = `Director: ${data.Director}`;
    ImdbRating.innerHTML = `IMdb-rating: ${data.imdbRating}`;
    Cast.innerHTML = `Cast:  ${data.Actors}`;    

    // append elements //
    PosterContainer.appendChild(Poster);
    MovieDetail.appendChild(Title)
    MovieDetail.appendChild(ReleaseDate);
    MovieDetail.appendChild(Cast)
    MovieDetail.appendChild(StoryLine);
    MovieDetail.appendChild(Genre);
    MovieDetail.appendChild(Director);
    MovieDetail.appendChild(ImdbRating);

    // innerdiv appends //
    InnerDiv.appendChild(PosterContainer);
    InnerDiv.appendChild(MovieDetail);
    MovieDivContainer.appendChild(InnerDiv)

    Field.value = "";

    Field.addEventListener("click", function(){
        MovieDivContainer.removeChild(InnerDiv);
    });
}

Button.addEventListener("click", FetchData)