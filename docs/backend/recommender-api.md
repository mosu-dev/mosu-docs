# 추천인 API

추천인 등록 및 검증 관련 API입니다.

## 추천인 등록

### POST /recommender

추천인을 등록합니다. 전화번호로 등록 가능하며, 신청을 진행할 때 호출합니다.

**Parameters:**

-   `userId` (query, required): 사용자 ID (인증 인가 적용 시 변경 예정)

**Request Body:**

```json
{
    "phoneNumber": "010-8765-4322"
}
```

**Request Fields:**

-   `phoneNumber` (string, required): 추천인 전화번호 (010-XXXX-XXXX 형식)

**Response:**

```json
{
    "status": 200,
    "message": "추천인 등록 성공",
    "data": null
}
```

---

## 추천인 등록 검증

### GET /recommender/verify

추천인 등록 여부를 검증합니다. 추천인 등록은 딱 한 번만 가능합니다.

**Parameters:**

-   `userId` (query, required): 사용자 ID (인증 인가 적용 시 변경 예정)

**Response:**

```json
{
    "status": 200,
    "message": "추천인 등록 검증 성공",
    "data": true
}
```

**Response Data:**

-   `data` (boolean): 추천인 등록 여부
    -   `true`: 이미 추천인을 등록함
    -   `false`: 아직 추천인을 등록하지 않음

**사용 예시:**
이 API를 호출하여 사용자가 이미 추천인을 등록했는지 확인한 후, 등록하지 않은 경우에만 추천인 등록 폼을 표시합니다.
