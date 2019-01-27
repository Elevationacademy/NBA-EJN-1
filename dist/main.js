const source = $(`#roster-template`).html()
const template = Handlebars.compile(source)

const render = function(roster){
    $(`#roster`).empty()
    let newHTML = template({player: roster})
    $(`#roster`).append(newHTML)
}

const fetch = function(){
    let input = $(`#input`).val()
$.get(`/teams/${input}`, function(response){
    render(response)
})
}

