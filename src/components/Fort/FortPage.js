import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import * as fortActions from '../../actions/fortActions';
import FortList from './FortList';

class FortPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage(){
    browserHistory.push('/fort');
  }
  render() {
    return (
      <div>
        <h1>Forts</h1>
        <input
            type="submit"
            value="Add Fort"
            className="btn btn-primary"
            onClick={this.redirectToAddCoursePage}
        />
        <FortList forts={this.props.forts} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    forts: state.forts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fortActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FortPage);