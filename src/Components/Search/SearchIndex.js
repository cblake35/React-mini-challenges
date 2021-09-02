import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

class SearchIndex extends Component {
  constructor() {
    super()
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchValue: '',
      searchResult: 'start',
      didMount: false
    }
  }

  clearSearch = async () => {
    await this.setState({
      searchResult: ''
    })
  }

  searchFunction = async (e) => {
    e.preventDefault();

    this.clearSearch()
    console.log(`search cleared`)

    await this.state.things.filter(string => {
      if (this.state.searchValue === string) {
        this.setState({
          searchResult: this.state.searchValue
        })
      } else {
        console.log('no match')
      }
    })
  }

  componentDidMount() {

  }



  render() {
    return (
      <div>
        <form onSubmit={this.searchFunction}>
          <Input type='text' placeholder='Search Here' value={this.state.searchValue} onChange={(e) => this.setState({ searchValue: e.target.value })} />
          <Button type='submit'>Submit</Button>
        </form>


        {this.state.searchResult === this.state.searchValue && this.state.searchResult !== '' && this.state.searchValue !== ''
          ? <div>
            <h3>Found a match!</h3>
            <ul>
              <li>{this.state.searchResult}</li>
            </ul>
          </div>
          :
          this.state.searchResult === '' && this.state.searchValue === ''
            ?
            <ul>
              {this.state.things.map((thing, index) => {
                return (
                  <li key={index}>{thing}</li>
                )
              })}
            </ul>
            :
            this.state.searchResult !== this.state.searchValue
              ?
              undefined
              :
              undefined

        }
      </div>
    )
  }
}

export default SearchIndex;
