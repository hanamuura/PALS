import React from "react";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import "./Filter.css";

const Filter = ({filter, setFilter, price, setPrice}) =>{
    
    return(
        <div className="mainContainer">
            <div className="container">
                <Input 
                    value = {filter.query} 
                    onChange = {e => setFilter({...filter, query: e.target.value})}
                    placeholder = "Поиск"
                />
                <div className="middle">
                    <Select
                        value = {filter.sort}
                        onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
                        defaultValue="Сортировка"
                        options = {[
                            {value: 'title', name: 'По загаловку'},
                            {value: 'desc', name: 'По описанию'}
                        ]}
                    />
                    <h4 style={{marginBottom: "10px"}}>
                        Цена
                    </h4>
                    <Input
                        placeholder="От"
                        value = {price.query}
                        onChange = {e => setPrice({...price, query: e.target.value})}
                    />
                </div>
            </div>
        </div>
    )
}

export default Filter;