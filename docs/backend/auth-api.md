# 인증 API

사용자 로그인, 회원가입, 토큰 재발급 관련 API입니다.

## 회원가입

### POST /auth/signup

사용자가 새로운 계정을 생성합니다.

**Request Body:**

```json
{
    "id": "mosu12370",
    "password": "Mosu!1234",
    "serviceTermRequest": {
        "agreedToTermsOfService": true,
        "agreedToPrivacyPolicy": true,
        "agreedToMarketing": false
    }
}
```

**Request Fields:**

-   `id` (string, required): 로그인 ID
-   `password` (string, required): 비밀번호 (8~20자의 영문 대/소문자, 숫자, 특수문자 포함)
-   `serviceTermRequest` (object, optional): 약관 동의 정보
    -   `agreedToTermsOfService` (boolean): 이용약관 동의 여부 (필수)
    -   `agreedToPrivacyPolicy` (boolean): 개인정보 수집 및 이용 동의 여부 (필수)
    -   `agreedToMarketing` (boolean): 마케팅 정보 수신 동의 여부 (선택)

**Response:**

```json
{
    "status": 200,
    "message": "회원가입 성공",
    "data": null
}
```

---

## 로그인

### POST /auth/login

사용자가 로그인합니다.

**Request Body:**

```json
{
    "id": "mosu12370",
    "password": "Mosu!1234"
}
```

**Request Fields:**

-   `id` (string, required): 로그인 ID
-   `password` (string, required): 비밀번호

**Response:**

```json
{
    "status": 200,
    "message": "로그인 성공",
    "data": {
        "grantType": "Bearer",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
}
```

**Response Fields:**

-   `grantType` (string): 토큰 타입
-   `accessToken` (string): 액세스 토큰
-   `refreshToken` (string): 리프레시 토큰

**참고:** 현재는 쿠키와 response 둘 다 반환하지만, 추후 쿠키로만 작동하도록 변경될 예정입니다.

---

## 토큰 재발급

### POST /auth/reissue

액세스 토큰을 재발급합니다.

**Response:**

```json
{
    "status": 200,
    "message": "토큰 재발급 성공",
    "data": {
        "grantType": "Bearer",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
}
```

**참고:** 이 API는 수정될 예정입니다.

---

## OAuth 로그인

### GET /oauth/login/{registrationId}

OAuth 로그인을 진행합니다.

**Parameters:**

-   `registrationId` (path, required): OAuth 제공자 ID (예: google, kakao)
-   `redirect` (query, required): 로그인 후 리다이렉트할 URL

**Response:**
리다이렉트 응답을 반환합니다.
