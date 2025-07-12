# 프로필 API

사용자 프로필 관리 관련 API입니다.

::: warning
본인 인증 관련 로직이 추가될 예정입니다.
:::

## 프로필 등록

### POST /profile

회원가입 이후 처음으로 프로필을 등록합니다.

**Parameters:**

-   `userId` (query, required): 사용자 ID

**Request Body:**

```json
{
    "userName": "홍길동",
    "birth": "2005-05-10",
    "gender": "MALE",
    "phoneNumber": "010-1234-5678",
    "email": "hong@example.com",
    "education": "ENROLLED",
    "schoolInfo": {
        "schoolName": "서울고등학교",
        "zipcode": "12345",
        "street": "서울특별시 강남구 테헤란로 123"
    },
    "grade": "HIGH_1"
}
```

**Request Fields:**

-   `userName` (string, required): 사용자 이름
-   `birth` (string, required): 생년월일 (yyyy-MM-dd 형식)
-   `gender` (string, required): 성별 (MALE 또는 FEMALE)
-   `phoneNumber` (string, required): 휴대폰 번호
-   `email` (string, optional): 이메일 주소
-   `education` (string, optional): 학력 (ENROLLED: 재학, GRADUATED: 졸업)
-   `schoolInfo` (object, optional): 학교 정보
    -   `schoolName` (string): 학교 이름
    -   `zipcode` (string): 우편번호
    -   `street` (string): 도로명 주소
-   `grade` (string, optional): 학년 (HIGH_1, HIGH_2, HIGH_3)

**Response:**

```json
{
    "status": 201,
    "message": "프로필 등록 성공",
    "data": null
}
```

---

## 프로필 조회

### GET /profile

회원이 자신의 프로필 정보를 조회합니다.

**Parameters:**

-   `userId` (query, required): 회원 ID

**Response:**

```json
{
    "status": 200,
    "message": "프로필 조회 성공",
    "data": {
        "profileId": 1,
        "userName": "홍길동",
        "birth": "2005-05-10",
        "gender": "MALE",
        "phoneNumber": "010-1234-5678",
        "email": "hong@example.com",
        "education": "ENROLLED",
        "schoolInfo": {
            "schoolName": "서울고등학교",
            "zipcode": "12345",
            "street": "서울특별시 강남구 테헤란로 123"
        },
        "grade": "HIGH_1"
    }
}
```

**Response Fields:**

-   `profileId` (integer): 프로필 ID
-   `userName` (string): 사용자 이름
-   `birth` (string): 생년월일
-   `gender` (string): 성별 (MALE, FEMALE, PENDING)
-   `phoneNumber` (string): 휴대폰 번호
-   `email` (string): 이메일 주소
-   `education` (string): 학력 (ENROLLED, GRADUATED)
-   `schoolInfo` (object): 학교 정보
-   `grade` (string): 학년 (HIGH_1, HIGH_2, HIGH_3)

---

## 프로필 수정

### PUT /profile

회원이 자신의 프로필을 수정합니다.

**Parameters:**

-   `userId` (query, required): 회원 ID

**Request Body:**

```json
{
    "userName": "홍길동",
    "birth": "2005-05-10",
    "gender": "MALE",
    "phoneNumber": "01012345678",
    "email": "hong@example.com",
    "education": "HIGH_SCHOOL",
    "schoolInfo": {
        "schoolName": "서울고등학교",
        "zipcode": "12345",
        "street": "서울특별시 강남구 테헤란로 123"
    },
    "grade": "SECOND"
}
```

**Request Fields:**

-   `userName` (string, required): 사용자 이름
-   `birth` (string, required): 생년월일 (date 형식)
-   `gender` (string, required): 성별 (MALE 또는 FEMALE)
-   `phoneNumber` (string, required): 휴대폰 번호
-   `email` (string, optional): 이메일 주소
-   `education` (string, optional): 학력 정보 (ENROLLED, GRADUATED)
-   `schoolInfo` (object, optional): 학교 정보
-   `grade` (string, optional): 학년 (HIGH_1, HIGH_2, HIGH_3)

**Response:**

```json
{
    "status": 200,
    "message": "프로필 수정 성공",
    "data": null
}
```
