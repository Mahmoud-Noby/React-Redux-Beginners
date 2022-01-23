
import React from 'react';

    const Nested = ({ninjas}) => {
    const ninjaList = ninjas.map( (ninja) => {
        return (
            <div className="ninja" key={ninja.id}>
                <span> {ninja.name} </span>
                    <span> {ninja.age}</span>
                <span> {ninja.gender} </span>
            </div>
        )
    })
    return(
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Nested;