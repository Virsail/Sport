$(document).ready(function() {
  $(".toggle").click(function() {
    $("#shown-design").toggle();
    $("#hidden-design").toggle();
  });
});
$(document).ready(function() {
  $(".toggle1").click(function() {
    $("#shown-development").toggle();
    $("#hidden-development").toggle();
  });
});
$(document).ready(function() {
  $(".toggle2").click(function() {
    $("#shown-product").toggle();
    $("#hidden-product").toggle();
  });
});
 
$(document).ready(function() {
  $(".cruiser").mouseover(function() {
    $("#j1").show()
  })
  $(".cruiser").mouseleave(function(){
    $("#j1").hide()
  })
  $(".cruiser1").mouseover(function() {
    $("#j2").show()
  })
  $(".cruiser1").mouseleave(function(){
    $("#j2").hide()
  })
  $(".cruiser2").mouseover(function() {
    $("#j3").show()
  })
  $(".cruiser2").mouseleave(function(){
    $("#j3").hide()
  })
  $(".cruiser3").mouseover(function() {
    $("#j4").show()
  })
  $(".cruiser3").mouseleave(function(){
    $("#j4").hide()
  })
  $(".cruiser4").mouseover(function() {
    $("#j5").show()
  })
  $(".cruiser4").mouseleave(function(){
    $("#j5").hide()
  })
  $(".cruiser5").mouseover(function() {
    $("#j6").show()
  })
  $(".cruiser5").mouseleave(function(){
    $("#j6").hide()
  })
  $(".cruiser6").mouseover(function() {
    $("#j7").show()
  })
  $(".cruiser6").mouseleave(function(){
    $("#j7").hide()
  })
  $(".cruiser7").mouseover(function() {
    $("#j8").show()
  })
  $(".cruiser7").mouseleave(function(){
    $("#j8").hide()
  })
})
$(document).ready(function(){
  $(".section6").submit(function(){
    alert("WE have received your message ,thank you for reaching out to i_Grocer");
  });
});



// function for showing add to cart button

$(document).ready(function(){
  $('.offer').mouseenter(function(){
      $(this).find('.icon').show('slow');
      $('.icon').css('background-color', 'crimson');
      $('.icon').mouseenter(function(){
          $('.icon').css('background-color', 'green')
      })
      // add this
      $('.icon').mouseleave(function(){
          $('.icon').css('background-color', 'crimson')
      })
      // ends here
  })
  $('.offer').mouseleave(function(){
      $(this).find('.icon').hide('slow');
  })

  $('.img-container').mouseenter(function(){
      $(this).find('.store').show('slow');
  })
  $('.img-container').mouseleave(function(){
      $(this).find('.store').hide('slow');
  })

  $('.icon').click(function(){
      alert("Item added to cart Continue Shopping success");
  })

  

})

//show cart

(function(){
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  cartInfo.addEventListener('click', function(){
      cart.classList.toggle('show-cart');
  })
})();

//add items to the cart

(function(){
  const cartBtn = document.querySelectorAll('.store-item-icon');

  cartBtn.forEach(function(btn){
      btn.addEventListener('click',function(event){
          // console.log(event.target);

          if(event.target.parentElement.classList.contains('store-item-icon')){
              let fullPath =
              event.target.parentElement.previousElementSibling.src;
              let pos = fullPath.indexOf('img') + 3;
              let partPath = fullPath.slice(pos);

              const item = {};
              item.img = `img-cart${partPath}`;
              let name = event.target.parentElement.parentElement.nextElementSibling
              .children[0].children[0].textContent;
              item.name = name;
              let price = event.target.parentElement.parentElement.nextElementSibling
              .children[0].children[1].textContent;
              let finalPrice = price.slice(1).trim();
              item.price = finalPrice;


const cartItem = document.createElement('div');
  cartItem.classList.add(
      "cart-item", 
      "d-flex", 
      "justify-content-between", 
      "text-capitalize", 
      "my-3");
  cartItem.innerHTML =`          
          <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
          <div class="cart-item-text">

            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
          </div>
          <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fas fa-trash"></i>
          </a>
        </div>`;
//select cart
const cart = document.getElementById('cart');
const total = document.querySelector('.cart-total-container');

cart.insertBefore(cartItem, total);
alert('item added to the cart');
showTotals();

          }
      })
  })

  //Show totals
  function showTotals(){
      const total = [];
      const items = document.querySelectorAll('.cart-item-price');

      items.forEach(function(item){
          total.push(parseFloat(item.textContent));
      })

      const totalMoney = total.reduce(function(total,item){
          total += item;
          return total;
      },0)
      const finalMoney = totalMoney.toFixed(2);

      document.getElementById('cart-total').textContent = finalMoney;
      document.querySelector('.item-total').textContent = finalMoney;
      document.getElementById('item-count').textContent = total.length;
  }
})();


