from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Gemini API 설정
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. 트렌드 리포트 API (/api/report)
@app.get("/api/report")
def get_report(query: str):
    try:
        model = genai.GenerativeModel('gemini-3.6-flash')
        prompt = f"K-Beauty 키워드 '{query}'에 대한 최신 글로벌 시장 트렌드, 소비자 반응, 주요 특징을 3문장으로 간결하게 요약해줘."
        
        response = model.generate_content(prompt)
        return {"keyword": query, "summary": response.text}
    except Exception as e:
        return {"keyword": query, "summary": f"AI 분석 중 오류가 발생했습니다: {str(e)}"}

# 2. 마케팅 전략 추천 API (/api/strategy)
@app.get("/api/strategy")
def get_strategy(query: str):
    try:
        model = genai.GenerativeModel('gemini-3.6-flash')
        prompt = f"K-Beauty 키워드 '{query}' 트렌드를 활용한 타겟 고객층 분석, 마케팅 문구 추천, 실행 가능한 마케팅 전략 3가지를 작성해줘."
        
        response = model.generate_content(prompt)
        return {"keyword": query, "strategy": response.text}
    except Exception as e:
        return {"keyword": query, "strategy": f"전략 생성 중 오류가 발생했습니다: {str(e)}"}