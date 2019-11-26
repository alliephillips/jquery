// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }

$(document).ready(function(){
  $("form").submit(function(event){
    var validInput = true;
    if ($("#fullname").val().length == 0){
      $("#nameerrormsg").css("display", "block");
      event.preventDefault()
    }
    else {
      $("#nameerrormsg").css("display", "none");
    }
    if ($("#streetaddr").val().length == 0){
      $("#addrerrormsg").css("display", "block");
      event.preventDefault()
    }
    else {
      $("#addrerrormsg").css("display", "none");
    }
    return validInput;
  })
})



//event.preventDefault