//end of cart display section
  

//sale page totals summation


//function for first id ddselect//
function ddselect()
{
    var d=document.getElementById("ddselect");
    var displayText=d.options[d.selectedIndex].text;
    document.getElementById("textvalue").value=displayText;
}

//function for second id ddselect1//
function ddselect1()
{
    var d=document.getElementById("ddselect1");
    var displayText=d.options[d.selectedIndex].text;
    document.getElementById("textvalue1").value=displayText;
}

//object for grocery//
var grocer = {
    option: ["Veggie", "Fruit", "Herb"],
    quantity: ["200g", "450g", "500g", "900g"],
    toppings: ["pepperoni","mushrooms","onions", "sausage","bacon", "extra cheese"],
  };  

  //object for grocer prices,quantity and toppings//
  var grocerPrice = {
    option: ["Veggie = 800", "Fruit = 200", "Herb = 400"],
    quantity: ["200g = 400", "450g = 350", "500g = 300", "900g = 250"],
    toppings: ["pepperoni = 600", "mushrooms = 550", "onions = 500", "sausage = 450","bacon = 400", "extra cheese = 350"],
  };

  //consrtuctor for grocery//
  function grocer (option, quantity, toppings) {
    this.option = option;
    this.quantity = quantity;
    this.toppings = toppings;
  }

 // business logic//
function grocer (option, quantity, toppings) {
    this.option = option;
    this.quantity = quantity;
    this.toppings = toppings;
  }

  grocer.prototype.orderhistory = function() {
    return this.option + " " + this.quantity + " " + this.toppings
  }

  //constructor for pizza prices//
  function grocerPrice (option, quantity, toppings) {
    this.option = {0: 800, 1: 200, 2: 400};
    this.quantity = {0: 400, 1: 350, 2: 300, 3: 250};
    this.toppings = {0: 600, 1: 550, 2: 500, 3: 450, 4: 400, 5: 350};
  }

  //business logic//
  function grocerPrice (option, quantity, toppings) {
      this.option = {0: 800, 1: 200, 2: 400};
      this.quantity = {0: 400, 1: 350, 2: 300, 3: 250};
      this.toppings = {0: 600, 1: 550, 2: 500, 3: 450, 4: 400, 5: 350};
  }

  grocerPrice.prototype.calculatetotal = function() {
    return this.option + " " + this.quantity + " " + this.toppings
  }

  //function get order history//
  function getOrderHistory()
  {
  var d=document.getElementById("ddselect");
  var displayText=d.options[d.selectedIndex].text;
  document.getElementById("textvalue").value=displayText;

  var d=document.getElementById("ddselect1");
  var displayText=d.options[d.selectedIndex].text;
  document.getElementById("textvalue1").value=displayText;

  alert("Thank you for choosing i_Grocer ,order is being processed");
  }

  //function to check price//
  function checkPrice()
  {
    var option = document.getElementById("ddselect").value;

    if(option == "Veggie")
    {
      var price = 800
      document.getElementById("price").value=document.getElementById("quantity").value*price
    }
    else if(option == "Fruit")
    {
      var price = 200
      document.getElementById("price").value=document.getElementById("quantity").value*price
    }
    else if(option == "Herb")
    {
      var price = 400
      document.getElementById("price").value=document.getElementById("quantity").value*price
    }
  }

  //function to check delivery//
  $('input[type=checkbox]').prop('checked');//returns true if checked 

  //function to alert user about delivery fee//
  function checkDelivery()
  {
    var d=document.getElementById("ddselect");
  var displayText=d.options[d.selectedIndex].text;
  document.getElementById("textvalue").value=displayText;

  var d=document.getElementById("ddselect1");
  var displayText=d.options[d.selectedIndex].text;
  document.getElementById("textvalue1").value=displayText;

  alert("The delivery fee will be 150ksh Thank you!");
  prompt("Enter your location");
  alert("Awesome the order has been placed and will be delivered to the location given");
  }

  //checkout function//
  function checkOut() {
    window.history.back();
  }
