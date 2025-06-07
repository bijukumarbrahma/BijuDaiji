function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = ${Math.random() * 100}vw;
            heart.style.animationDuration = ${Math.random() * 3 + 3}s;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 6000);
        }

        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = ${Math.random() * 100}vw;
            sparkle.style.top = ${Math.random() * 100}vh;
            sparkle.style.animationDuration = ${Math.random() * 1 + 1}s;
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2000);
        }

        setInterval(createHeart, 500);
        setInterval(createSparkle, 300);