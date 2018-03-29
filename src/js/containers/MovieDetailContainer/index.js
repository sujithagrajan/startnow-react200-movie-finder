import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
    return {
        idResults: store.search.idResults
    };
}

export default connect(mapStoreToProps)(MovieDetailContainer);