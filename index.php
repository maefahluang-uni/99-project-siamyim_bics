<?php
session_start();
include("config.php");
?>
<!DOCTYPE html>
<html lang="en">
  
<head>
  
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SE LAB</title>
    
    <link rel="stylesheet" href="css/index.css">
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="index.js"> </script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>

    <nav>
        <div class="nav-container">
            <div class="nav-tai"> 
            <a href="index.html">
                <img src="imgs/Screenshot_2023-10-17_231045-removebg-preview 1.svg" class="logonav">
            </a>
            <p class="nav-proname">SE LAB</p>
            </div>
            <div class="nav-con">
                <div class="nav-menu">
                    <div onclick="openCart()" style="cursor: pointer;" class="nav-profile-cart">
                        <i class="fas fa-cart-shopping"></i>
                        <div id="cartcount" class="cartcount" style="display: none;">
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="sidebar">
                <input onkeyup="searchsomething(this)" id="txt_search" type="text" class="side-search" placeholder="Search someting">
            <a onclick="searchproduct('All')" class="sidebar-items">
                All
              </a>
              <a onclick="searchproduct('Book')" class="sidebar-items">
                Book
              </a>
              <a onclick="searchproduct('Other')" class="sidebar-items">
                Other
              </a>
        </div>
        <div id="item-list"class="item">
            
        </div>
    </div>
    <div id="modalDesc" class="modal"style="display: none;" >//style="display: none;"
        <div onclick="closeModal()" class="modal-bg"></div>
        <div class="modal-page">
          <h2>Detail</h2>
          <br>
          <div class="modaldesc-content">
            <img id="mdd-img" class="modaldesc-img" src="https://images.routledge.com/common/jackets/crclarge/978036757/9780367575038.jpg" alt="">
            <div class="modaldesc-detail">
              <p id="mdd-name" style="font-size: 1.5vw;">Introduction to Software Engineering</p>
              <p id="mdd-status" style="font-size: 1.2vw;"></p>
              <br>
              <p id="mdd-desc" style="color: #adadad;">Lorem iaudantium harum doloremque alias. Quae, vel ipsum quasi, voluptas, sit optio nemo magni numquam non dicta voluptates porro! Vero eveniet numquam sit aut vel eligendi officiis iste tenetur expedita. Delectus vero quibusdam adipisci in. Esse.</p>
              <br>
              <div class="btn-control">
                <button onclick="closeModal()" class="btn">
                  Close
                </button>
                <button onclick="addtocart()" class="btn btn-buy">
                  Borrow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="modalCart" class="modal" style="display: none;">
        <div onclick="closeModal()" class="modal-bg"></div>
        <div class="modal-page">
          <h2>My shelf</h2>
          <br>
          <div id="mycart" class="cartlist">
    
          </div>
          <div class="btn-control">
            <button onclick="closeModal()" class="btn">
              Cancel
            </button>
            <button class="btn btn-buy">
              Done
            </button>
          </div>
        </div>
      </div>
</body>
</html>