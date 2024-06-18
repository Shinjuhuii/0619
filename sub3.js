// 페이지 내용 배열
const contents = [
    {
        title: "갯골생태공원",
        subTitle: "장곡동",
        description: "경기도 유일의 내만갯골과 옛 염전의 정취를 느낄 수 있는 아름다운 곳",
        videoSource: "img/생태공원.mp4",
        link: "sub5.html" // 갯골생태공원 링크
    },
    {
        title: "거북섬",
        subTitle: "정왕동",
        description: `거북섬은 경기도 시흥시 시화 MTV(Multi Techno Valley)에
        조성된 거북이 모양으로 생긴 인공섬`,
        videoSource: "img/거북섬.mp4",
        link: "sub6.html" // 거북섬 링크
    },
    {
        title: "오이도",
        subTitle: "정왕동",
        description: "경기도 시흥시와 화성시를 연결하는 시화방조제의 시작 지점이 오이도",
        videoSource: "img/오이도.mp4",
        link: "sub7.html" // 오이도 링크
    },
    {
        title: "관곡지",
        subTitle: "하중동",
        description: "경기도 시흥시 하중동에 있는 조선 세조 때 조성된 연못",
        videoSource: "img/관곡지.mp4",
        link: "sub8.html" // 관곡지 링크
    }
];

let currentIndex = 0;

// main 내용 변경 함수
function changeMainContent() {
    currentIndex = (currentIndex + 1) % contents.length;
    document.getElementById("main-title").innerText = contents[currentIndex].title;
    document.getElementById("main-description").innerText = contents[currentIndex].description;
    document.getElementById("sub-title").innerText = contents[currentIndex].subTitle;
    document.getElementById("pin").innerText = contents[currentIndex].subTitle;

    // 비디오 소스 변경
    document.getElementById("video-background").src = contents[currentIndex].videoSource;

    // 버튼 링크 변경
    document.getElementById("btn1").href = contents[currentIndex].link;

    // 버튼 이미지 변경 (옵션)
    document.getElementById("btn1").querySelector("img").src = "https://i.postimg.cc/50M7qk1F/Frame-1000002549.png"; // 이미지 주소는 동일하므로 생략 가능
}

// 페이지가 로드될 때 초기 내용 설정
window.onload = function() {
    document.getElementById("main-title").innerText = contents[currentIndex].title;
    document.getElementById("main-description").innerText = contents[currentIndex].description;
    document.getElementById("sub-title").innerText = contents[currentIndex].subTitle;
    document.getElementById("pin").innerText = contents[currentIndex].subTitle;
    document.getElementById("btn1").href = contents[currentIndex].link;
}

// btn-next 버튼에 클릭 이벤트 추가
document.getElementById("btn-next").addEventListener("click", changeMainContent);

// 초기 버튼 링크 설정 (처음 로드 시에만 실행됨)
document.getElementById("btn1").href = contents[currentIndex].link;
