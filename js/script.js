const video = document.querySelector('video');
window.addEventListener('scroll', function() {
    let value = 1 + window.scrollY / -600;
    video.style.opacity = value;
});

const counters = document.querySelectorAll('.counter');
const speed = 200;

function counter(target, start, stop) {
  target.innerText = 100;
  const counterInterval = setInterval(() => {
    const inc = Number(stop / speed);
    start += inc;
    const valueConverted = (Math.round(start * 100) / 100).toFixed(0);
    target.innerText = valueConverted;
    if (valueConverted == stop) {
      clearInterval(counterInterval);
    }
  }, 20);
}

function obCallBack(entries) {
  entries.forEach((entry) => {
    const { target } = entry;
    const stopValue = target.dataset.target;
    const startValue = 0;
    if (!entry.isIntersecting) return;
    counter(target, startValue, stopValue);
    counterObserver.unobserve(target);
  });
}

const counterObserver = new IntersectionObserver(obCallBack, { threshold: 1 });
counters.forEach((counter) => counterObserver.observe(counter));