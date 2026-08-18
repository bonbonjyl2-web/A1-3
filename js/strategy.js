document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get('query');
  const strategyContainer = document.getElementById('strategy-content');

  if (!keyword) {
    strategyContainer.innerHTML = `<p>메인 페이지에서 키워드를 입력한 뒤 이동해 주세요.</p>`;
    return;
  }

  strategyContainer.innerHTML = `<p>💡 AI가 마케팅 전략을 생성 중입니다...</p>`;

  try {
    const response = await fetch(`/api/strategy?query=${encodeURIComponent(keyword)}`);
    const data = await response.json();

    strategyContainer.innerHTML = `
      <h2>🎯 '${data.keyword}' 맞춤형 마케팅 전략</h2>
      <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-top: 15px; white-space: pre-line;">
        <p style="font-size: 1rem; color: #1e293b; line-height: 1.8;">${data.strategy}</p>
      </div>
    `;
  } catch (error) {
    strategyContainer.innerHTML = `<p style="color: red;">전략 데이터를 가져오지 못했습니다. 파이썬 서버 상태를 확인해 주세요.</p>`;
  }
});