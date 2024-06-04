const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", function() {
    const content = this.nextElementSibling;
    content.classList.toggle("active");

    // Close other open contents (optional)
    accordionHeaders.forEach(otherHeader => {
      if (otherHeader !== this) {
        otherHeader.nextElementSibling.classList.remove("active");
        otherHeader.querySelector(':after').textContent = '►'; // Символ стрілки вправо
      }
    });

    // Toggle arrow based on content visibility
    const arrow = this.querySelector(':after');
    arrow.textContent = content.classList.contains('active') ? '▲' : '►'; // Символ стрілки вгору або вправо
  });
});

