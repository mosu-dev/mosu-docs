# 개별 신청 학교 API

개별 학교 신청 관리 관련 API입니다.

## 신청 상세 조회

### GET /applicationschool/{applicationSchoolId}

신청한 학교의 상세 정보를 조회합니다.

**Parameters:**

-   `applicationSchoolId` (path, required): 신청 학교 ID
-   `userId` (query, optional): 사용자 ID

**Response:**

```json
{
    "status": 200,
    "message": "상세 조회 성공",
    "data": {
        "applicationSchoolId": 1,
        "area": "대치",
        "examDate": "2025-08-10",
        "schoolName": "대치중학교",
        "lunch": "신청 안 함",
        "examinationNumber": "20250001",
        "subjects": ["생활과 윤리", "정치와 법"]
    }
}
```

**Response Fields:**

-   `applicationSchoolId` (integer): 신청 학교 ID
-   `area` (string): 지역 이름
-   `examDate` (string): 시험 날짜
-   `schoolName` (string): 학교 이름
-   `lunch` (string): 도시락 신청 여부
-   `examinationNumber` (string): 수험 번호
-   `subjects` (array): 신청 과목 목록

---

## 수험표 조회

### GET /applicationschool/{applicationSchoolId}/admissionticket

신청한 학교에 대한 수험표를 조회합니다.

**Parameters:**

-   `applicationSchoolId` (path, required): 신청 학교 ID
-   `userId` (query, optional): 사용자 ID

**Response:**

```json
{
    "status": 200,
    "message": "수험표 조회 성공",
    "data": {
        "admissionTicketImageUrl": "https://s3.amazonaws.com/bucket/admission/2025-00001.jpg",
        "userName": "홍길동",
        "birth": "2005-05-10",
        "examinationNumber": "20250001",
        "subjects": ["생명과학", "지구과학"],
        "schoolName": "대치중학교"
    }
}
```

**Response Fields:**

-   `admissionTicketImageUrl` (string): 수험표 이미지 URL
-   `userName` (string): 응시자 이름
-   `birth` (string): 생년월일
-   `examinationNumber` (string): 수험 번호
-   `subjects` (array): 응시 과목 목록
-   `schoolName` (string): 응시 학교명

---

## 신청 과목 수정

### PUT /applicationschool/{applicationSchoolId}/subjects

신청한 학교에 대해 과목 목록을 수정합니다.

**Parameters:**

-   `applicationSchoolId` (path, required): 신청 학교 ID
-   `userId` (query, required): 사용자 ID

**Request Body:**

```json
{
    "subjects": ["LIFE_AND_ETHICS", "ETHICS_AND_IDEOLOGY"]
}
```

**Request Fields:**

-   `subjects` (array, required): 과목 목록 (중복 불가)

**Response:**

```json
{
    "status": 200,
    "message": "과목 수정 성공",
    "data": {
        "applicationSchoolId": 1,
        "area": "대치",
        "examDate": "2025-08-10",
        "schoolName": "대치중학교",
        "lunch": "신청 안 함",
        "examinationNumber": "20250001",
        "subjects": ["생활과 윤리", "윤리와 사상"]
    }
}
```

---

## 신청 학교 취소

### DELETE /applicationschool/{applicationSchoolId}/cancel

사용자가 신청한 학교를 취소 요청합니다.

**Parameters:**

-   `applicationSchoolId` (path, required): 신청 학교 ID
-   `userId` (query, required): 사용자 ID

**Request Body:**

```json
{
    "reason": "개인 사정으로 인해 응시가 어려움",
    "refundAgreed": true,
    "agreedAt": "2025-07-13T10:30:00Z"
}
```

**Request Fields:**

-   `reason` (string, optional): 환불 사유
-   `refundAgreed` (boolean, optional): 환불 정책 동의 여부
-   `agreedAt` (string, optional): 환불 동의 시각 (ISO 8601 형식)

**Response:**

```json
{
    "status": 200,
    "message": "취소 및 환불 처리 성공",
    "data": null
}
```
