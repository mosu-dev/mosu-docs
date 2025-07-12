# 모수 백엔드 API 문서

MOSU 백엔드 API 문서에 오신 것을 환영합니다.

## 개요

MOSU API는 REST API 방식으로 구현되어 있으며, JSON 형태의 데이터를 주고받습니다.

### 서버 정보

-   **Base URL**: `https://api.mosuedu.com/api/v1`
-   **API 버전**: v1.0.0

### 인증

현재 API는 쿠키 기반 인증을 사용하고 있으며, 추후 JWT 토큰 기반 인증으로 변경될 예정입니다.

## API 그룹

### 사용자 관련 API

-   [인증 API](./auth-api) - 로그인, 회원가입, 토큰 재발급
-   [프로필 API](./profile-api) - 사용자 프로필 관리
-   [추천인 API](./recommender-api) - 추천인 등록 및 검증

### 신청 관련 API

-   [신청 API](./application-api) - 시험 신청 및 관리
-   [개별 신청 학교 API](./application-school-api) - 개별 학교 신청 관리

### 콘텐츠 관리 API

-   [공지사항 API](./notice-api) - 공지사항 CRUD
-   [문의 API](./inquiry-api) - 1:1 문의 관리
-   [FAQ API](./faq-api) - FAQ 관리
-   [이벤트 API](./event-api) - 이벤트 관리

### 관리자 API

-   [관리자 API](./admin-api) - 관리자 전용 데이터 조회 및 관리

### 기타 API

-   [결제 API](./payment-api) - 결제 처리
-   [학교 API](./school-api) - 학교 정보 관리
-   [파일 업로드 API](./file-api) - S3 파일 업로드

## 응답 형식

모든 API는 다음과 같은 공통 응답 형식을 사용합니다:

```json
{
    "status": 200,
    "message": "성공",
    "data": {
        // 실제 응답 데이터
    }
}
```

## 오류 처리

API 오류 시 다음과 같은 형태로 응답합니다:

```json
{
    "status": 400,
    "message": "오류 메시지",
    "data": null
}
```

## 페이징

목록 조회 API는 다음과 같은 페이징 파라미터를 사용합니다:

-   `page`: 페이지 번호 (기본값: 0)
-   `size`: 페이지 크기 (기본값: 10)
