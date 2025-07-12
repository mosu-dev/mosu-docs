# 신청 API

시험 신청 및 관리 관련 API입니다.

## 신청 등록

### POST /application

사용자가 시험 신청을 진행합니다.

**Parameters:**

-   `userId` (query, required): 사용자 ID

**Request Body:**

```json
{
    "admissionTicket": {
        "fileName": "admission_ticket.jpg",
        "s3Key": "admission/2025/user123/ticket.jpg"
    },
    "guardianPhoneNumber": "010-1234-5678",
    "schools": [
        {
            "schoolName": "대치중학교",
            "area": "DAECHI",
            "examDate": "2025-08-10",
            "lunch": "NONE",
            "subjects": ["PHYSICS_1", "ETHICS_AND_IDEOLOGY"]
        }
    ],
    "agreementRequest": {
        "agreedToNotices": true,
        "agreedToRefundPolicy": true
    }
}
```

**Request Fields:**

-   `admissionTicket` (object, optional): 수험표 파일 정보
    -   `fileName` (string): 파일 이름
    -   `s3Key` (string): S3 키
-   `guardianPhoneNumber` (string, optional): 보호자 전화번호 (010-XXXX-XXXX 형식)
-   `schools` (array, required): 신청 학교 목록
    -   `schoolName` (string, required): 학교 이름
    -   `area` (string, optional): 지역 코드 (DAECHI, NOWON, MOKDONG)
    -   `examDate` (string, required): 시험 날짜 (yyyy-MM-dd)
    -   `lunch` (string, required): 도시락 여부 (NONE 또는 OPTION1)
    -   `subjects` (array, optional): 응시 과목 목록
-   `agreementRequest` (object, required): 약관 동의 정보
    -   `agreedToNotices` (boolean): 공지사항 확인 및 동의 여부
    -   `agreedToRefundPolicy` (boolean): 환불 정책 동의 여부

**과목 코드:**

-   `KOREAN`: 국어
-   `MATH`: 수학
-   `ENGLISH`: 영어
-   `KOREAN_HISTORY`: 한국사
-   `LIFE_AND_ETHICS`: 생활과 윤리
-   `ETHICS_AND_IDEOLOGY`: 윤리와 사상
-   `KOREAN_GEOGRAPHY`: 한국지리
-   `WORLD_GEOGRAPHY`: 세계지리
-   `EAST_ASIAN_HISTORY`: 동아시아사
-   `WORLD_HISTORY`: 세계사
-   `ECONOMICS`: 경제
-   `POLITICS_AND_LAW`: 정치와 법
-   `SOCIETY_AND_CULTURE`: 사회·문화
-   `PHYSICS_1`: 물리학Ⅰ
-   `CHEMISTRY_1`: 화학Ⅰ
-   `BIOLOGY_1`: 생명과학Ⅰ
-   `EARTH_SCIENCE_1`: 지구과학Ⅰ
-   `PHYSICS_2`: 물리학Ⅱ
-   `CHEMISTRY_2`: 화학Ⅱ
-   `BIOLOGY_2`: 생명과학Ⅱ
-   `EARTH_SCIENCE_2`: 지구과학Ⅱ

**Response:**

```json
{
    "status": 200,
    "message": "신청 성공",
    "data": {
        "applicationId": 1,
        "schools": [
            {
                "applicationSchoolId": 1,
                "area": "대치",
                "examDate": "2025-08-10",
                "schoolName": "대치중학교",
                "lunch": "신청 안 함",
                "examinationNumber": "20250001",
                "subjects": ["생활과 윤리", "정치와 법"]
            }
        ]
    }
}
```

**Response Fields:**

-   `applicationId` (integer): 신청 ID
-   `schools` (array): 신청 학교 목록
    -   `applicationSchoolId` (integer): 신청 학교 ID
    -   `area` (string): 지역 이름
    -   `examDate` (string): 시험 날짜
    -   `schoolName` (string): 학교 이름
    -   `lunch` (string): 도시락 신청 여부
    -   `examinationNumber` (string): 수험 번호
    -   `subjects` (array): 신청 과목 목록

---

## 전체 신청 내역 조회

### GET /application

사용자의 전체 신청 내역을 조회합니다.

**Parameters:**

-   `userId` (query, required): 사용자 ID

**Response:**

```json
{
    "status": 200,
    "message": "신청 내역 조회 성공",
    "data": {
        "applicationId": 1,
        "schools": [
            {
                "applicationSchoolId": 1,
                "area": "대치",
                "examDate": "2025-08-10",
                "schoolName": "대치중학교",
                "lunch": "신청 안 함",
                "examinationNumber": "20250001",
                "subjects": ["생활과 윤리", "정치와 법"]
            }
        ]
    }
}
```
