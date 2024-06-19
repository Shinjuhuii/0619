 // wrap01 스크롤이벤트
 document.querySelector('.scroll a').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});




// wrap 02 스크롤 이벤트//
document.addEventListener("DOMContentLoaded", function () {
    const elements = [
        { text: document.getElementById('op01'), icon: document.getElementById('telescope') },
        { text: document.getElementById('op02'), icon: document.getElementById('mountain') },
        { text: document.getElementById('op03'), icon: document.getElementById('happy') },
    ];

    // 각 요소의 fade-in 효과 적용 함수
    function applyFadeInEffect(element) {
        element.style.opacity = "1";
        element.style.transition = "opacity 2s ease-out";
        console.log(`Element ${element.id} is now visible`);
    }

    // 스크롤 이벤트 처리 함수
    function handleScroll() {
        // 스크롤 위치와 마지막 스크롤 위치 저장
        let scrollY = window.scrollY;
        let currentIndex = 0;

        // 요소들이 화면에 나타날 때 fade-in 효과 적용
        elements.forEach((item, index) => {
            const itemTextRect = item.text.getBoundingClientRect();

            if (itemTextRect.top < window.innerHeight && itemTextRect.bottom > 0 && currentIndex <= index) {
                applyFadeInEffect(item.text);
                applyFadeInEffect(item.icon);
                currentIndex = index + 1;
            }
        });
    }

    // 초기 화면 로딩 시 요소들 위치 확인 후 fade-in 적용
    handleScroll();

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);
});


// wrap 03 map 이벤트//
const pin01 = document.querySelectorAll('.pin01');
const pin02 = document.querySelectorAll('.pin02');
const pin03 = document.querySelectorAll('.pin03');
const pin04 = document.querySelectorAll('.pin04');
const pin05 = document.querySelectorAll('.pin05');
const pin06 = document.querySelectorAll('.pin06');

const haero = document.querySelectorAll('#haero');
const toro = document.querySelectorAll('#toro');
const innerPin01 = document.querySelector('.inner-pin01');

// 핀을 클릭할 때 실행할 함수
function handlePinClick(event) {
    console.log('click');
    // 모든 핀의 활성화 클래스를 제거합니다.
    document.querySelectorAll('.inner-pin01, .inner-pin02, .inner-pin03, .inner-pin04, .inner-pin05, .inner-pin06').forEach(pin => {
        pin.classList.remove('active');
    });

   // 클릭된 핀에만 활성화 클래스를 추가합니다.
   const innerPin = event.currentTarget.querySelector('.inner-pin01, .inner-pin02, .inner-pin03, .inner-pin04, .inner-pin05, .inner-pin06');
   innerPin.classList.add('active');

   if (innerPin === innerPin01) {
    innerPin.style.backgroundColor = 'var(--main-color)';
} else {
    innerPin.style.backgroundColor = '#E6E6E6';
}

   haero.classList.remove('move-haero');
   toro.classList.remove('move-toro');

}

   // haero와 toro 숨기는 함수
   function hideHaeroAndToro() {
    haero.style.opacity = "0";
    toro.style.opacity = "0";
}

// haero와 toro를 트랜지션 효과와 함께 숨기는 함수
function hideHaeroAndToroWithTransition() {
    haero.style.transition = "opacity 1.4s ease-in-out";
    toro.style.transition = "opacity 1.4s ease-in-out";
    haero.style.opacity = "0";
    toro.style.opacity = "0";
}


