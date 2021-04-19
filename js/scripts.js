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
      swal("Item added to cart", "Continue Shopping", "success");
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
  