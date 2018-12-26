let renderer = new Renderer()
let foodManager = new FoodManager()

const localStorageCheck = function(){
    let userName = localStorage.getItem(`place`)
    if(userName){
        findAndRender(userName)
    }
}
const findAndRender = async function(userName){
    let data = await foodManager.login(userName)
    localStorage.setItem(`place`, userName)
    if (data.type === `org`) {
        renderer.renderOrg(data)
    } else if (data.type === `rest`) {
        renderer.renderRest(data)
    }
}
// remove food from table and update boolean to false
$("body").on("click", ".req-input", async function () {
    await foodManager.updateFoodRest($("#name").attr('data-id'))
    await foodManager.updateFood($("#name").attr('data-id'))
    $(this).closest("#tableRow").remove()
    
    alert("Your food has been reserved!")
})
//send data to the food DB and remove row from view
$(`body`).on("click", '#restBtn', function () {
    let foodData = {
        name: $("#food").val(),
        expirationDate: $("#exp").val(),
        amount: $("#amount").val(),
        unit: $("#unit").val(),
        restaurant: foodManager.userData._id,
        organization: true
    }
    foodManager.inputRestData(foodData)
    console.log($(`input`).val())
})

$(`#loginBtn`).click(async function () {
    console.log(`working btn`)
    let data = await foodManager.login($(`#username`).val())
    if (data.type === `org`) {
        renderer.renderOrg(data)
    } else if (data.type === `rest`) {
        renderer.renderRest(data)
    }
    foodManager.inputRestData(foodData)
    console.log($(`input`).val())
})

$(`#loginBtn`).click(async function () {
    console.log(`working btn`)
    let userName = $(`#username`).val()
    findAndRender(userName)
})
localStorageCheck()
