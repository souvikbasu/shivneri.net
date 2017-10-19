import React from 'react';

const Fort = (props) => {
return(
				<div style={{margin:"2em"}}>
				<img src={props.fortImage_url} width="120"/>
        <div style={{display:"inline-block", marginLeft:10}}>
        <div style={{fontSize:"1em", fontWeight:"bold"}}>
        {props.fortName}
        </div>
        <div>{props.fortPlace}</div>
        <div>{props.fortConstructedYear}</div>
        </div>
        </div>

)
}

export default Fort;
