import React from 'react';
import Fort from './Fort.jsx';

const FortList = (props) => {
return(
				<div>
        {props.forts.map(forts => <Fort {...forts}/>)}
        </div>
)
}

export default FortList;
