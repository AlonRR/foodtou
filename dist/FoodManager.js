class FoodManager {
    constructor() {
        this.userData = []
    }
    async login(userName) {
        let data = await $.get(`/site/${userName}`)
        this.userData = data
        return data
    }
    async inputRestData(food) {
        $.post(`/food`, food, function (res) {
            if (res) {
                this.userData.push(food)
                alert(`Saved`)
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
}
