

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

## 10. 배포 및 코드 에러 문제 해결 (Troubleshooting)

본 프로젝트는 로컬 개발 환경과 Vercel 클라우드 배포 환경의 구조적 차이를 이해하고, 발생한 문제를 해결하여 성공적으로 재배포를 완료했습니다.

### 1. 🛠️ 로컬(Local)과 배포(Deployment) 환경의 주요 차이점
* **API 호출 경로 (Endpoint)**
  * **로컬**: `http://127.0.0.1:8000/api/...` 와 같이 로컬 FastAPI 서버 IP를 직접 지정하여 테스트.
  * **배포**: Vercel Serverless Function 환경에 맞추어 `/api/...` 와 같은 **상대 경로(Relative Path)**로 전환하여 통신 문제 해결.
* **환경 변수 및 보안 (Environment Variables)**
  * **로컬**: `.env` 파일에 Gemini API Key를 보관하여 호출.
  * **배포**: 보안 유지를 위해 Git에 `.env`를 올리지 않고, Vercel 대시보드의 **Environment Variables**에 `GEMINI_API_KEY`를 별도 등록하여 서버리스 함수에서 참조하도록 구현.
* **배포 설정 파일 (Build Config)**
  * Vercel 플랫폼이 백엔드(`main.py`)와 정적 파일(`*.html`, `css`, `js`)을 올바르게 라우팅할 수 있도록 프로젝트 최상위에 `vercel.json` 및 `requirements.txt` 생성.

---

### 2. 이슈 해결 및 재배포 흐름 (Re-deployment Process)

| 단계 | 발생 이슈 / 작업 내용 | 해결 및 대응 방법 |
| :--- | :--- | :--- |
| **이슈 발생** | `404 models/gemini-pro is not found` 에러 발생 | Gemini API 모델 버전 호환성 문제 확인 |
| **코드 수정** | `main.py` 내 모델 지정 변경 | `gemini-pro` $\rightarrow$ 최신 규격 모델인 `gemini-1.5-flash`로 변경 |
| **자동 재배포** | GitHub 메인 브랜치 Push | Git Commit & Push 실행 시 Vercel CI/CD에 의해 자동 재배포 완료 |

---

## 📸 프로젝트 실행 및 증빙 스크린샷

### 1. 서비스 동작 화면 (데스크톱 & 모바일)
| 데스크톱 메인 / 리포트 | AI 마케팅 전략 제안 | 모바일 반응형 화면 |
| :---: | :---: | :---: |
| ![데스크톱 화면](이슈_이미지_URL_1) | ![AI 마케팅 전략](이슈_이미지_URL_2) | ![모바일 화면](이슈_이미지_URL_3) |

## ✔ Live Demo
- [K-Beauty Lens 웹사이트 바로가기](https://a1-3-six.vercel.app/)
---

### 2. AI 코딩 도구 활용 내역
![AI 프롬프트 대화 내역](이슈_이미지_URL_4)

---

### 3. 로컬 vs 배포 환경 수정 증빙 (재배포)
| 로컬/배포 코드 변경 (Git Diff) | Vercel 환경변수 설정 | 재배포 성공 (Ready) |
| :---: | :---: | :---: |
| ![Git Diff](이슈_이미지_URL_5) | ![Vercel Env](이슈_이미지_URL_6) | ![Vercel Deploy](이슈_이미지_URL_7) |


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
