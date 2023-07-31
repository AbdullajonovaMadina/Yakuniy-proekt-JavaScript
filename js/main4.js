let user = [
    {
        id: "00001",
        login: "12345",
        password: "12345",
        userName: "Madina"
    }
]
$(document).ready(function (){
    let kirishSoni = 0;
    $("#startModal").modal("show");
    $("#startBtn").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        if(login !="" && password !=""){
            let topildi = false;
            user.forEach(function (item){
                if (login == item.login){
                    if (password == item.password){
                        $("#workingBlock").toggleClass("d-none");
                        $("#kassir").html(item.userName);
                        $("#startModal").modal("hide");
                        topildi =true;
                    }
                }
            });
            if (!topildi){
                if (kirishSoni >= 2){
                    $("#startModal").modal("hide");
                    alert("Tizim bloklandi!");
                }
                alert("Login yoki parol xato!");
                kirishSoni++;
            }
        }else{
            alert("Login va parol qatorlarini to'ldiring!")
        }
    });
})