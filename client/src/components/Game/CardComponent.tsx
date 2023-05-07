import React from 'react';
import { Card } from '../../types/CardType';



function CardComponent({value}:Card) {
    
    let point = 0;
    
    if (value == 55) {
        point = 7
    } else if (value % 10 == 5) {
        point = 2
    } else if (value % 10 == 0) {
        point = 3
    } else if (value % 11 == 0) {
        point = 5
    }  else {
       point = 1
    }
    
    
    
    return (
        <div>
            <div className="card">
                <div className="card-zone-value">
                    {[...Array(4)].map(() => ( <p className="card-value">{value}</p>))}
                </div>
                <div className="card-zone-point">
                    {[...Array(point)].map(() => ( <p className="card-point">*</p>))}
                </div>
            </div>
        </div>
    );
}

export default CardComponent;