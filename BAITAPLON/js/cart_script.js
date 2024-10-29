function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function renderCartItems() {
    const cart = getCart();
    const cartItemsContainer = $("#cartItems");
    cartItemsContainer.empty();
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItemsContainer.append(`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.price.toLocaleString()} VNĐ</td>
                        <td>${item.quantity}</td>
                        <td>${itemTotal.toLocaleString()} VNĐ</td>
                        <td><button class="btn btn-danger btn-sm" onclick="removeItem('${item.name}')">Xóa</button></td>
                    </tr>
                `);
    });

    $("#totalAmount").text(`Tổng Cộng: ${total.toLocaleString()} VNĐ`);
}

function removeItem(name) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    renderCartItems();
}

$(document).ready(() => {
    renderCartItems();

    $("#checkoutBtn").click(() => {
        window.location.href = "#"; // Chuyển đến trang thanh toán
    });
});