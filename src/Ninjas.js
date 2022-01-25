
import React from 'react';

    const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map( (ninja) => {
        return (
            <div className="ninja" key={ninja.id}>
                <span> {ninja.name} </span>
                <span> {ninja.age}</span>
                <span> {ninja.belt} </span>
                <button onClick={ () => {deleteNinja(ninja.id)}} >Delete</button>
            </div>
        )
    })
    return(
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}
export default Ninjas;