// Product slider functionality

document.addEventListener("DOMContentLoaded", () => {
    // Initialize product sliders
    const productSliders = document.querySelectorAll(".product-slider")

    productSliders.forEach((slider) => {
        // Create slider controls
        const sliderControls = document.createElement("div")
        sliderControls.className = "slider-controls"
        sliderControls.innerHTML = `
            <button class="slider-prev"><i class="fas fa-chevron-left"></i></button>
            <button class="slider-next"><i class="fas fa-chevron-right"></i></button>
        `

        // Add controls to slider
        slider.appendChild(sliderControls)

        // Create slider track
        const sliderTrack = document.createElement("div")
        sliderTrack.className = "slider-track"

        // Move all direct children (except controls) into the track
        while (slider.children.length > 1) {
            sliderTrack.appendChild(slider.children[0])
        }

        // Add track to slider before controls
        slider.insertBefore(sliderTrack, sliderControls)

        // Add sample products for demonstration
        for (let i = 0; i < 6; i++) {
            const productCard = document.createElement("div")
            productCard.className = "product-card"
            productCard.innerHTML = `
                <div class="product-badge">Giảm 20%</div>
                <div class="product-image">
                    <img src="/placeholder.svg?height=150&width=150" alt="Product">
                </div>
                <div class="product-info">
                    <h3 class="product-title">Sản phẩm mẫu ${i + 1}</h3>
                    <div class="product-specs">
                        <span>Spec 1</span>
                        <span>Spec 2</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">${(19990000 - i * 1000000).toLocaleString()}₫</span>
                        <span class="old-price">${(24990000 - i * 1000000).toLocaleString()}₫</span>
                    </div>
                </div>
            `
            sliderTrack.appendChild(productCard)
        }

        // Get slider controls
        const prevBtn = slider.querySelector(".slider-prev")
        const nextBtn = slider.querySelector(".slider-next")

        // Set initial position
        let position = 0
        const itemWidth = 220 // Width of each product card + margin
        const visibleItems = Math.floor(sliderTrack.offsetWidth / itemWidth)
        const maxPosition = Math.max(0, sliderTrack.children.length - visibleItems)

        // Update slider position
        function updateSliderPosition() {
            sliderTrack.style.transform = `translateX(${-position * itemWidth}px)`

            // Update button states
            prevBtn.disabled = position === 0
            nextBtn.disabled = position >= maxPosition

            // Update button appearance
            prevBtn.style.opacity = position === 0 ? "0.5" : "1"
            nextBtn.style.opacity = position >= maxPosition ? "0.5" : "1"
        }

        // Add event listeners to controls
        prevBtn.addEventListener("click", () => {
            if (position > 0) {
                position--
                updateSliderPosition()
            }
        })

        nextBtn.addEventListener("click", () => {
            if (position < maxPosition) {
                position++
                updateSliderPosition()
            }
        })

        // Initial update
        updateSliderPosition()

        // Update on window resize
        window.addEventListener("resize", () => {
            const newVisibleItems = Math.floor(sliderTrack.offsetWidth / itemWidth)
            const newMaxPosition = Math.max(0, sliderTrack.children.length - newVisibleItems)

            // Adjust position if needed
            if (position > newMaxPosition) {
                position = newMaxPosition
            }

            updateSliderPosition()
        })
    })

    // Add slider styles
    const sliderStyles = document.createElement("style")
    sliderStyles.textContent = `
        .product-slider {
            position: relative;
            overflow: hidden;
        }
        
        .slider-track {
            display: flex;
            transition: transform 0.3s ease;
        }
        
        .slider-track .product-card {
            flex: 0 0 200px;
            margin-right: 20px;
        }
        
        .slider-controls {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            display: flex;
            justify-content: space-between;
            pointer-events: none;
        }
        
        .slider-prev, .slider-next {
            width: 40px;
            height: 40px;
            background-color: white;
            border: none;
            border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: auto;
            transition: opacity 0.3s;
        }
        
        .slider-prev:disabled, .slider-next:disabled {
            cursor: not-allowed;
        }
    `
    document.head.appendChild(sliderStyles)
})
