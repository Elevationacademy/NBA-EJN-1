const express = require('express')
const router = express.Router()
const request = require('request')

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

const json = {
    data: {}
}

request('http://data.nba.net/10s/prod/v1/2018/players.json', (err, res) => {
    json.data = JSON.parse(res.body).league.standard
})

router.get(`/teams/:teamName`, (req, res) => {
    let teamID = teamToIDs[req.params.teamName]
    console.log(req.params.teamName)
    let team = json.data
        .filter(d => d.teamId === teamID && d.isActive)
        .map(d => { return { firstName: d.firstName, lastName: d.lastName, jersey: d.jersey, pos: d.pos } })
        .filter(d => !["5", "00", "0", "55", "32", "10"].includes(d.jersey))
    console.log(team)
    res.send(team)
})




module.exports = router