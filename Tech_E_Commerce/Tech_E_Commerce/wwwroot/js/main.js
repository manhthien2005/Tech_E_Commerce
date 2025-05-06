// Main JavaScript file for GearVN Clone

document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("active")
        })
    }

    // Enhanced category menu
    const categoryItems = document.querySelectorAll(".category-item")

    categoryItems.forEach((item) => {
        // Create submenu container if it doesn't exist
        if (!item.querySelector(".submenu")) {
            const submenu = document.createElement("div")
            submenu.className = "submenu"
            item.appendChild(submenu)

            // Generate dynamic submenu content based on category
            const categoryName = item.querySelector("a").textContent.trim()
            generateSubmenuContent(submenu, categoryName)
        }
    })

    function generateSubmenuContent(submenu, categoryName) {
        // This function would typically fetch data from your backend
        // For now, we'll create static content based on the category name

        if (categoryName.includes("Laptop")) {
            submenu.innerHTML = `
        <div class="submenu-section">
          <h3 class="submenu-title">Thương hiệu</h3>
          <div class="submenu-links">
            <a href="#">ASUS</a>
            <a href="#">ACER</a>
            <a href="#">MSI</a>
            <a href="#">LENOVO</a>
            <a href="#">DELL</a>
            <a href="#">HP - Pavilion</a>
            <a href="#">LG - Gram</a>
          </div>
        </div>
        <div class="submenu-section">
          <h3 class="submenu-title">Giá bán</h3>
          <div class="submenu-links">
            <a href="#">Dưới 15 triệu</a>
            <a href="#">Từ 15 đến 20 triệu</a>
            <a href="#">Trên 20 triệu</a>
          </div>
        </div>
        <div class="submenu-section">
          <h3 class="submenu-title">CPU Intel - AMD</h3>
          <div class="submenu-links">
            <a href="#">Intel Core i3</a>
            <a href="#">Intel Core i5</a>
            <a href="#">Intel Core i7</a>
            <a href="#">AMD Ryzen</a>
          </div>
        </div>
        <div class="submenu-section">
          <h3 class="submenu-title">Nhu cầu sử dụng</h3>
          <div class="submenu-links">
            <a href="#">Đồ họa - Studio</a>
            <a href="#">Học sinh - Sinh viên</a>
            <a href="#">Mỏng nhẹ cao cấp</a>
          </div>
        </div>
        <div class="submenu-section">
          <h3 class="submenu-title">Linh phụ kiện Laptop</h3>
          <div class="submenu-links">
            <a href="#">Ram laptop</a>
            <a href="#">SSD laptop</a>
            <a href="#">Ổ cứng di động</a>
          </div>
        </div>
      `
        } else if (categoryName.includes("PC GVN")) {
            submenu.innerHTML = `
        <div class="submenu-section">
          <h3 class="submenu-title">Dòng máy</h3>
          <div class="submenu-links">
            <a href="#">PC Gaming</a>
            <a href="#">PC Đồ họa</a>
            <a href="#">PC Văn phòng</a>
            <a href="#">PC Mini</a>
          </div>
        </div>
        <div class="submenu-section">
          <h3 class="submenu-title">Giá bán</h3>
          <div class="submenu-links">
            <a href="#">Dưới 10 triệu</a>
            <a href="#">Từ 10 đến 20 triệu</a>
            <a href="#">Từ 20 đến 30 triệu</a>
            <a href="#">Trên 30 triệu</a>
          </div>
        </div>
        <div class="submenu-section">
          <h3 class="submenu-title">CPU</h3>
          <div class="submenu-links">
            <a href="#">Intel Core i3</a>
            <a href="#">Intel Core i5</a>
            <a href="#">Intel Core i7</a>
            <a href="#">Intel Core i9</a>
            <a href="#">AMD Ryzen 5</a>
            <a href="#">AMD Ryzen 7</a>
            <a href="#">AMD Ryzen 9</a>
          </div>
        </div>
      `
        } else {
            // Default submenu for other categories
            submenu.innerHTML = `
        <div class="submenu-section">
          <h3 class="submenu-title">Danh mục con</h3>
          <div class="submenu-links">
            <a href="#">Danh mục con 1</a>
            <a href="#">Danh mục con 2</a>
            <a href="#">Danh mục con 3</a>
            <a href="#">Danh mục con 4</a>
          </div>
        </div>
        <div class="submenu-section">
          <h3 class="submenu-title">Thương hiệu</h3>
          <div class="submenu-links">
            <a href="#">Thương hiệu 1</a>
            <a href="#">Thương hiệu 2</a>
            <a href="#">Thương hiệu 3</a>
            <a href="#">Thương hiệu 4</a>
          </div>
        </div>
      `
        }
    }

    // Quantity controls
    const quantityControls = document.querySelectorAll(".quantity-control")

    quantityControls.forEach((control) => {
        const input = control.querySelector("input")
        const minusBtn = control.querySelector(".minus")
        const plusBtn = control.querySelector(".plus")

        if (input && minusBtn && plusBtn) {
            minusBtn.addEventListener("click", () => {
                const value = Number.parseInt(input.value)
                if (value > Number.parseInt(input.min)) {
                    input.value = value - 1
                }
            })

            plusBtn.addEventListener("click", () => {
                const value = Number.parseInt(input.value)
                if (value < Number.parseInt(input.max)) {
                    input.value = value + 1
                }
            })
        }
    })

    // Tab controls
    const tabBtns = document.querySelectorAll(".tab-btn")
    const tabPanes = document.querySelectorAll(".tab-pane")

    if (tabBtns.length > 0 && tabPanes.length > 0) {
        tabBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                // Remove active class from all buttons and panes
                tabBtns.forEach((b) => b.classList.remove("active"))
                tabPanes.forEach((p) => p.classList.remove("active"))

                // Add active class to clicked button
                btn.classList.add("active")

                // Show corresponding tab pane
                const tabId = btn.getAttribute("data-tab")
                const tabPane = document.getElementById(tabId)
                if (tabPane) {
                    tabPane.classList.add("active")
                }
            })
        })
    }

    // Product thumbnails
    const thumbnails = document.querySelectorAll(".thumbnail")
    const mainImage = document.querySelector(".main-image img")

    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener("click", () => {
                // Remove active class from all thumbnails
                thumbnails.forEach((t) => t.classList.remove("active"))

                // Add active class to clicked thumbnail
                thumbnail.classList.add("active")

                // Update main image
                const thumbnailImg = thumbnail.querySelector("img")
                if (thumbnailImg) {
                    mainImage.src = thumbnailImg.src
                }
            })
        })
    }

    // Add to cart functionality
    const addToCartBtns = document.querySelectorAll(".btn-add-to-cart")

    addToCartBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Get product info
            const productCard = btn.closest(".product-card") || btn.closest(".product-info")
            if (productCard) {
                const productTitle = productCard.querySelector(".product-title").textContent
                const productPrice = productCard.querySelector(".current-price").textContent

                // Show notification
                showNotification(`Đã thêm "${productTitle}" vào giỏ hàng!`)
            }
        })
    })

    // Buy now functionality
    const buyNowBtns = document.querySelectorAll(".btn-buy-now")

    buyNowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Redirect to checkout page (would be implemented in a real site)
            alert("Chức năng mua ngay sẽ chuyển đến trang thanh toán")
        })
    })

    // Notification function
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement("div")
        notification.className = "notification"
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `

        // Add to DOM
        document.body.appendChild(notification)

        // Add active class after a small delay (for animation)
        setTimeout(() => {
            notification.classList.add("active")
        }, 10)

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove("active")
            setTimeout(() => {
                notification.remove()
            }, 300)
        }, 3000)

        // Close button functionality
        const closeBtn = notification.querySelector(".notification-close")
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                notification.classList.remove("active")
                setTimeout(() => {
                    notification.remove()
                }, 300)
            })
        }
    }

    // Add notification styles
    const notificationStyles = document.createElement("style")
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: white;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            padding: 15px;
            transform: translateY(100px);
            opacity: 0;
            transition: transform 0.3s, opacity 0.3s;
            z-index: 1000;
        }
        
        .notification.active {
            transform: translateY(0);
            opacity: 1;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
        }
        
        .notification-content i {
            color: #0077cc;
            font-size: 20px;
            margin-right: 10px;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #999;
            cursor: pointer;
            margin-left: 15px;
        }
    `
    document.head.appendChild(notificationStyles)
})
