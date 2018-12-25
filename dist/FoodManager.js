class foodManager {
    constructor() {
        this.RestaurantData = []
        this.OrganizationData = []
    }
    async getSite(userName){
        let data = await $.get(`/orgData/${userName}`)
        if(userName === userName) {
                
        }
    }
    async getRestData(restName) {
        let data = await $.get(`/restData/${restName}`)
        this.RestaurantData=data
    }
    async getOrgData(orgName) {
        let data = await $.get(`/orgData/${orgName}`)
        this.OrganizationData = data
    }
    inputResData(food) {
        $.post(`/restData`, food, function (res) {
            if(res){
                alert(`Saved`)
                this.RestaurantData.push(food)
            }
            else if(err){
                alert(`There was an error!`)
            }
        })
    }
    updateFood(foodId) {
        $.post(`/foodData`, foodId, function (res) {
            if(res){
                alert(`Saved`)
                this.OrganizationData.push(food)
            }
            else if(err){
                alert(`There was an error!`)
            }
        })
    }
    
}