class foodManager {
    constructor() {
        this.userData = []
    }

    async login(userName) {
        let data = await $.get(`/userData/${userName}`)
        this.userData = data
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
        $.post(`/foodData`, foodId, function (res) {
            this.OrganizationData.push()
            })}

        }