var subtotalString= document.getElementById('subtotal').innerText;
var subtotal= parseFloat(subtotalString);
var orderNotification=document.getElementById("replace-heading")

function count(plusKeyId, minusKeyId, productId, item_price_Id){


   const minusBtn = document.getElementById(minusKeyId);
   const plusBtn = document.getElementById(plusKeyId);


   var valString = document.getElementById(productId).value;
   var priceString= document.getElementById(item_price_Id).innerText;
   var val= parseInt(valString);
   var price=parseFloat(priceString);

   
  
   minusBtn.addEventListener('click', function(){
      if(val>0){
         val = val - 1;
         subtotal=subtotal-price;
         calc(val, subtotal,productId,item_price_Id)
      }
   });
   
   
 
   plusBtn.addEventListener('click', function(){
      val = val + 1;
      subtotal=subtotal+price;
      calc(val, subtotal,productId,item_price_Id)
   });


   function calc(val, subtotal,productId,item_price_Id){
      var totalPrice = val*price;
      var tax= 2*subtotal/100;
      var total= subtotal+tax;
      document.getElementById(productId).value = val;
      document.getElementById(item_price_Id).innerText = totalPrice;
      document.getElementById('subtotal').innerText= subtotal;
      document.getElementById('tax').innerText= tax;
      document.getElementById('total').innerText= total;
   }
}


count('phone-plus', 'phone-minus', 'phone-value', 'phone-price');
count('case-plus', 'case-minus', 'case-value', 'case-price');

var check=document.getElementById("checkout");
check.addEventListener("click", function(){
   document.getElementById('body').style.display="none";
   document.getElementById('replace-heading').style.display="block";
})
