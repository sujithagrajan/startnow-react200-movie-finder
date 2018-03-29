import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { idResults } = this.props;
    return (
      <div className='text-center'>
        <h1 className='display-3'>Movie Finder</h1>
        <a style={{ 'display': 'block', 'paddingLeft': '20px' }} className='text-left' href='/'>Go Back</a>
        <div className='col-md-6-offset-md-3 col-lg-6-offset-lg-3 col-sm-6-offset-sm-3'>
          <div className='card-deck'>
            <div className='card' style={{ 'marginLeft': '30px', 'display': 'inline-block', 'background': 'rgba(0, 0, 0, 0)' }}>
              <img className='img-fluid rounded' src={idResults.Poster}/>
              <div className='card-img-overlay'></div>
            </div>
            <div style={{ 'display': 'inline-block', 'marginRight': '30px' }} className='card'>
              <div className='card-header h3' style={{ 'backgroundColor': 'lightBlue'}}>Movie Details</div>
              <div className='card-body'>
                  <h3 className='card-title'>{ idResults.Title }</h3>
                  <alert className='h6 rounded' style={{ 'color': 'white', 'backgroundColor': 'darkGreen', 'padding': '0 10px 0 10px', 'marginRight': '10px' }}>{'Released ' + idResults.Year }</alert>
                  <alert className='h6 rounded' style={{ 'color': 'white', 'backgroundColor': 'darkGreen', 'padding': '0 10px 0 10px', 'marginRight': '10px' }}>{idResults.Runtime}</alert>
                  <alert className='h6 rounded' style={{ 'color': 'white', 'backgroundColor': 'darkGreen', 'padding': '0 10px 0 10px' }}>{idResults.Genre}</alert>
                  <p className='card-text text-left'>{ idResults.Plot }</p>
                  <p className='card-text text-left'>{ idResults.Awards }</p>
                  <p className='card-text text-left' style={{ 'marginBottom': '0' }}><strong>Metascore:</strong> { idResults.Metascore + '/100' }</p>
                  <p className='card-text text-left'><strong>IMDB:</strong> { idResults.imdbRating }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetailContainer;