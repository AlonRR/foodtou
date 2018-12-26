let renderer = new Renderer()
let FoodManager = new FoodManager()


    $("#restBtn").on("click", function () {
        let foodData = {
                name: $("#name").val(),
                expirationDate: $("#exp").val(),
                amount: $("#amount").val(),
                unit: $("#unit").val()
            }
        
            FoodManager.inputRestData(foodData)
            renderer.renderOrg(FoodManager)
        
           
        })

    
