const source = $(`#roster-template`).html()
const template = Handlebars.compile(source)

const render = function (roster) {
    const newHTML = template({ roster })
    $(`#roster`).empty().append(newHTML)
}

const fetch = function () {
    const input = $(`#input`).val().toLowerCase()
    $.get(`/api/teams/${input}`, function (response) {
        render(response)
    })
}

const setDefaultImg = function (img) {
    img.src = 'https://p7.hiclipart.com/preview/729/435/787/basketball-sport-silhouette-clip-art-nba-players.jpg'
}