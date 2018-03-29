import axios from 'axios';

export const types = {
    MOVIE_SEARCH_BY_TITLE: 'MOVIE_SEARCH_BY_TITLE',
    MOVIE_SEARCH_BY_ID: 'MOVIE_SEARCH_BY_ID',
    UPDATE_SEARCH_TERM: 'UPDATE_SEARCH_TERM'
};

var searchResultsByMovieTitle = [];
var searchResultsByMovieId = {};

export function movieSearchByTitle (title) {
    for (let i = 0; i < searchResultsByMovieTitle.length; i++) {
        if (searchResultsByMovieTitle[i].searchTerm == title) {
            console.log('cached', searchResultsByMovieTitle[i].results);
            return {
                type: types.MOVIE_SEARCH_BY_TITLE,
                payload: searchResultsByMovieTitle[i].results
            }
        }
    }

    return {
        type: types.MOVIE_SEARCH_BY_TITLE,
        payload: axios.get('http://www.omdbapi.com/?s=' + title + '&apikey=8730e0e')
            .then(results => {
                console.log(results);
                searchResultsByMovieTitle = [
                    ...searchResultsByMovieTitle,
                    {
                        searchTerm: title,
                        results: results.data.Search 
                    }
                ]
                return results.data;
            })
            .catch(err => console.log(err))
    }
}

export function movieSearchById(id) {
    if (movieSearchById.hasOwnProperty(id)) {
        return {
            type: types.MOVIE_SEARCH_BY_ID,
            payload: searchResultsByMovieId[id]
        }
    }

    return {
        type: types.MOVIE_SEARCH_BY_ID,
        payload: axios.get('http://www.omdbapi.com/?i=' + id + '&apikey=8730e0e')
            .then( results => {
                searchResultsByMovieId[id] = results.data;
                console.log(results.data)
                return results.data; 
            })
            .catch( err => console.log(err))
    }
}

export function updateSearchTerm(term) {
    return {
        type: types.UPDATE_SEARCH_TERM,
        payload: { term }
    }
}