import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title, description, url, imgSrc} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          {imgSrc && 
            <img src={imgSrc} className="card-img-top" alt="..."/>
          }
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-primary">Source</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitems
