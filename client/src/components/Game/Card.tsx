import React from 'react';

interface CardProps {
    val:number;
};

function Card({val}:CardProps) {
    
    let point = 0;
    
    if (val == 55) {
        point = 7
    } else if (val % 10 == 5) {
        point = 2
    } else if (val % 10 == 0) {
        point = 3
    } else if (val % 11 == 0) {
        point = 5
    }  else {
       point = 1
    }
    
    
    
    return (
        <div>
            <div className="card">
                <div className="card-zone-value">
                    {[...Array(4)].map(() => ( <p className="card-value">{val}</p>))}
                </div>
                <div className="card-zone-point">
                    {[...Array(point)].map(() => ( <p className="card-point">*</p>))}
                </div>
            </div>
        </div>
    );
}

export default Card;