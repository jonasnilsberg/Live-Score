import React from 'react';
import './Match.css'
let moment = require('moment'); // require

class Match extends React.Component {

    render() {
        let lineBreak;

        if(!this.props.last){
            lineBreak = <hr></hr>
        }
        const homeGoal = this.props.fixture.goalsHomeTeam ? this.props.fixture.goalsHomeTeam : "-";
        const awayGoal = this.props.fixture.goalsAwayTeam ? this.props.fixture.goalsAwayTeam : "-";
        let time;
        let time_class;
        const matchStatus = this.props.fixture.statusShort;
        console.log(matchStatus);
        if (matchStatus === "NS"){
            time = moment(this.props.fixture.event_date).format('HH:mm');
            time_class = "match-not-started";
        } else if(matchStatus === "1H" || matchStatus === "2H") {
            time = `${this.props.fixture.elapsed}'`;
            time_class = "match-ongoing";
        } else if(matchStatus === "HT") {
            time = "HT";
            time_class = "match-pause";
        } else {
            time = "FT";
            time_class = "match-finished";
        }
        return(
            <div>
                <div className="match-container">
                    <div className="team-score">
                        <p>{homeGoal}</p>
                    </div>
                    <div className="team-logo">
                        <img src={this.props.fixture.homeTeam.logo} alt="home team logo"></img>
                    </div>
                    <div className="team-name">
                        <p>{this.props.fixture.homeTeam.team_name}</p>
                    </div>
                    <div className="time">
                        <div className={`time-container ${time_class}`}>
                            <p>{time}</p>
                        </div>
                        
                    </div>
                    <div className="team-score">
                        <p>{awayGoal}</p>
                    </div>
                    <div className="team-logo">
                        <img src={this.props.fixture.awayTeam.logo} alt="away team logo"></img>
                    </div>
                    <div className="team-name">
                        <p>{this.props.fixture.awayTeam.team_name}</p>
                    </div>
                </div>
                {lineBreak}
            </div>
        );
    }
}

export default Match;