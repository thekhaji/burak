console.log("Products frontend javascript file");

$(function(){
    $(".product-collection").on("change", ()=>{
        const selectedValue = $(".product-collection").val();
        if (selectedValue === "DRINK"){
            $("#product-collection").hide();
            $("#product-volume").show();
        }
        else{
            $("#product-collection").show();
            $("#product-volume").hide();
        }
    })
    $("#process-btn").on("click", ()=>{
        $(".dish-container").slideToggle(500);
        $("#process-btn").css("display", "none");
    });
    $("#cancel-btn").on("click", ()=>{
        $(".dish-container").slideToggle(100);
        $("#process-btn").css("display", "flex");
    });

    $(".new-product-status").on("change", async function(e){
        const id = e.target.id;
        const productStatus = $(`#${id}.new-product-status`).val();
        console.log("id:",id);
        console.log("productStatus:", productStatus);

        try{
            const response = await axios.post(`/admin/product/${id}`, {productStatus: productStatus}) ;
            console.log("response:", response);
            const result = response.data;
            if(result.data){
                console.log("Product updated!");
                $(".new-product-status").blur();
            }else  alert("Prodcut update failed!");
        }
        catch(err){
            console.log(err);
            alert("Prodcut update failed!");
        }
    });



});



function validateForm(){
    const productName = $(".product-name").val();
    const productStatus = $(".product-status").val();
    const productPrice = $(".product-price").val();
    const productLeftCount = $(".product-left-count").val();
    const productCollection = $(".product-collection").val();
    // const productSize = $(".product-size").val();
    // const productVolume = $(".product-volume").val();
    const productDesc = $(".product-desc").val();
    
    if (
        productName === "" || 
        productPrice === "" || 
        productLeftCount === "" || 
        productCollection === "" ||
        productDesc === "" ||
        productStatus === ""
    ){
        alert("Please insert all the required fields!");
        return false;
    }
    else{
        return true;
    }

}

function previewFileHandler(input, order){
    console.log("input:", input);
    const imgClassName = input.className ;
    console.log("imgClassName:", imgClassName); 

    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType = file["type"];
    const validImageType = ["image/jpg", "image/jpeg", "image/png"];

    if (!validImageType.includes(fileType)){
        alert("Please insert only jpeg, jpg and png formats!");
    }
    else{
        if(file){

            const reader = new FileReader();
            reader.onload = function(){
                $(`#image-section-${order}`).attr("src", reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

}   