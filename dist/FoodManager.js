class foodManager {
    constructor() {
        this.RestaurantData = []
        this.OrganizationData = []
    }
    async getSite(userName) {
        let data = await $.get(`/site/${userName}`)
        if (data.type === `rest`) {
            this.RestaurantData = data.food
        } else if (data.type === `org`) {
            this.OrganizationData = data.food
        }
        return data
    }
    inputRestData(food) {
        $.post(`/food`, food, function (res, err) {
            if (res) {
                alert(`Saved`)
                this.RestaurantData.push(food)
            }
            else if (err) {
                alert(`There was an error!`)
            }
        })
    }
    updateFood(foodId) {
        $.ajax({
            url:`/food/${foodId}`
        })
        // $.post(`/foodData`, foodId, function (res,err) {
        //     if (res) {
        //         alert(`Saved`)
        //         this.OrganizationData.push(food)
        //     }
        //     else if (err) {
        //         alert(`There was an error!`)
        //     }
        // })
    }
}