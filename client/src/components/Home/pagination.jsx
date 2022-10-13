import React from "react";
import'./pagination.css'


export default function Page({cards, pokemons, pagination, currentpage}){
var page = []
    for(var i = 1; i<=Math.ceil(pokemons/cards); i++){
    page.push(i)
    }

    return (<div className="pagination">
            {page && page.map((num, i) => (
                        
                        <a className={`${num === (currentpage) ? "pagination-actual": "pagination-off"}`} key={i} onClick={() => pagination(num)}>{num}</a>
                    
                ))}
    </div>)
}