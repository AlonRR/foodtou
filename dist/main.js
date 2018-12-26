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
            renderer.renderOrg(FoodManager)
        
        })

    
