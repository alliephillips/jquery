// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");
//
// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}

$(document).ready(function(){
	$("#useBilling").click(function(){
		if (this.checked){
			$("#home").val($("#billing").val());
			$("#home").attr("disabled", true);
			console.log("Same as billing")
		}
		else {
			$("#home").attr("disabled", false);
			$("#home").val("");
			console.log("Different address")
		}
	});
});
