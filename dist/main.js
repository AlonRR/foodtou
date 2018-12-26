let renderer = new Renderer()
let foodManager = new FoodManager()

// remove food from table and update boolean to false
$("body").on("click", ".checkbox", function(){
    $(this).siblings("#food").remove("#food-table")
    foodManager.updateFood($(this).siblings("#food").attr('data-id'))
})
//send data to the food DB and remove row from view
$(`body`).on("click", '#restBtn', function () {
    let foodData = {
            name: $("#name").val(),
            expirationDate: $("#exp").val(),
            amount: $("#amount").val(),
            unit: $("#unit").val()
        }
        foodManager.inputRestData(foodData)
        console.log( $(`input`).val())
        
    })



$(`#orgBtn`).click(async function(){
    console.log(`working btn`)
    let data = await foodManager.login($(`#username`).val())
    if(data.type===`org`){
        renderer.renderOrg(data)
    } else if(data.type === `rest`){
        renderer.renderRest(data)
    }
})