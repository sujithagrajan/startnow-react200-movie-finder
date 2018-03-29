import React from 'react';
import {
    updateSearchTerm,
    movieSearchByTitle,
    movieSearchById
} from './movieSearchActions'

var paddingRight = { paddingRight: '15px'};
var padding = { paddingBottom: '15px'};

class MovieResult extends React.Component {
    constructor(props) {
        super(props);

        this.handleMoreInfoClick = this.handleMoreInfoClick.bind(this);
    }

    handleMoreInfoClick(id) {
        this.props.moreInfoCallback(id);
    }

    render() {
        const { result } = this.props;
        return (
            <div className='card'>
                <div className='card-body'>
                    <img style={paddingRight} className='rounded float-left' src={result.Poster}/>
                    <h3 className='card-title'>{ result.Title }</h3>
                    <p className='card-title'>{ result.Year }</p>
                    <hr/>
                    <div className='text-right'>
                        <a href={ '/#/movie/' + result.imdbID }><button onClick={ () => this.handleMoreInfoClick(result.imdbID) } className='btn btn-primary'>More Information</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.moreInfoCallback = this.moreInfoCallback.bind(this);
  }

  handleClick() {
    const { dispatch, term } = this.props;
    dispatch(movieSearchByTitle(term));
  }

  handleInputChange(event) {
      const { dispatch } = this.props;
      const value = event.target.value;
      dispatch(updateSearchTerm(value));
  }

  moreInfoCallback(id) {
    const{ dispatch } = this.props;
    dispatch(movieSearchById(id))
}

  render() {
    const { results } = this.props;
    return (
      <div>
        <h1 className='display-3 text-center'>Movie Finder</h1>
        <div className='col-md-6-offset-md-3 col-lg-6-offset-lg-3 col-sm-6-offset-sm-3'>
            <div style={padding} className='container input-group'>
                <input onChange={ this.handleInputChange } value={ this.props.term } className='form-control' type='text'  />
                <span className='input-group-btn'>
                    <button onClick={ this.handleClick } className='btn btn-primary'>Go!</button>
                </span>
            </div>
            <div className='container'>
                {results.map( result => {
                    return <MovieResult key={result.title} 
                                        result={ result } 
                                        moreInfoCallback = { this.moreInfoCallback }
                                        />
                })}
            </div>
        </div>
      </div>
    )
  }
}

export default MovieSearchContainer;