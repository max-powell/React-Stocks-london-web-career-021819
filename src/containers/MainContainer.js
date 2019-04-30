import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sort: '',
    filter: ''
  }

  componentDidMount () {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState({stocks}))
  }

  addToPortfolio = stock => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    }
  }

  sellFromPortfolio = stock => {
    this.setState({
      portfolio: this.state.portfolio.filter(s => s !== stock)
    })
  }

  setSort = sort => {this.setState({sort})}

  setFilter = filter => {this.setState({filter})}

  filterStocks = stocks => stocks.filter(s => s.type.includes(this.state.filter))

  sortStocks = stocks => {
    switch (this.state.sort) {
      case 'Alphabetically':
        return stocks.sort((a,b) => a.name < b.name ? -1 : 1)
      case 'Price':
        return stocks.sort((a,b) => a.price < b.price ? 1 : -1)
      default:
        return stocks
    }
  }

  render() {

    const displayedStocks = this.sortStocks(this.filterStocks(this.state.stocks))

    return (
      <div>
        <SearchBar setSort={this.setSort} setFilter={this.setFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={displayedStocks} handleClick={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} handleClick={this.sellFromPortfolio} />

            </div>
          </div>
      </div>
    )
  }

}

export default MainContainer;
