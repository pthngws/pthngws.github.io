document.addEventListener("DOMContentLoaded", () => {
    const rotatingText = document.querySelector(".rotating-text");
    const phrases = ["TRẦN PHI THẮNG", "TOEIC 825", "GPA 3.47"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[index];
        if (isDeleting) {
            charIndex--; // Xóa ký tự
        } else {
            charIndex++; // Thêm ký tự
        }

        // Cập nhật nội dung
        rotatingText.textContent = currentPhrase.slice(0, charIndex) || "\u00A0"; // Thêm ký tự không hiển thị (non-breaking space)

        // Tạm dừng khi kết thúc hoặc bắt đầu xóa
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Dừng 1.5 giây trước khi xóa
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % phrases.length; // Chuyển sang cụm từ tiếp theo
            setTimeout(typeEffect, 500); // Dừng ngắn trước khi bắt đầu gõ lại
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100); // Tốc độ xóa nhanh hơn tốc độ gõ
        }
    }

    typeEffect(); // Bắt đầu hiệu ứng gõ
});


// Hiệu ứng khi scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section-animate");
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});
