let renderer = new Renderer()
let foodManager = new FoodManager()

const localStorageCheck = function () {
    let userName = localStorage.getItem(`place`)
    if (userName) {
        findAndRender(userName)
    }
    else {
        renderer.renderLogin()
    }
}

$(`body`).on(`click`, `#loginBtn`, async function () {
    console.log(`working btn`)
    let userName = $(`#username`).val()
    await findAndRender(userName)
})
const findAndRender = async function (userName) {
    let userData = $(`#username`).val()
    let storage = localStorage.getItem(`place`)
    let data = await foodManager.login(userName)
    if (data.type === `org` && foodManager.userData.password === $("#password").val()) {
        localStorage.setItem(`place`, userData)
        renderer.renderOrg(data)
    } else if (data.type === `rest` && foodManager.userData.password === $("#password").val()) {
        localStorage.setItem(`place`, userData)
        renderer.renderRest(data)
    }
    else if (data.type === 'org' && storage) {
        renderer.renderOrg(data)
    } else if (data.type === `rest` && storage) {
        renderer.renderRest(data)
    }
    else {
        localStorage.clear()
        // location = location
        alert('your username/password is incorrect, please try agaain')
    }
}

// remove food from table and update boolean to false
$("body").on("click", ".req-input", async function () {
    await foodManager.updateFoodRest($(this).closest("#tableRow").find("#name").data().id)
    await foodManager.updateFood($(this).closest("#tableRow").find("#name").data().id)
    $(this).closest("#tableRow").remove()
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
    localStorage.clear()
})

$(`body`).on(`click`, `#org-to-mainPage, .rest-to-mainPage`, function () {
    localStorage.clear()
    location = location
})
$(`body`).on(`click`, `#signup`, function () {
    renderer.renderSignup()
})

localStorageCheck()
$(`body`).on(`click`, `#signup-btn`, async function () {
    let newUser = {
        name: $(`#name`).val(),
        password: $(`#password`).val(),
        location: $(`#location`).val(),
        type: $(`#type`).val(),
        boolean: true,
        food: []
    }
    let check = await foodManager.saveUser(newUser)
    if (check) {
        alert(check)
    } else {
        renderer.renderLogin()
    }
})

//signup-btn

