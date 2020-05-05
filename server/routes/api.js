const express = require('express')
const router = express.Router()
const urllib = require('urllib')

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

const json = {
    data: {}
}



urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', (err, res) => {
    const result = JSON.parse(res.toString())
    json.data = result.league.standard
})

router.get(`/teams/:teamName`, (req, res) => {
    const teamID = teamToIDs[req.params.teamName]

    const team = json.data
        .filter(p => p.teamId === teamID && p.isActive)
        .map(p => { return { firstName: p.firstName, lastName: p.lastName, jersey: p.jersey, pos: p.pos } })

    res.send(team)
})

module.exports = router


