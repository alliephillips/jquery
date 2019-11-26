// ch3form.onsubmit = function() {
//     var fruit =
//     document.querySelectorAll('input[name="fruit"]')
//
//
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//
//     alert("You must pick a fruit!")
//     return false;
//
//
//
//
//
//     // Advanced Answer
//     // if(document.querySelector('input[name="fruit"]:checked'))
//     //     return true;
//
//     // alert("You must pick a fruit!")
//     // return false;
//   }

$(document).ready(function(){
  $("form").submit(function(event){
    if ($('input[name="fruit"]:checked').val()){
      return true;
    }
    else {
      alert("You must pick a fruit!")
      return false;
    }
  });
});
