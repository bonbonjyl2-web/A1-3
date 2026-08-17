

```md
# K-Beauty Trend Lens

K-Beauty 관련 키워드를 입력하면 검색 결과를 수집하고, 핵심 내용을 요약하여 간단한 트렌드 리포트 형태로 보여주는 AI 기반 웹 서비스입니다.

이 프로젝트는 사용자가 빠르게 K-Beauty 트렌드를 파악할 수 있도록 돕는 것을 목표로 합니다.

---

## 1. Project Introduction

K-Beauty Trend Lens는 K-Beauty 키워드에 대한 검색 결과를 바탕으로 주요 정보를 정리하고, 이를 사용자에게 직관적으로 보여주는 서비스입니다.

사용자는 키워드를 입력해 관련 정보를 탐색할 수 있고, 요약된 결과를 통해 빠르게 핵심 트렌드를 확인할 수 있습니다.

---

## 2. Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python

### Deployment
- Vercel

### External API
- Gemini API
- Serper API
- Kakao API

---

## 3. Deployment URL

- https://your-project-url.vercel.app

> 배포가 완료되면 실제 Vercel 주소로 수정해주세요.

---

## 4. Main Features

- K-Beauty 키워드 검색
- 검색 결과 수집
- AI 기반 핵심 내용 요약
- 간단한 트렌드 리포트 제공
- 웹 기반 사용자 화면 제공

---

## 5. Project Structure

```bash
A1-3/
├── node_modules/         # npm install 시 자동 생성
├── public/               # 정적 파일 폴더
│   └── images/           # 이미지 파일 저장 폴더
├── api/                  # API 관련 코드 폴더
├── css/                  # 스타일 파일 폴더
├── js/                   # JavaScript 파일 폴더
├── .env                  # API 키 및 환경 변수 저장 파일
├── .gitignore            # Git 제외 파일 설정
├── index.html            # 메인 페이지
├── main.py               # Python 메인 실행 파일
├── package.json          # Node.js 설정 파일
└── README.md             # 프로젝트 설명 문서
```

---

## 6. How to Run

### 1) 프로젝트 클론

```bash
git clone https://github.com/bonbonjylee2-web/A1-3.git
cd A1-3
```

### 2) Node.js 패키지 설치

```bash
npm install
```

### 3) Python 패키지 설치

필요한 Python 라이브러리가 있다면 설치합니다.

예시:

```bash
pip install -r requirements.txt
```

> `requirements.txt`가 없다면 사용한 Python 라이브러리를 직접 설치해야 합니다.

### 4) 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성한 뒤 아래 내용을 입력합니다.

```env
GEMINI_API_KEY=your_gemini_api_key
SERPER_API_KEY=your_serper_api_key
KAKAO_REST_API_KEY=your_kakao_api_key
```

### 5) 실행

필요한 방식에 따라 프로젝트를 실행합니다.

예시:

```bash
python main.py
```

또는 프론트엔드 정적 페이지를 실행할 경우 Live Server 등으로 `index.html`을 열어 확인할 수 있습니다.

---

## 7. Environment Variables

이 프로젝트에서는 외부 API 연동을 위해 환경 변수를 사용합니다.

`.env` 파일 예시:

```env
GEMINI_API_KEY=your_gemini_api_key
SERPER_API_KEY=your_serper_api_key
KAKAO_REST_API_KEY=your_kakao_api_key
```

### 설명
- `GEMINI_API_KEY`  
  Gemini API 사용을 위한 키

- `SERPER_API_KEY`  
  검색 데이터 수집을 위한 Serper API 키

- `KAKAO_REST_API_KEY`  
  Kakao API 사용을 위한 REST API 키

> `.env` 파일은 보안상 GitHub에 업로드하지 않습니다.

---

## 8. Git Ignore

`.gitignore`에는 아래 항목을 포함하는 것을 권장합니다.

```gitignore
node_modules/
.env
__pycache__/
```

---

## 9. MVP Goal

이 프로젝트의 MVP 목표는 아래 핵심 기능을 먼저 구현하는 것입니다.

- 사용자가 키워드를 입력할 수 있는 메인 화면 구현
- 검색 결과를 가져오는 기능 구현
- AI 요약 결과를 보여주는 기능 구현
- 간단한 트렌드 리포트 화면 제공

---

## 10. Notes

- API 키는 반드시 `.env` 파일로 관리합니다.
- `node_modules/`는 자동 생성 폴더이므로 업로드하지 않습니다.
- 배포 URL은 실제 서비스 주소로 수정해야 합니다.
- 프로젝트 구조는 구현 과정에서 일부 변경될 수 있습니다.


---

## 수정 포인트
제출 전에 아래 3가지만 바꾸면 더 완성도 높아요.

1. **배포 URL 수정**
```md
https://your-project-url.vercel.app
```
→ 실제 주소로 변경

2. **깃허브 주소 수정**
```bash
git clone https://github.com/your-username/your-repository-name.git
```
→ 본인 저장소 주소로 변경

3. **작성자 이름 수정**
```md
Developer: Your Name
```
→ 본인 이름으로 변경

---

## 한 가지 체크
지금 구조에는 `requirements.txt`가 **폴더 구조에 없는데**, 실행 방법에는 들어가 있어요.  
그래서 둘 중 하나로 맞추는 게 좋아요.

### 방법 1. `requirements.txt`를 실제로 추가
가장 깔끔한 방법입니다.

최종 구조:
```bash
A1-3/
├── node_modules/
├── public/
│   └── images/
├── api/
├── css/
├── js/
├── .env
├── .gitignore
├── index.html
├── main.py
├── package.json
├── requirements.txt
└── README.md
```
