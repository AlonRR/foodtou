class foodManager {
    constructor() {
        this.RestaurantData = []
        this.OrganizationData = []
    }
    async getRestaurantData() {
        let data = await $.get(`/resData`)
        this.RestaurantData=data
    }
    async getOrgData() {
        let data = await $.get(`/orgdata`)
        this.OrganizationData = data
    }
    inputResData(food) {
        $.post(`/resData`, food, function (res) {
            if(res){
                alert(`Saved`)
                this.RestaurantData.push(food)
            }
            else if(err){
                alert(`There was an error!`)
            }
        })
    }
    inputOrgData(food) {
        $.post(`/resData`, food, function (res) {
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