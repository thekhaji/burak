

console.log("Users frontend javascript file");
$(function(){
    $(".member-status").on("change", function(e){
        const  id = e.target.id;
        console.log("id:", id);

        const memberStatus = $(`#${id}.member-status`).val();
        console.log("memberStatus:", memberStatus);

        axios
            .post("/admin//user/edit", {
                _id: id, 
                memberStatus: memberStatus
            })
            .then((response)=>{
                console.log("response:", response);
                const result = response.data;
                console.log("data:", result.data);

                if(result.data){
                    console.log("User updated!");
                    $(".member-status").blur();
                }
                 
            })
            .catch((err)=>{
                console.log(err);
                alert("User update failed!");
            });
    })
    
});