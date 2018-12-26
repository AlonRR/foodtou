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

const findAndRender = async function (userName) {
    let data = await foodManager.login(userName)
    if (data.type === `org`) {
        renderer.renderOrg(data)
    } else if (data.type === `rest`) {
        renderer.renderRest(data)
    }
}

// remove food from table and update boolean to false
$("body").on("click", ".req-input", function () {
    await foodManager.updateFoodRest($("#name").attr('data-id'))
    await foodManager.updateFood($("#name").attr('data-id'))
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
})

$(`body`).on(`click`, `#loginBtn`, async function () {
    console.log(`working btn`)
    let userName = $(`#username`).val()
    localStorage.setItem(`place`, userName)
    findAndRender(userName)
})
$(`body`).on(`click`, `#org-to-mainPage, .rest-to-mainPage`, function () {
    localStorage.clear()
    location = location
})
$(`body`).on(`click`, `#signup`, function () {
    renderer.renderSignup()
})

localStorageCheck()

$(`body`).on(`click`,`#signup-btn`,function(){
    let newUser= {
        name:$(`#name`).val(),
        password:$(`#password`).val(),
        location:$(`#location`).val(),
        type:$(`#type`).val(),
        boolean:true,
        food:[]
    }
    foodManager.saveUser(newUser)
})
localStorageCheck()
//signup-btn

