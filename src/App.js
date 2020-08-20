import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Date from "./Date/Date";
import League from "./League/League";
let moment = require("moment"); // require

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleNavPrevClick = this.handleNavPrevClick.bind(this);
        this.handleNavNextClick = this.handleNavNextClick.bind(this);

        this.state = {
            date: moment.now(),
            leagues: [{
                league_id: 530,
                league_name: "UEFA Champions League",
            },
            {
                league_id: 524,
                league_name: "Premier League",
            },
            {
                league_id: 287,
                league_name: "Eliteserien",
            },
            {
                league_id: 891,
                league_name: "Serie A",
            },
            {
                league_id: 754,
                league_name: "Bundesliga 1",
            },
            ],
        };
    }

    handleNavPrevClick() {
        let new_date = moment(this.state.date).subtract(1, "days");
        this.setState({ date: new_date });
    }

    handleNavNextClick() {
        let new_date = moment(this.state.date).add(1, "days");
        this.setState({ date: new_date });
    }

    render() {
        const date = moment(this.state.date).format("LL");
        const api_date = moment(this.state.date).format("YYYY-MM-DD");
        const leagues = [];
        for (let i = 0; i < this.state.leagues.length; i++) {
            leagues.push(
                <League key={this.state.leagues[i].league_id}
                    league_id={this.state.leagues[i].league_id}
                    league_name={this.state.leagues[i].league_name}
                    date={api_date}>
                </League>
            );
        }

        return (
            <div className="App">
                <Header />
                <Date date={date}
                    onPrevClick={this.handleNavPrevClick}
                    onNextClick={this.handleNavNextClick} />
                {leagues}
            </div>
        );
    }
}

export default App;