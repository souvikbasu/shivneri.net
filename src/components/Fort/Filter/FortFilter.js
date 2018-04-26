import React from 'react';


class FortFilter extends React.Component {
  constructor(props){
       super(props)
       
  }


    render(){
        return(
            <div>
              <form >
                  <input type="checkbox" name="state" value="state" />
                  <input type="checkbox" name="year" value="year" />
              </form>    
            </div>
        )
    }
}
export default FortFilter;