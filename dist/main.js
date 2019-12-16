const source = $(`#roster-template`).html()
const template = Handlebars.compile(source)

const render = function (roster) {
    $(`#roster`).empty()
    let newHTML = template({ player: roster })
    $(`#roster`).append(newHTML)
}

const fetch = function () {
    let input = $(`#input`).val()
    $.get(`/teams/${input}`, function (response) {
        render(response)
    })
}

const setDefaultImg = function (img) {
    img.src = 'https://p7.hiclipart.com/preview/729/435/787/basketball-sport-silhouette-clip-art-nba-players.jpg'
}