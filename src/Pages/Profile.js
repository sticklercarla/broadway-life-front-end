import React from "react";
import { connect } from 'react-redux';
import UserShowPage from '../Containers/UserShowPage'
import ViewEditAudition from '../Containers/ViewEditAudition'
import AuditionStats from '../Containers/AuditionStats'
import SongBook from '../Containers/SongBook'
import AuditionForm from '../Containers/AuditionForm'

class Profile extends React.Component {


  render () {
    console.log(this.props.page)
    switch(this.props.page) {
      case "profile":
        return <UserShowPage />
      case "log_audition":
        return <AuditionForm />
      case 'view_edit_audition':
        return <ViewEditAudition />
      case 'audition_stats':
        return <AuditionStats />
      case 'song_book':
        return <SongBook />
      default:
        return <SongBook />
    }
  }
};

const mapStateToProps = state => ({
  page: state.pageReducer
})



export default connect(mapStateToProps, null)(Profile)