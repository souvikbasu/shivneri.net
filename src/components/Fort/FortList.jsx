
import FortListRaw from '../Fort/FortListRaw';
import React from 'react';

const FortList = ({ filterText, forts }) => {
    if (forts[0] == null) {
        return null;
    }
    const fortList = forts;
    const filterfortName = fortList.filter(fort => fort.fortName.toLowerCase().indexOf(filterText) >= 0);
    const filterFortPlace = fortList.filter(fort => fort.fortPlace.toLowerCase().indexOf(filterText) >= 0);
    const getFort = (fortDetail, index) => {
        return <tr key={index}><FortListRaw {...fortDetail} /></tr>
    }
    return (
        <div>
            {filterText == "" ? '' : <div>
                You are searching for {filterText}
            </div>}
            <table className="table">
                <tbody>
                    <tr id="fortList" className="FortDetail">
                        {fortList == null ? '' : (filterfortName.length != 0 ? filterfortName.map(getFort) : filterFortPlace.map(getFort))}
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default FortList;
