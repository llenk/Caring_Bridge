import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileData from './ProfileData'
import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';
import Header from '../Header/Header';


const mapStateToProps = state => ({
  user: state.user,
});

class ProfileView extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: USER_ACTIONS.FETCH_USER
      // fetch profile action data
    });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

 
  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>Profile View</p>
        < ProfileData />
        </div>
      );
    }

    return (
      <div>
        <Header />
        <Nav />
        { content }
      </div>
    );
  }
}


export default connect(mapStateToProps)(ProfileView);

