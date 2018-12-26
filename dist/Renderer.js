class Renderer {
    constructor(){}
    render(type,name){
        $(`div`).empty()
        let source = $(`#${type}-template`).html()
        let template = Handlebars.compile(source)
        let newHTML = template(name)
        $(`#${type}-append`).append(newHTML)
    }
    renderRest(name) {
        this.render(`rest`,name)
    }
    renderOrg(users){
        this.render(`org`,users)
    }
    renderLogin(){
        this.render(`login`)        
    }
}

