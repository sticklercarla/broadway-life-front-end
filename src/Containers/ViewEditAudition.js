import React from "react";
import { connect } from "react-redux"
import Audition from '../Components/Audition'

class ViewEditAudition extends React.Component {

    auditions = () => {
        console.log(this.props.all_auditions)
        return this.props.all_auditions.map( auditionObj => <Audition key={auditionObj.id} audition={auditionObj} />)
    }

    render(){
        return(
            <div className="Audition-Container">
                {this.auditions()}
            </div>
        )
    }
}

const mapStateToProps = state => ({ all_auditions: state.auditionReducer.all_auditions})


export default connect(
    mapStateToProps,
    null
  )(ViewEditAudition);