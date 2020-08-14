import React from 'react';
import './League.css'
import Match from './Match/Match'

class League extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            fixtures: []
        }
    }

    componentDidMount() {
        console.log("test");
        this.fetchFixtures();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.date !== this.props.date) {
            this.fetchFixtures();
        }
    }

    fetchFixtures() {
        const link = `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${this.props.league_id}/${this.props.date}?timezone=Europe/Oslo`
        fetch(link, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "67cd8dade4msh45cce2071cb8909p11e257jsna6666b3f2b72"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(body => {
                console.log(body);
                this.setState({
                    fixtures: body.api.fixtures,
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        /*const fixture1 = {
            fixture_id: 66,
            goalsHomeTeam: 1,
            goalsAwayTeam: 1,
            homeTeam: {
                team_name: "Newcastle",
                logo: "https://media.api-football.com/teams/5415.png",

            },
            awayTeam: {
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/5409.png"
            },
            statusShort: "HT",
            elapsed: 30,
        }
        const fixture2 = {
            fixture_id: 67,
            goalsHomeTeam: 2,
            goalsAwayTeam: 1,
            homeTeam: {
                team_name: "Arsenal",
                logo: "https://media.api-football.com/teams/5400.png"
            },
            awayTeam: {
                team_name: "Liverpool",
                logo: "https://media.api-football.com/teams/5401.png"
            },
            statusShort: "NS",
            elapsed: 0,
            event_date: "2018-08-11T15:00:00+01:00",
        }*/
        const matches = []
        for (let i = 0; i < this.state.fixtures.length; i++) {
            matches.push(<Match key={this.state.fixtures[i].fixture_id} fixture={this.state.fixtures[i]}></Match>);
        }
        return (
            <div className="league-container">
                <div className="league-header">
                    <p>{this.props.league_name}</p>
                </div>
                <div className="matches-container">
                    {matches}
                </div>
            </div>
        );
    }
}

export default League;