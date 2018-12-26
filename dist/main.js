let renderer = new Renderer()
let foodManager = new FoodManager()



$("#restBtn").on("click", function () {
    let foodData = {
        name: $("#name").val(),
        expirationDate: $("#exp").val(),
        amount: $("#amount").val(),
        unit: $("#unit").val()
    }
    foodManager.inputRestData(foodData)
    renderer.renderOrg(foodManager)

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
