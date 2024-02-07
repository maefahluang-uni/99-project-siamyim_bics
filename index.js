var product =[{
    id: 1,
    img:'https://images.routledge.com/common/jackets/crclarge/978036757/9780367575038.jpg',
    name: 'Introduction to Software Engineering',
    status: 'Available',
    type: 'Book',
},{
    id: 2,
    img:'https://www.altcademy.com/blog/content/images/2022/07/51OFUgJAdaL._SX402_BO1-204-203-200_.jpg',
    name:' Modern Software Engineering',
    status: 'Unavailable',
    type: 'Book',
},{
    id: 3,
    img: 'https://www.altcademy.com/blog/content/images/2022/07/image-7.png',
    name:'The Pragmatic Programmer: From Journeyman to Master',
    status: 'Available',
    type: 'Book',
},{
    id: 4,
    img: 'https://tse3.mm.bing.net/th?id=OIP.Squ3GYchC4iOO-X9FFk4pgHaMs&pid=Api&P=0&h=180',
    name:'Pen',
    status: 'Available',
    type: 'Other',
}];
$(document).ready(() => {
    var html = '';
    for (let i=0; i<product.length; i++){
        html+= `<div onclick="openProductDetail(${i})" class="product ${product[i].type} ">
                <div class="status-item"><h1>${product[i].status}</h1></div>
                <img class="product-img" src="${product[i].img}" alt="">
                <p style="font-size: 1.2vw;">${product[i].name}</p>
                
                </div>` ;
    }
    $("#item-list").html(html);
})

function searchsomething(elem) {
    var value = $('#' + elem.id).val().toLowerCase(); // แปลงเป็นตัวพิมพ์เล็ก

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if (product[i].name.toLowerCase().includes(value)) { // แปลงเป็นตัวพิมพ์เล็ก
            html += `<div onclick="openProductDetail(${i})" class="product ${product[i].type} ">
                    <div class="status-item"><h1>${product[i].status}</h1></div>
                    <img class="product-img" src="${product[i].img}" alt="">
                    <pstyle="font-size: 1.2vw;">${product[i].name}</p>
                    <pstyle="font-size: 1.2vw;">${product[i].type}</p>
                    </div>`;
        }
    }
    if(html == '') {
        $("#item-list").html(`<p>Not found product</p>`);
    } else {
        $("#item-list").html(html);
    }
}
function searchproduct(param) {
    console.log(param)
    $(".product").css('display', 'none')
    if(param == 'All') {
        $(".product").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}
var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display', 'flex')
    $("#mdd-img").attr('src', product[index].img);
    $("#mdd-name").text(product[index].name)
    $("#mdd-status").text(product[index].status)
    $("#mdd-desc").text(product[index].type)
}

function closeModal() {
    $(".modal").css('display','none')
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if( productindex == cart[i].index ) {
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            status: product[productindex].status,
            img: product[productindex].img,
            type: product[productindex].type,
            count: 1
        };
        // console.log(obj)
        cart.push(obj)
    }
    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productindex].name + ' to shelf !'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function openCart() {
    $('#modalCart').css('display','flex')
    rendercart();
}

function rendercart() {
    if(cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="">
                            <div class="cartlist-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${(cart[i].type) }</p>
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html)
    }
    else {
        $("#mycart").html(`<p>Not found product list</p>`)
    }
}

function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) => {
                  if(res.isConfirmed) {
                     cart.splice(index, 1) 
                     console.log(cart)
                     rendercart();
                     $("#cartcount").css('display','flex').text(cart.length)
                     
                     if(cart.length <= 0) {
                        $("#cartcount").css('display','none')
                     }
                  }  
                  else {
                    cart[index].count++;
                    $("#countitems"+index).text(cart[index].count)
                    rendercart();
                  }
                })
            }
            rendercart();
        }
        
    }
    else if(action == '+') {
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
        rendercart();
    }
}