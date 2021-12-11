function updateCartTotal(){
var cartItemContainer=document.getElementsByClassName(btn-removefromcart)
console.log (removefromcartbutton)
for(i=0;i<removefromcartbuttons.length; i++){
    var button=removefromcartbutton[i]
button.addEventListener('click',function(event){
    var buttonclicked=event.target
    buttonclicked.parentElement.parentElement.remove()
    updateCartTotal()
  })
}


function updateCartTotal(){
   var cartItemContainer=document.getElementsByClassName("btn-addtocart")[0]
   console.log (addtocartbutton)
for(i=0;i<addtocartbutton.length; i++){
    var button=addToCartbuttons[i]
	button.addEventListener('click',function(event){
    var buttonclicked=event.target
    buttonclicked.parentElement.parentElement.add()
    updateCartTotal()
  })
}
    

function addToCartClicked(){
	var cartItemContainer=document.getElementsByClassName("shopItemdetails")[0]
	console.log (shopItemdetailsbutton)
for(i=0;i<addtocartbutton.length; i++){
    var button=shopItemdetailsbuttons[i]
	var image =document.getElementsByClassName("shopItemimage")[0]
	button.addEventListener('click',function(event){
    var buttonclicked=event.target
    buttonclicked.parentElement.parentElement.add()
    showshopItems()
  })
}


function purchaseclicked(){}
var cartItems=getElementsByClassName("shopItemdetails")[0]
alert("Thank you for shopping with us")
button.addEventListener('click',function(event){
    var buttonclicked=event.target
    buttonclicked.parentElement.parentElement.update()
updateCarttotal()
  })
}


function updateCartTotal(){}
cartItemContainer.getElementsByClassName("cart items")
var cartRows=CartItemContainer.getElementsByClassName("cart row")[0]
var cartRows=CartItemContainer.getElementsByClassName("cart items")[0]
var total=[0]
for (i=0;i<cartRows.length; i++){
    var cartRow=cartRows[i]
    var priceElement=cartRow.getElementsByClassName("Cart Price")[0]
    var quantityElement=cartRow.getElementsByClassName("Cart-Quantity-Input")[0]
	[0]
	var quantity=quantityElement.value
    Total =total + (price* quantity)
	showCarttotal()
  
}
}


 
}