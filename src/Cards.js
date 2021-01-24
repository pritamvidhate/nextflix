import React from 'react';

const Cards = (props) => {
    return ( 
        <>
        <div>
        <div className = "cards">   
            <div className = "card">
                    <img src = {props.img} alt = "dark" className = "img_div"/>
                    
                    <div className="info_div">
                        <h3>{props.title}</h3>
                        <p>{props.info}</p>
                        
                        <div>
                            <a href = {props.link} target = "">
                            <button >watch now</button>
                            </a>
                        </div>
                    </div>
            </div>
            </div>    
        </div>
        
        </>
    );
}

export default Cards;