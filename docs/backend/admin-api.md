# 관리자 API

관리자 전용 데이터 조회 및 관리 API입니다.

## 학생 목록 조회

### GET /admin/students

필터 조건에 따른 학생 목록을 페이징하여 조회합니다.

**Parameters:**

-   `filter` (query, required): 학생 목록 조회 필터
    -   `name` (string, optional): 이름 필터
    -   `phone` (string, optional): 전화번호 필터
    -   `order` (string, optional): 정렬 순서 (desc 또는 asc, 기본값: desc)

**Request Example:**

```
GET /admin/students?filter.name=홍길동&filter.phone=01012345678&filter.order=desc
```

**Response:**

```json
{
    "status": 200,
    "message": "학생 목록 조회 성공",
    "data": {
        "name": "홍길동",
        "birthDate": "2006-04-12",
        "phoneNumber": "010-1234-5678",
        "gender": "남자",
        "educationLevel": "ENROLLED",
        "schoolName": "서울고등학교",
        "grade": "HIGH_1",
        "examCount": 2
    }
}
```

**Response Fields:**

-   `name` (string): 이름
-   `birthDate` (string): 생년월일 (yyyy-MM-dd 형식)
-   `phoneNumber` (string): 전화번호
-   `gender` (string): 성별
-   `educationLevel` (string): 학력
-   `schoolName` (string): 학교명
-   `grade` (string): 학년
-   `examCount` (integer): 시험 응시 횟수

---

## 신청 목록 조회

### GET /admin/applications

필터 조건에 따른 신청 목록을 페이징하여 조회합니다.

**Parameters:**

-   `filter` (query, required): 신청 목록 조회 필터
    -   `name` (string, optional): 이름 필터
    -   `phone` (string, optional): 전화번호 필터
    -   `applicationDate` (string, optional): 신청 일자 필터 (yyyy-MM-dd)

**Request Example:**

```
GET /admin/applications?filter.name=홍길동&filter.phone=01012345678&filter.applicationDate=2025-07-10
```

**Response:**

```json
{
    "status": 200,
    "message": "신청 목록 조회 성공",
    "data": {
        "paymentNumber": "P3135455",
        "examinationNumber": "20250001",
        "name": "홍길동",
        "gender": "MALE",
        "birth": "2005-05-10",
        "phoneNumber": "010-1234-5678",
        "guardianPhoneNumber": "010-9876-5432",
        "educationLevel": "GRADUATED",
        "schoolName": "대치중학교",
        "grade": "HIGH_3",
        "lunch": "NONE",
        "subjects": ["생활과 윤리", "정치와 법"],
        "examSchoolName": "서울고등학교",
        "examDate": "2025-08-10",
        "admissionTicketImage": "https://s3.amazonaws.com/bucket/admission/2025-00001.jpg",
        "paymentStatus": "DONE",
        "paymentMethod": "CARD",
        "applicationDate": "2025-07-10T10:30:00Z",
        "admissionTicket": {
            "admissionTicketImageUrl": "https://s3.amazonaws.com/bucket/admission/2025-00001.jpg",
            "userName": "홍길동",
            "birth": "2005-05-10",
            "examinationNumber": "20250001",
            "subjects": ["생명과학", "지구과학"],
            "schoolName": "대치중학교"
        }
    }
}
```

**Response Fields:**

-   `paymentNumber` (string): 결제 번호
-   `examinationNumber` (string): 수험 번호
-   `name` (string): 수험자 이름
-   `gender` (string): 성별 (MALE, FEMALE, PENDING)
-   `birth` (string): 생년월일
-   `phoneNumber` (string): 전화번호
-   `guardianPhoneNumber` (string): 보호자 전화번호
-   `educationLevel` (string): 학력 (ENROLLED, GRADUATED)
-   `schoolName` (string): 학교명
-   `grade` (string): 학년 (HIGH_1, HIGH_2, HIGH_3)
-   `lunch` (string): 도시락 신청 여부
-   `subjects` (array): 응시 과목 목록
-   `examSchoolName` (string): 시험 학교 이름
-   `examDate` (string): 시험 일자
-   `admissionTicketImage` (string): 수험표 이미지 URL
-   `paymentStatus` (string): 결제 상태
-   `paymentMethod` (string): 결제 방법
-   `applicationDate` (string): 신청 일시
-   `admissionTicket` (object): 수험표 정보

**결제 상태 (paymentStatus):**

-   `PREPARE`: 준비 중
-   `DONE`: 완료
-   `EXPIRED`: 만료
-   `ABORTED`: 중단
-   `CANCELLED_DONE`: 취소 완료
-   `CANCELLED_ABORTED`: 취소 중단

**결제 방법 (paymentMethod):**

-   `EASY_PAY`: 간편결제
-   `CARD`: 카드
-   `VIRTUAL_ACCOUNT`: 가상계좌

---

## 학교별 도시락 신청 수 조회

### GET /admin/lunches

학교별 도시락 신청 수를 조회합니다.

**Response:**

```json
{
    "status": 200,
    "message": "도시락 신청 수 조회 성공",
    "data": {
        "schoolName": "서울고등학교",
        "count": 42
    }
}
```

**Response Fields:**

-   `schoolName` (string): 학교 이름
-   `count` (integer): 도시락 신청 수

---

## 환불 목록 조회

### GET /admin/refunds

환불 목록을 페이징하여 조회합니다.

**Parameters:**

-   `pageable` (query, required): 페이징 정보
    -   `page` (integer): 페이지 번호
    -   `size` (integer): 페이지 크기
    -   `sort` (array): 정렬 조건

**Response:**

```json
{
    "status": 200,
    "message": "환불 목록 조회 성공",
    "data": {
        "totalElements": 10,
        "totalPages": 1,
        "size": 10,
        "content": [
            {
                "refundId": 1,
                "examNumber": "20250001",
                "name": "홍길동",
                "phone": "010-1234-5678",
                "requestedAt": "2025-07-10T10:30:00Z",
                "completedAt": "2025-07-10T15:30:00Z",
                "paymentMethod": "CARD",
                "reason": "개인 사정으로 인한 취소"
            }
        ],
        "number": 0,
        "first": true,
        "last": true,
        "empty": false
    }
}
```

**Response Fields:**

-   `refundId` (integer): 환불 ID
-   `examNumber` (string): 수험 번호
-   `name` (string): 이름
-   `phone` (string): 전화번호
-   `requestedAt` (string): 환불 요청 일시
-   `completedAt` (string): 환불 완료 일시
-   `paymentMethod` (string): 결제 방법
-   `reason` (string): 환불 사유

---

## 학생 정보 엑셀 다운로드

### GET /admin/excel/students

전체 학생 정보를 엑셀 파일로 다운로드합니다.

**Response:**
바이너리 데이터 (엑셀 파일)

**Response Headers:**

-   `Content-Type`: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
-   `Content-Disposition`: `attachment; filename="students.xlsx"`

---

## 신청 목록 엑셀 다운로드

### GET /admin/excel/applications

전체 신청 목록을 엑셀 파일로 다운로드합니다.

**Response:**
바이너리 데이터 (엑셀 파일)

**Response Headers:**

-   `Content-Type`: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
-   `Content-Disposition`: `attachment; filename="applications.xlsx"`
