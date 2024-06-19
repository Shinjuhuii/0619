document.addEventListener('DOMContentLoaded', function() {
    const initialMap = document.getElementById('map-tracking');
    const allMaps = document.querySelectorAll('.cos-map img');

    // 초기에 모든 지도 이미지를 숨김
    allMaps.forEach(map => {
        map.style.display = 'none';
    });

    // 초기에는 id="map-tracking"인 이미지만 보이도록 설정
    initialMap.style.display = 'block';

    // 클릭된 버튼에 따라 지도 이미지 변경
    const btns = document.querySelectorAll('.cos-btn a');
    btns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 클릭 동작 방지

            // 클릭된 버튼의 data-target 속성 값에 해당하는 지도 이미지만 보이기
            const target = this.getAttribute('data-target');
            const mapToShow = document.getElementById(`map-${target}-detail`);
            if (mapToShow) {
                // 모든 지도 이미지 숨기기
                allMaps.forEach(map => {
                    map.style.display = 'none';
                });

                mapToShow.style.display = 'block';

                // 이벤트 버블링 방지
                event.stopPropagation();
            }
        });
    });

    // 배경 클릭 시 기본 지도 이미지로 돌아가기
    document.addEventListener('click', function(event) {
        const clickedElement = event.target;

        // div.cos-btn의 영역을 제외한 다른 곳을 클릭했을 때만 처리
        if (!clickedElement.closest('.cos-btn')) {
            // 모든 지도 이미지 숨기기
            allMaps.forEach(map => {
                map.style.display = 'none';
            });

            // 기본 지도 이미지 보이기
            initialMap.style.display = 'block';
        }
    });
});
