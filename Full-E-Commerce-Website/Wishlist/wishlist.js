const cartButtons = document.querySelectorAll(".cartBtn");

cartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});


const cartCount = document.querySelectorAll('.count')[1];
let cartNumber = 0;


const addToCartButtons = document.querySelectorAll('.btn-add-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('in-cart')) {
            cartNumber++;
            cartCount.textContent = cartNumber;
            button.classList.add('in-cart');
            button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Remove from Cart`;
            button.style.backgroundColor = "transparent";
            button.style.color = "black";
        } else {
            cartNumber--;
            cartCount.textContent = cartNumber;
            button.classList.remove('in-cart');
            button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add To Cart`;
            button.style.backgroundColor = "black";
            button.style.color = "white";
        }
    });
});




const deleteIcons = document.querySelectorAll('.delete-icon');

deleteIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const card = icon.closest('.card');
        card.remove();
    });
});

