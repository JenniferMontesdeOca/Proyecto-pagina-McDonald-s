document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        const bubblesContainer = this.querySelector('.bubbles');
        for (let i = 0; i < 5; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.animationDelay = `${Math.random() * 2}s`;
            bubble.style.width = bubble.style.height = `${Math.random() * 20 + 10}px`;
            bubblesContainer.appendChild(bubble);
        }
    });
    
    link.addEventListener('mouseleave', function() {
        const bubblesContainer = this.querySelector('.bubbles');
        bubblesContainer.innerHTML = '';
    });
});


