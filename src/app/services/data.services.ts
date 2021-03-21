
export class DataServices { 
    getMovieList() {
        const url = "http://www.omdbapi.com/?s=batman&apikey=453b231";
        return fetch(url)
        .then(res => res.json())
        .catch(err =>  console.log("Error! :D", err))
    }

    findMovieByTitle(title) {
        const url = `http://www.omdbapi.com/?s=${title}&apikey=453b231`;
        return fetch(url)
        .then(res => res.json())
        .catch(err =>  console.log("Error! :D", err))
    }

}
