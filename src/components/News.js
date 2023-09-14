import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'

export class News extends Component {
  constructor(){
    super()
    this.state = {
      articles: [],
      loading: true,
      page: 1
    }
  }
  async componentDidMount(){
      this.setState({loading: true})
      let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=${process.env.REACT_APP_NEWSAPI_KEY}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles,
        loading: false
      })
  }
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.articles.totalResults/this.props.pageSize)) {
    } else {
      this.setState({loading: true})
      let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=${process.env.REACT_APP_NEWSAPI_KEY}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false
      })
    }
  } 
  handlePrevClick = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=${process.env.REACT_APP_NEWSAPI_KEY}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
    })
  }
  render() {
    return (
      <div className='container'>
        <h1>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            if (element.description) {
              return (
                <div key={element.url} className="col-md-3">
                  <Newsitems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;
        Previous</button>
          {this.state.page}
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
