import React, { Component } from 'react'
import { connect } from 'react-redux';

export class ScoreBoard extends Component {
    render() {
        return (
            <div>
                <h2>Scoreboard v2: Electric Boogaloo</h2>
                <span>{this.props.score}</span><br />
                <span>Player 1: {this.props.players[0].name}</span><br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(ScoreBoard)
