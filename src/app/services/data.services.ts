
export class DataServices { 

    findMovieByTitle(title) {
        const url = `https://www.omdbapi.com/?s=${title}&apikey=453b231`;
        return fetch(url)
        .then(res => res.json())
        .catch(err =>  console.log("Error! :D", err))
    }
    

}
