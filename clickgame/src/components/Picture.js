import React from 'react';

const Picture = (props)=>{

    return (
        <div className="card justify-content-center d-flex" style ={{width:'150px',marginBottom:'10px'}}>
        <img  id = {props.name} className="card-img-top" src = {props.image} alt="Card image cap"style={{width: "150px",height:'150px'}}/>
        </div>
    )
}
export default Picture