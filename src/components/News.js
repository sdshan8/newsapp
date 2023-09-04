import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          <div className="col-md-4">
            <Newsitems title="Test" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, alias!" url="https://youtu.be/dQw4w9WgXcQ" imgSrc="https://cdn.discordapp.com/attachments/1043247407946809438/1148180692195356794/F2SsrV1boAE2a05.png" />
          </div>
          <div className="col-md-4">
            <Newsitems title="Test" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, alias!" url="https://youtu.be/dQw4w9WgXcQ" imgSrc="https://cdn.discordapp.com/attachments/1043247407946809438/1148180692195356794/F2SsrV1boAE2a05.png" />
          </div>
          <div className="col-md-4">
            <Newsitems title="Test" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, alias!" url="https://youtu.be/dQw4w9WgXcQ" imgSrc="https://cdn.discordapp.com/attachments/1043247407946809438/1148180692195356794/F2SsrV1boAE2a05.png" />
          </div>
          <div className="col-md-4">
            <Newsitems title="Test" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, alias!" url="https://youtu.be/dQw4w9WgXcQ" imgSrc="https://cdn.discordapp.com/attachments/1043247407946809438/1148180692195356794/F2SsrV1boAE2a05.png" />
          </div>
        </div>
      </div>
    )
  }
}

export default News
