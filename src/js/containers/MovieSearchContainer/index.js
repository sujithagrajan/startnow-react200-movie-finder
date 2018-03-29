import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
    return {
        results: store.search.results,
        term: store.search.term
    };
}

export default connect(mapStoreToProps)(MovieSearchContainer);