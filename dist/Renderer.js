class Renderer {
    constructor(){}
    renderRest(name) {
        $("#login-page").empty()
        let source = $(`#rest-template`).html()
        let template = Handlebars.compile(source)
        let newHTML = template(name)
        $("#restaurants-append").append(newHTML)
    }
    renderOrg(users){
        $("#login-page").empty()
        let source = $("#org-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(users)
        $("#org-append").append(newHTML)
    }
    
}

