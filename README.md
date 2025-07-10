# 📖 mosu-docs

MOSU 개발문서 아카이브 레포지토리입니다.

## 🚀 시작하기

```bash
# yarn 패키지 매니저 설정
npm install -g yarn

# 의존성 설치
yarn install --frozen-lockfile

# 개발서버 실행
yarn docs:dev
```

## ✍️ 문서 작성방법

Vitepress 는 기본적으로 파일시스템 기반 라우팅을 지원합니다 <br/>
`/docs` 디렉토리를 기준으로 내부의 마크다운 파일을 인식하여 페이지로 변환합니다

Sidebar 를 수정하고싶을 경우 `.vitepress/config.mts` 의 sidebar 옵션을 사용해 Sidebar 를 추가, 수정, 삭제 할 수 있습니다
