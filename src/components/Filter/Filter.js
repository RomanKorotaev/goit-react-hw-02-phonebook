import React, { Component } from "react";
import s from "./Filter.module.css";

class Filter extends Component {

    render() {
        // const {value, handleFilter} = this.props;

        return (
            <label className = {s.filterTitle}>
                  Find contacts by name:
                    <input
                    className ={s.filterInputStyle}
                      type="text"
                      name="filter"
                      value = {this.props.value} 
                      
                     onChange={this.props.handleFilter} 
                      placeholder="Введите имя для поиска контакта"
                  />
                </label> 
        )
    }
}

export default Filter;