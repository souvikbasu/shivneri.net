
import FortListRaw from '../Fort/FortListRaw';
import React from 'react';

const FortList = ({ forts }) => {
    if (forts[0] == null) {
        return null;
    }
    const fortList = forts;
    return (
      
            <table className="table">
                <tbody>
                    <tr id="fortList" className="FortDetail">
                        {fortList == null ? '' : fortList.map((fortDetail, index) => {
                            return <tr key={index}><FortListRaw {...fortDetail} /></tr>

                        })}
                    </tr>
                </tbody>
            </table>
      
    );
};

export default FortList;
