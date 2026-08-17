document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get('query');
  const reportContainer = document.getElementById('report-content');

  if (!keyword) {
    reportContainer.innerHTML = `<p>메인 페이지에서 키워드를 입력해 주세요.</p>`;
    return;
  }

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/report?query=${encodeURIComponent(keyword)}`);
    const data = await response.json();

    reportContainer.innerHTML = `
      <h2>🔍 '${data.keyword}' 트렌드 분석 결과</h2>
      <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-top: 15px; margin-bottom: 20px;">
        <p style="font-size: 1.1rem; color: #1e293b;">${data.summary}</p>
      </div>
      <button onclick="location.href='strategy.html?query=${encodeURIComponent(data.keyword)}'">
        이 키워드로 마케팅 전략 제안받기 🚀
      </button>
    `;
  } catch (error) {
    reportContainer.innerHTML = `
      <h2>🔍 '${keyword}' 트렌드 분석 결과</h2>
      <p style="color: red;">서버 연결 실패! 파이썬 서버(uvicorn)가 실행 중인지 확인해 주세요.</p>
    `;
  }
});