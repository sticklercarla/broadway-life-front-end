import React from "react";

let Parser = require('rss-parser');
let parser = new Parser();


class AuditionStats extends React.Component {

    async myFunc(){
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        let feed = await parser.parseURL(CORS_PROXY + 'https://www.backstage.com/casting/rss/')

        const theatreAuditions = feed.items.filter(item => {
           return item.content.split(" ")[0] === "Theater"
        })
        const auditions = theatreAuditions.map(audition => {
            return (<div>{audition.title + ":" + audition.link}</div>)
        })
        return auditions
        
        // fetch(feed)
        // .then(res => res.json)
        // .then(data => () => console.log(data))
    }

    // findTheatreAuditions = () => {
    //     return this.myFunc()
    // }

    render(){
        
        return(
            <div>
                {this.myFunc()}
            </div>
        )
    }
}

export default AuditionStats