class FoodManager {
    constructor() {
        this.userData = {}
    }
    async login(userName) {
        let data = await $.get(`/site/${userName}`)
        this.userData = data
        console.log(data)
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
            alert(`Your food has been reserved! You can pick it up at ${restName}.`)
        })
    }
    async saveUser(userData){
        await $.post(`/site`,userData,function(err,res){
            console.log(`${res} ${err}`)
            if(res===`saved`){
                alert(`Saved`)
            } else{
                console.log(err[0])
                return err
            }
        })
    }
}
