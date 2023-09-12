import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-announcements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 45)+"..." : null}</h5>
            <p className="card-text">{description ? description.slice(0, 127)+"..." : null}</p>
            <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitems
