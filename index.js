import { menuArray } from "./data"

let mainEl = document.getElementById("main")
let products = document.getElementById("product")
let orderProductEl = document.getElementById("orderProduct")
let formEl = document.getElementById("form")
let completeOrderBtnEl = document.getElementById("completeOrderBtn")
let modelEl = document.getElementById("model")
let userNameEl = document.getElementById("userName")
let orderArray = []



document.addEventListener("click", (e) => {
    // console.log(e.target.dataset.add)
    if (e.target.dataset.add) {
        OrderProduct(e.target.dataset.add)

        if (orderArray) {
            orderProductRender()
        }
    }
    else if (e.target.dataset.remove) {
        removeOrder(e.target.dataset.remove)
    }
    else if (e.target.id == "completeOrderBtn" && orderArray) {
        completeOrderClick()
    }
    else if (e.target.id == "star1") {
        document.getElementById("star1").classList.remove("feedbackColor")
    }
    else if (e.target.id == "star2") {
        document.getElementById("star1").classList.remove("feedbackColor")
        document.getElementById("star2").classList.remove("feedbackColor")
    }
    else if (e.target.id == "star3") {
        document.getElementById("star1").classList.remove("feedbackColor")
        document.getElementById("star2").classList.remove("feedbackColor")
        document.getElementById("star3").classList.remove("feedbackColor")
    }
    else if (e.target.id == "star4") {
        document.getElementById("star1").classList.remove("feedbackColor")
        document.getElementById("star2").classList.remove("feedbackColor")
        document.getElementById("star3").classList.remove("feedbackColor")
        document.getElementById("star4").classList.remove("feedbackColor")
    }
    else if (e.target.id == "star5") {
        document.getElementById("star1").classList.remove("feedbackColor")
        document.getElementById("star2").classList.remove("feedbackColor")
        document.getElementById("star3").classList.remove("feedbackColor")
        document.getElementById("star4").classList.remove("feedbackColor")
        document.getElementById("star5").classList.remove("feedbackColor")
    }



})
function clean() {
    orderArray = []
}
formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    modelEl.style.display = "none"
    orderProductEl.innerHTML = `
    <div class="orderCompleted">
     <p>
     Thanks, <span class="userNameColor">${userNameEl.value}!</span> Your order is on its way!
     </p>
     
     <h4 style="text-align-center; margin:0;margin-bottom:5px;">Feedback !</h4>
        
       <i class="fa-solid fa-star feedback feedbackColor" id="star1"></i>
       <i class="fa-solid fa-star feedback feedbackColor" id="star2"></i>
       <i class="fa-solid fa-star feedback feedbackColor" id="star3"></i>
       <i class="fa-solid fa-star feedback feedbackColor" id="star4"></i>
       <i class="fa-solid fa-star feedback feedbackColor" id="star5"></i>
        
     </div>
     `




})

function completeOrderClick() {
    modelEl.style.display = "flex"
}

function removeOrder(id) {
    const index = orderArray.findIndex((remove) => remove.id == id)
    orderArray.splice(index, 1)
}

function orderProductRender() {
    let totalPrice = 0;
    let allorder = ''
    let totalPriceHtml = ''
    let orderHtml = "<h3 style='text-align:center;'>Your Order</h3>"
    let orderHtmlBtn = `<button class="completeOrder" id="completeOrderBtn">Complete Order </button>`

    orderArray.forEach((order) => {
        totalPrice += order.price
        allorder += `
            <div class="order">
                <h4>${order.name}</h4>
                <p class="remove-Btn" data-remove="${order.id}">remove</p>
                <p class="orderPrice">$${order.price}</p>
            </div>
            `
    })

    totalPriceHtml = `
        <div class="orderTotalPrice">
            <p>Total Price : </p>
            <p>$${totalPrice}</p>
        </div>
    `

    //order added render
    orderProductEl.innerHTML = orderHtml + allorder + totalPriceHtml + orderHtmlBtn
}

function OrderProduct(id) {
    orderArray.push(menuArray.filter(obj => obj.id == id)[0])
}

function render() {
    let menuHtml = ''
    menuArray.forEach((menu) => {
        menuHtml += `
        <div class="card">
			<div class="image">${menu.emoji}</div>
			<div class="card-details">
				<h3>${menu.name}</h3>
				<p>${menu.ingredients}</p>
				<p class="price">$${menu.price}</p>
			</div>
			<div class="card-added">
			    <i class="fa-solid fa-plus" data-add="${menu.id}"></i>
			</div>
	    </div>
        `
    })

    products.innerHTML = menuHtml
}
render()