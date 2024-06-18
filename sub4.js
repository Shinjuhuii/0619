document.querySelector('.scroll a').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.review').classList.add('active');
    document.querySelector('.review').scrollIntoView({ behavior: 'smooth' });
});



const bubble = document.querySelector('.bubble');
    let bubbleWidth = bubble.offsetWidth;
    let currentPosition = 0;
    const speed = 1; // 이동 속도
    let isReset = false;

    function moveImages() {
        currentPosition -= speed;
        bubble.style.transform = `translateX(${currentPosition}px)`;

        if (currentPosition <= -bubbleWidth) {
            // 1200px에 접근하면 초기화
            if (!isReset && window.innerWidth <= 1200) {
                isReset = true;
                bubble.innerHTML = bubble.innerHTML.substr(0, bubble.innerHTML.indexOf('<img src="https://i.postimg.cc/Y9W6Wmpb/Group-1321316402.png" alt="">') + 55); // 마지막 이미지 삭제
                bubbleWidth = bubble.offsetWidth;
                currentPosition = 0;
                isReset = false;
            } else {
                currentPosition = 0;
            }
        }

        requestAnimationFrame(moveImages);
    }

    moveImages();

    