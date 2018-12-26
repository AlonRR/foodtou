class FoodManager {
    constructor() {
        this.userData = {}
    }
    async login(userName) {
        let data = await $.get(`/site/${userName}`)
        this.userData = data
        return data
    }

    inputRestData(food) {
        $.post(`/food`, food, (res) => {
            if (res) {
                alert(`Saved`)
                this.userData.food.push(food)

            }
            else if (err) {
                alert(`There was an error!`)
            }
        })
    }
    updateFood(foodId) {
        $.ajax({
            url: `/food/${foodId}`,
            method: `put`,
            success: (res) => {
                return "success"
            }
        })
    }
    updateFoodRest(foodId) {
        $.get(`/foods/${foodId}`, function (restName) {
            alert(`Your food has been reserve! you can pick it up at ${restName}`)
        })
    }
}
