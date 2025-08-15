function whatsappOrder(productName) {
    const phoneNumber = "967777801166";
    let defaultMsg = `مرحباً، أود الاستفسار أو شراء المنتج: ${productName}\nيرجى كتابة الكمية المطلوبة أو أي ملاحظة:`;
    let userMsg = prompt("يمكنك تعديل الرسالة وإدخال الكمية أو الاستفسار:", defaultMsg);
    if (userMsg && userMsg.trim() !== "") {
        const encodedMessage = encodeURIComponent(userMsg);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    }
}

// Filter Products by Category
function filterProducts(category) {
    if (category === 'all') {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.display = 'block';
        });
        return;
    }
    document.querySelectorAll('.product-card').forEach(card => {
        if (card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Toggle Category Section
function toggleCategory(category) {
    const section = document.getElementById(`${category}-section`);
    const productsContainer = section.querySelector('.scroll-container');
    if (productsContainer.style.maxHeight) {
        productsContainer.style.maxHeight = null;
    } else {
        productsContainer.style.maxHeight = productsContainer.scrollHeight + 'px';
    }
}

// Mobile Menu Toggle with close on outside click or re-click
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.md\\:hidden');
    const menu = document.querySelector('.md\\:flex.space-x-6');
    function toggleMenu(e) {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        menu.classList.toggle('flex-col');
        menu.classList.toggle('absolute');
        menu.classList.toggle('top-16');
        menu.classList.toggle('left-0');
        menu.classList.toggle('right-0');
        menu.classList.toggle('bg-white');
        menu.classList.toggle('shadow-lg');
        menu.classList.toggle('p-4');
        menu.classList.toggle('space-y-4');
        menu.classList.toggle('space-x-6');
    }
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menu.classList.contains('hidden')) {
                if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
                    toggleMenu();
                }
            }
        });
    }
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
