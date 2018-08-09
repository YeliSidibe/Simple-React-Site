import React, { Component,PropTypes } from 'react';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";


const PER_PAGE = 3;
const TOTAL_COUNT = 7;

export default class Paginator extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 7
        };
        this.onPageChange = this.onPageChange.bind(this);
      }

      onPageChange(pageNumber) {                
        this.setState({activePage: pageNumber});        
        this.props.onPageChange(pageNumber);
      }
    
      render() {
        return (
          <div>
            <Pagination
              hideDisabled
              activePage={this.state.activePage}
              itemsCountPerPage={PER_PAGE}
              totalItemsCount={TOTAL_COUNT}
              pageRangeDisplayed={PER_PAGE}
              onChange={this.onPageChange}
              itemClass = "page-item"
              linkClass= "page-link"
              prevPageText ="Prev"
              nextPageText ="Next"
            />
          </div>
        );
      }
}

Paginator.propTypes = {    
    onPageChange  : PropTypes.func.isRequired
};