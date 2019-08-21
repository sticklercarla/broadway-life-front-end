import React from "react";
import { connect } from 'react-redux';
import UserShowPage from '../Containers/UserShowPage'
import ViewEditAudition from '../Containers/ViewEditAudition'
import RSSFeed from '../Containers/RSSFeed'
import SongBook from '../Containers/SongBook'
import AuditionForm from '../Containers/AuditionForm'
import Login from './Login'
import AccountDetails from '../Containers/AccountDetails'
import castingOfficeActions from '../Actions/castingOfficeActions'
import auditionLocationActions from '../Actions/auditionLocationActions'

class Profile extends React.Component {

  componentDidMount = () => {
    this.props.casting_offices()
    this.props.audition_locations()
  }

  render () {
    switch(this.props.page) {
      case "login":
        return <Login />
      case "profile":
        return <UserShowPage />;
      case "log_audition":
        return <AuditionForm />
      case 'view_edit_audition':
        return <ViewEditAudition />
      case 'audition_stats':
        return <RSSFeed />
      case 'song_book':
        return <SongBook />
      case 'edit_user':
        return <AccountDetails />
      default:
        return <Login />
    }
  }
};

const mapStateToProps = state => ({
  page: state.pageReducer.page
})

const mapDispatchToProps = {
  casting_offices: castingOfficeActions.getCastingOfficesFromDB,
  audition_locations: auditionLocationActions.getAuditionLocationsFromDB
}; 


export default connect(mapStateToProps, mapDispatchToProps)(Profile)