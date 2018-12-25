class Renderer {
    // renderRestaurant() {
    //     $("#restaurants-apend").empty()
    //     let source = $("#restaurants-template").html()
    //     let template = Handlebars.compile(source)
    //     let newHTML = template({  })
    //     $("#restaurants-append").append(newHTML)
    // }
    renderOrganization(foodInfo){
        $("#org-append").empty()
        let source = $("#organizations-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({foodInfo})
        $("#org-append").append(newHTML)
    }
    
}

