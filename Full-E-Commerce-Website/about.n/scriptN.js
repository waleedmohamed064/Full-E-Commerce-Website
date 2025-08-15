document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
  
    const startCounting = (el) => {
      const target = +el.dataset.target;
      let count = 0;
      const step = target / 200; 
  
      const formatK = (num) => {
        return num >= 1000 ? (Math.round((num / 1000) * 10) / 10) + "k" : num;
      };
  
      const updateCounter = () => {
        count += step;
        if (count < target) {
          el.textContent = formatK(count);
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = formatK(target);
        }
      };
  
      updateCounter();
    };
  
    const statsSection = document.querySelector(".stats");
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        counters.forEach(startCounting);
        observer.unobserve(statsSection);
      }
    }, { threshold: 0.5 });
  
    observer.observe(statsSection);
  });
  