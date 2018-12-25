class Renderer {
    renderRestaurant() {
        $("#restaurants-info").empty()
        let source = $("#restaurants-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({ allCityData })
        $("#restaurants-info").append(newHTML)
    }
    renderOrganization(){
        $("#organizations-info").empty()
        let source = $("#organizations-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({ allCityData })
        $("#organizations-info").append(newHTML)
    }
    
}

