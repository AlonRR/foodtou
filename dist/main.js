let renderer = new Renderer()
let foodManager = new FoodManager()


$("#restBtn").on("click", function () {
    let data = {
        name: $("#name").val(),
        expirationDate: $("#exp").val(),
        amount: $("#amount").val(),
        unit: $("#unit").val()
    }

    this.OrganizationData.
        tempManager.getCityData($('#input').val())
    renderer.renderData(tempManager.cityData)
})

// remove food from table and update boolean to false
$("body").on("click", ".checkbox", function(){
    $(this).siblings("#food").remove("#food-table")
    foodManager.updateFood($(this).siblings("#food").attr('data-id'))
})