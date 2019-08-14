import React from "react";
import { connect } from "react-redux"
import Audition from '../Components/Audition'

class ViewEditAudition extends React.Component {

    state = {
        filterTerm: "All"
    }

    sort_auditions = () => {
        return this.props.all_auditions.sort( (a, b) => (new Date(b.date)) - (new Date(a.date)))
    }
    
    auditions = () => {
        console.log(this.filter_auditions())
        return this.filter_auditions().map( auditionObj => <Audition key={auditionObj.id} audition={auditionObj} />)
    }

    filter_auditions = () => {
        switch(this.state.filterTerm) {
            case "all":
                return this.sort_auditions();
            case "callback":
                return this.sort_auditions().filter(audition => audition.callback === true)
            case "booked":
                return this.sort_auditions().filter(audition => audition.booked === true)
            case "not_called_back":
                return this.sort_auditions().filter(audition => audition.callback !== true)
            default:
                return this.sort_auditions()
        }
    }

    onChange = (e) => {
        this.setState({ 
            filterTerm: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h2>Filter Auditions</h2>
                <form>
                    <select name="filterTerm" value={this.state.filterTerm} onChange={this.onChange}>
                        <option value="all">All</option>
                        <option value="callback">Called Back</option>
                        <option value="booked">Booked</option>
                        <option value="not_called_back">Not Called Back</option>
                    </select>
                </form>
                <div className="Audition-Container">
                    {this.auditions()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ all_auditions: state.auditionReducer.all_auditions})


export default connect(
    mapStateToProps,
    null
  )(ViewEditAudition);


