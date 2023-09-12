import React, { Component } from 'react'
import Newsitems from './Newsitems'
import sample from '../lib/sample.json'

export class News extends Component {
  constructor(){
    super()
    this.state = {
      articles: sample.articles,
      loading: false,
      page: 1
    }
  }
  async componentDidMount(){
      console.log("cdm");
      let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=${process.env.REACT_APP_NEWSAPI_KEY}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({ articles: parsedData.articles })
  }
  handleNextClick = async () => {
    console.log("Next")
    if (this.state.page + 1 > Math.ceil(this.state.articles.totalResults/20)) {
    } else {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=${process.env.REACT_APP_NEWSAPI_KEY}&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
  } 
  handlePrevClick = async() => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=${process.env.REACT_APP_NEWSAPI_KEY}&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })
  }
  render() {
    return (
      <div className='container'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
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
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr;
        Previous</button>
          {this.state.page}
          <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
