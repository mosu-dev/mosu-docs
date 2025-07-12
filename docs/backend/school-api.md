# 학교 API

학교 정보 관리 관련 API입니다.

## 학교 목록 조회

### GET /school

전체 학교 목록을 조회합니다.

**Response:**

```json
{
    "status": 200,
    "message": "학교 목록 조회 성공",
    "data": [
        {
            "id": 1,
            "schoolName": "모수고등학교",
            "area": "DAECHI",
            "address": {
                "zipcode": "12345",
                "street": "서울특별시 강남구 테헤란로 123",
                "detail": "202호"
            },
            "examDate": "2025-11-20",
            "capacity": 300
        }
    ]
}
```

**Response Fields:**

-   `id` (integer): 학교 ID
-   `schoolName` (string): 학교 이름
-   `area` (string): 지역
-   `address` (object): 주소 정보
    -   `zipcode` (string): 우편번호
    -   `street` (string): 도로명 주소
    -   `detail` (string): 상세 주소
-   `examDate` (string): 시험 날짜
-   `capacity` (integer): 수용 인원

---

## 학교 등록

### POST /school

새로운 학교를 등록합니다.

**Request Body:**

```json
{
    "schoolName": "모수고등학교",
    "area": "DAECHI",
    "address": {
        "zipcode": "12345",
        "street": "서울특별시 강남구 테헤란로 123",
        "detail": "202호"
    },
    "examDate": "2025-11-20",
    "capacity": 300
}
```

**Request Fields:**

-   `schoolName` (string, required): 학교 이름
-   `area` (string, required): 지역 (DAECHI, MOKDONG, NOWON)
-   `address` (object, required): 주소 정보
    -   `zipcode` (string, optional): 우편번호
    -   `street` (string, optional): 도로명 주소
    -   `detail` (string, optional): 상세 주소
-   `examDate` (string, required): 시험/입학 시험 날짜 (yyyy-MM-dd)
-   `capacity` (integer, required): 수용 인원

**지역 코드:**

-   `DAECHI`: 대치
-   `MOKDONG`: 목동
-   `NOWON`: 노원

**Response:**

```json
{
    "status": 200,
    "message": "학교 등록 성공",
    "data": null
}
```

## 학교 정보

### 지역별 학교 분류

MOSU는 다음 지역에서 시험을 운영합니다:

-   **대치 (DAECHI)**: 서울 강남구 대치동 일대
-   **목동 (MOKDONG)**: 서울 양천구 목동 일대
-   **노원 (NOWON)**: 서울 노원구 일대

### 학교 정보 관리

학교 정보는 다음 정보들을 포함합니다:

-   **기본 정보**: 학교명, 지역, 주소
-   **시험 정보**: 시험 일자, 수용 인원
-   **위치 정보**: 우편번호, 도로명 주소, 상세 주소
