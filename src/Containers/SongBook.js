import React from "react";
import Song from "../Components/Song"
import SongForm from  "../Components/SongForm"
import { connect } from "react-redux"

class SongBook extends React.Component {

    componentDidMount = () => {
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <Song />
                <SongForm />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
}



export default connect(
    mapStateToProps,
    null
  )(SongBook);