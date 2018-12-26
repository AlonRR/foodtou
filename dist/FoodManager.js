class foodManager {
    constructor() {
        this.userData = []
    }
    async login(userName) {
        let data = await $.get(`/site/${userName}`)
        this.userData = data
        console.log(this.userData)
    }
    async inputRestData(food) {
        let data = await $.get('/foodData/')
        $.post(`/foodData`, food, function (res) {
            if (res) {
                alert(`Saved`)
                this.userData.push(food)
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
            success: (res)
        })
    }
}