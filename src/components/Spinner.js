import React, { Component } from 'react'
import loading from "./loading.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className='d-flex p-2 justify-content-center'>
        <div style={{height: '30rem'}} className='d-flex'>
          <img src={loading} height={100} width={100} className='align-self-center d-flex' alt="loading" />
        </div>
      </div>
    )
  }
}


export default Spinner;