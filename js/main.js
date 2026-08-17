// 버튼 클릭 시 실행될 함수
function searchTrend() {
  const keywordInput = document.getElementById('keyword');
  const keyword = keywordInput.value.trim();

  if (!keyword) {
    alert('검색 키워드를 입력해 주세요!');
    return;
  }

  // 입력된 키워드를 리포트 페이지로 전달
  location.href = `report.html?query=${encodeURIComponent(keyword)}`;
}