document.addEventListener("DOMContentLoaded", function() {
    const pins = document.querySelectorAll(".pin-frame01 .pin01, .pin-frame01 .pin02, .pin-frame01 .pin03, .pin-frame02 .pin04, .pin-frame02 .pin05, .pin-frame02 .pin06");
    const map01 = document.querySelector('.map01');
    const map02 = document.querySelector('.map02');
    const map03 = document.querySelector('.map03');
    const map04 = document.querySelector('.map04');

    hideAllMaps();

   
    
    // 핀을 클릭할 때 실행할 함수
    function handlePinClick(event) {
        // 모든 지도 요소 숨기기
        hideAllMaps();

        // 클릭된 핀에 따라 지도 요소 보이기
        const pinClass = event.currentTarget.classList[0];
        switch (pinClass) {
            case "pin02":
                map01.style.opacity = "1";
                map01.style.transition = "opacity 1.4s ease-in-out";
                break;
            case "pin03":
                map02.style.opacity = "1";
                map02.style.transition = "opacity 1.4s ease-in-out";
                break;
            case "pin04":
                map03.style.opacity = "1";
                map03.style.transition = "opacity 1.4s ease-in-out";
            
                hideHaeroAndToroWithTransition();
                break;
            case "pin05":
                map04.style.opacity = "1";
                map04.style.transition = "opacity 1.4s ease-in-out";
                break;
            case "pin05":
                map05.style.opacity = "1";
                map05.style.transition = "opacity 1.4s ease-in-out";
                break;
            case "pin06":
                map06.style.opacity = "1";
                map06.style.transition = "opacity 1.4s ease-in-out";
                break;
            default:
                console.error("Invalid pin class:", pinClass);
        }
    }


    // 초기 화면에서 모든 지도 요소 숨기기
    hideAllMaps();


    // 모든 지도 요소 숨기는 함수
    function hideAllMaps() {
        map01.style.opacity = "0";
        map01.style.transition = "none";

        map02.style.opacity = "0";
        map02.style.transition = "none";

        map03.style.opacity = "0";
        map03.style.transition = "none";

        map04.style.opacity = "0";
        map04.style.transition = "none";
    }

    // 각 핀에 클릭 이벤트 리스너 추가
    pins.forEach(pin => {
        pin.addEventListener("click", handlePinClick);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const pins = document.querySelectorAll(".pin-frame01 .pin01, .pin-frame01 .pin02, .pin-frame01 .pin03, .pin-frame02 .pin04, .pin-frame02 .pin05, .pin-frame02 .pin06");

    pins.forEach(pin => {
        pin.addEventListener("click", function() {
            document.querySelectorAll('.inner-pin01, .inner-pin02, .inner-pin03, .inner-pin04, .inner-pin05, .inner-pin06').forEach(pin => {
                pin.style.backgroundColor = '#E6E6E6';
            });

            // 클릭된 핀의 inner-pin 색상을 main-color로 변경
            this.querySelector(".inner-pin01, .inner-pin02, .inner-pin03, .inner-pin04, .inner-pin05, .inner-pin06").style.backgroundColor = 'var(--main-color)';

            // Get the pin class name to determine the position
            const pinClass = this.classList[0];

            switch (pinClass) {
                case "pin01":
                    moveHaeroTo(490, 10);
                    moveToroTo(490, 90);
                    break;
                case "pin02":
                    moveHaeroTo(490, 260);
                    moveToroTo(490, 400);
                    break;
                case "pin03":
                    moveHaeroTo(350, 420);
                    moveToroTo(350, 600);
                    break;
                case "pin04":
                    moveHaeroTo(320, 60); // Adjusted position for pin04
                    moveToroTo(350, 280); // Adjusted position for pin04
                    break;
                case "pin05":
                    moveHaeroTo(170, 40); // Adjusted position for pin05
                    moveToroTo(170, 200); // Adjusted position for pin05
                    break;
                case "pin06":
                    moveHaeroTo(160, 380); // Adjusted position for pin06
                    moveToroTo(160, 520); // Adjusted position for pin06
                    break;
                default:
                    console.error("Invalid pin class:", pinClass);
            }
        });
    });

    function moveHaeroTo(top, left) {
        const haero = document.getElementById("haero");
        if (haero) {
            haero.style.top = `${top}px`;
            haero.style.left = `${left}px`;
            haero.classList.add("move-haero");
        } else {
            console.error("Haero element not found!");
        }
    }

    function moveToroTo(top, left) {
        const toro = document.getElementById("toro");
        if (toro) {
            toro.style.top = `${top}px`;
            toro.style.left = `${left}px`;
            toro.classList.add("move-toro");
        } else {
            console.error("Toro element not found!");
        }
    }
});


// wrap 04 스크롤이벤트

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.travel > div');
    const images = [
        'url("images/picture_1.png")',
        'url("images/picture_2.png")',
        'url("images/picture_3.png")',
        'url("images/picture_4.png")'
    ];

    function handleScroll() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                section.style.backgroundImage = images[index];
            } else {
                section.style.backgroundImage = `url('images/picture_${index + 1}.png')`;
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로드 시 호출
});
