document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed
  
    // Elements to observe
    const main = document.querySelector('.main');
    const place = document.querySelector('.place');
    const description = document.querySelector('.description');
  
    // Observe elements
    observer.observe(main);
    observer.observe(place);
    observer.observe(description);
  });