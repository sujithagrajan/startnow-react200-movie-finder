import { types } from './movieSearchActions';

const defaultState = {
    results: [],
    total: '',
    response: '',
    term: '',
    pending: false,
    noResults: false,
    idResults: '',
};

export default function movieSearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case ('MOVIE_SEARCH_BY_TITLE_FULFILLED'): {
            if(payload) {
                return {
                    ...state,
                    results: payload.Search,
                    total: payload.totalResults,
                    response: payload.Response,
                    term: '',
                    pending: false
                };
            } else {
                return {
                    ...state,
                    noResults: true,
                    pending: false
                }
            }
            break;
        }

        case (types.MOVIE_SEARCH_BY_TITLE + '_PENDING'): {
            return {
                ...state,
                pending: true
            }
        }

        case (types.MOVIE_SEARCH_BY_TITLE + '_REJECTED'): {
            return {
                ...state,
                pending: false,
                noResults: true
            }
        }

        case ('MOVIE_SEARCH_BY_ID_FULFILLED'): {
            if(payload) {
                return {
                    ...state,
                    idResults: payload
                };
            } else {
                return {
                    ...state
                }
            }
            break;
        }

        case (types.UPDATE_SEARCH_TERM): {
            return {
                ...state,
                term: payload.term
            }
            break;
        }

        default: {
            return state
        }
    }
}