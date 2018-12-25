class Renderer {
    renderRest(users) {
        $("body").empty()
        let source = $("#rest-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(users)
        $("#restaurants-append").append(newHTML)
    }
    renderOrg(user){
        $("body").empty()
        let source = $("#org-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(users)
        $("#org-append").append(newHTML)
    }
    
}

