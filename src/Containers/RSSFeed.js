import React from "react";
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

let Parser = require('rss-parser');
let parser = new Parser();


class RSSFeed extends React.Component {
    state = {
        auditions: []
    }

    componentDidMount = () => {
        this.myFunc()
    }

    async myFunc(){
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        let feed = await parser.parseURL(CORS_PROXY + 'https://www.backstage.com/casting/rss/')

        const theatreAuditions = await feed.items.filter(item => {
           return item.content.split(" ")[0] === "Theater"
        })
        const auditions = await theatreAuditions.map(audition => {
            return (<div className="rss-div"><a href={audition.link} target="_blank">{audition.title}</a></div>)
        })
        this.setState({auditions: auditions}) 
        
    }


    render(){
        // console.log("my func", this.myFunc());
        return(
            <StyleRoot style={styles.fadeIn}>
            <div className="rss-container">
                <h1 className="rss-title">BACKSTAGE.COM AUDITION FEED</h1>
                <div>
                    {this.state.auditions.length ? this.state.auditions : "LOADING..."}
                </div>
            </div>
            </StyleRoot>
        )
    }
}

// {this.myFunc()}
export default RSSFeed