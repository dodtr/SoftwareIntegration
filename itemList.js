const array = JSON.parse(sessionStorage.getItem("orderList"));
const itemList = document.getElementById("itemList");
const totalCostText = document.getElementById("totalCost");
const checkoutButton = document.getElementById("checkoutButton");

for(var i = 0; i < array.length; i++) {
    render(array[i].src, array[i].name, array[i]. price)
}

console.log(array);
var sum = calcTotalCost();
console.log(sum);

checkoutButton.addEventListener("click", () => {
    sessionStorage.clear();
})

function render(src, name, price) {
    const item = document.createElement("div");
    const image = document.createElement("img");
    image.src = src;
    const text= document.createElement("p");
    const priceText = document.createElement("p");
    text.innerText = name;
    priceText.innerText = "$" + price;
    item.appendChild(image);
    item.appendChild(text);
    item.appendChild(priceText);
    itemList.appendChild(item);
}

function calcTotalCost() {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i].price;
    }
    totalCostText.innerText = "$" + sum;
    return sum;
}