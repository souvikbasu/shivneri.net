
import React from 'react';
import {Link} from 'react-router';

const FortListRaw = ({ _id, fortImage_url, fortName, fortPlace, fortConstructedYear }) => {
    return (
        <table>
        <tbody>
       
        <Link to={'/fort/'+_id}>
        <img src={fortImage_url} />
        <tr>
       
                <td>
                    {fortName}
                </td>
                <td>{fortPlace}</td>
                <td>{fortConstructedYear}</td>
               
           
        </tr></Link>
        </tbody>
        </table>
            
    )
};

export default FortListRaw;
// const forts = {
//         fortImage_url: "http://placehold.it/120",
//         fortName: "Golconda",
//         fortPlace: "Hyderabad - Telangana",
//         fortConstructedYear: 1500
// }