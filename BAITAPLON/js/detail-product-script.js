// Danh sách sản phẩm
const products = [{
    id: 1,
    name: "Xe Đạp Thể Thao X1",
    price: "2,500,000 VNĐ",
    description: "Xe đạp thể thao nhẹ nhàng, khung nhôm chắc chắn.",
    image: "../images/image1.jpg"
}, {
    id: 2,
    name: "Xe Đạp Địa Hình X2",
    price: "3,200,000 VNĐ",
    description: "Xe đạp địa hình với bánh xe lớn, phù hợp cho những chuyến đi xa.",
    image: "../images/image2.jpg"
}, {
    id: 3,
    name: "Xe Đạp Mini X3",
    price: "1,800,000 VNĐ",
    description: "Xe đạp mini gọn nhẹ, dễ dàng di chuyển.",
    image: "../images/image3.jpg"
}, {
    id: 4,
    name: "Xe Đạp Điện X4",
    price: "5,000,000 VNĐ",
    description: "Xe đạp điện tiết kiệm năng lượng, đi xa hơn với ít sức lực.",
    image: "../images/image4.jpg"
}, {
    id: 5,
    name: "Xe Đạp Thời Trang X5",
    price: "2,000,000 VNĐ",
    description: "Xe đạp thiết kế đẹp mắt, màu sắc đa dạng.",
    image: "../images/image5.jpg"
}, {
    id: 6,
    name: "Xe Đạp Gấp X6",
    price: "2,700,000 VNĐ",
    description: "Xe đạp gấp tiện lợi, dễ dàng mang theo.",
    image: "../images/image6.jpg"
}, {
    id: 7,
    name: "Xe Đạp Đường Phố X7",
    price: "1,900,000 VNĐ",
    description: "Xe đạp đường phố với thiết kế hiện đại.",
    image: "../images/image7.jpg"
}, ];

// Lấy ID sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Tìm sản phẩm tương ứng với ID
const product = products.find(p => p.id == productId);
if (product) {
    document.getElementById('productName').innerText = product.name;
    document.getElementById('productPrice').innerText = `Giá: ${product.price}`;
    document.getElementById('productDescription').innerText = product.description;
    document.getElementById('productImage').src = product.image;
} else {
    document.getElementById('productName').innerText = "Sản phẩm không tồn tại.";
}

document.getElementById('addToCartBtn').addEventListener('click', () => {
    const productName = document.getElementById('productName').innerText;
    const price = parseInt(document.getElementById('productPrice').innerText.replace('Giá: ', '').replace(' VNĐ', ''));
    const quantity = parseInt(document.getElementById('quantity').value);

    // Thêm sản phẩm vào giỏ hàng
    addToCart(productName, price, quantity);
});

function addToCart(productName, price, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex > -1) {
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng
        cart[existingProductIndex].quantity += quantity;
    } else {
        // Thêm sản phẩm mới vào giỏ
        cart.push({
            name: productName,
            price: price,
            quantity: quantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} đã được thêm vào giỏ hàng!`);
}