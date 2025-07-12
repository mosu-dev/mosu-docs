# 1:1 문의 API

1:1 문의 관리 관련 API입니다.

## 1:1 문의 등록

### POST /inquiry

사용자가 새로운 1:1 문의를 등록합니다.

**Request Body:**

```json
{
    "title": "서비스 이용 관련 질문입니다.",
    "content": "포인트는 어떻게 사용하나요?",
    "userId": 12,
    "author": "홍길동",
    "attachments": [
        {
            "fileName": "question_screenshot.png",
            "s3Key": "inquiries/2025/screenshot.png"
        }
    ]
}
```

**Request Fields:**

-   `title` (string, required): 문의 제목
-   `content` (string, required): 문의 내용
-   `userId` (integer, optional): 작성자 ID (추후 토큰에서 추출하도록 변경 예정)
-   `author` (string, optional): 작성자
-   `attachments` (array, optional): 첨부파일 목록
    -   `fileName` (string): 파일 이름
    -   `s3Key` (string): S3 키

**Response:**

```json
{
    "status": 201,
    "message": "질문 등록 성공",
    "data": null
}
```

---

## 1:1 문의 목록 조회

### GET /inquiry/list

조건에 맞는 1:1 문의 목록을 페이징하여 조회합니다.

**Parameters:**

-   `status` (query, optional): 문의 상태 (PENDING, COMPLETED)
-   `sort` (query, optional): 정렬 기준 필드 (기본값: "id")
-   `asc` (query, optional): 오름차순 정렬 여부 (기본값: true)

**Response:**

```json
{
    "status": 200,
    "message": "질문 목록 조회 성공",
    "data": {
        "totalElements": 10,
        "totalPages": 1,
        "size": 10,
        "content": [
            {
                "id": 1,
                "title": "서비스 이용 관련 질문입니다.",
                "content": "포인트는 어떻게 사용하나요?",
                "author": "홍길동",
                "status": "PENDING",
                "createdAt": "2025-07-10"
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

-   `totalElements` (integer): 전체 요소 수
-   `totalPages` (integer): 전체 페이지 수
-   `size` (integer): 페이지 크기
-   `content` (array): 문의 목록
-   `number` (integer): 현재 페이지 번호
-   `first` (boolean): 첫 번째 페이지 여부
-   `last` (boolean): 마지막 페이지 여부
-   `empty` (boolean): 빈 페이지 여부

---

## 1:1 문의 상세 조회

### GET /inquiry/{postId}

특정 1:1 문의의 상세 내용을 조회합니다.

**Parameters:**

-   `postId` (path, required): 조회할 문의의 ID

**Response:**

```json
{
    "status": 200,
    "message": "질문 상세 조회 성공",
    "data": {
        "id": 1,
        "title": "서비스 이용 관련 질문입니다.",
        "content": "포인트는 어떻게 사용하나요?",
        "author": "홍길동",
        "status": "완료",
        "createdAt": "2025-07-10",
        "attachments": [
            {
                "fileName": "question_screenshot.png",
                "url": "https://bucket.s3.amazonaws.com/.../screenshot.png",
                "s3Key": "inquiries/2025/screenshot.png"
            }
        ],
        "answer": {
            "id": 1,
            "title": "Re: 서비스 이용 관련 질문입니다.",
            "content": "포인트는 마이페이지에서 확인하실 수 있습니다.",
            "createdAt": "2025-07-10T10:00:00",
            "attachments": []
        }
    }
}
```

**Response Fields:**

-   `id` (integer): 문의 ID
-   `title` (string): 문의 제목
-   `content` (string): 문의 내용
-   `author` (string): 작성자
-   `status` (string): 문의 상태 (미응답, 완료)
-   `createdAt` (string): 문의 등록일
-   `attachments` (array): 첨부파일 목록
-   `answer` (object): 답변 정보

---

## 1:1 문의 삭제

### DELETE /inquiry/{postId}

특정 1:1 문의를 삭제합니다.

**Parameters:**

-   `postId` (path, required): 삭제할 문의의 ID

**Response:**

```json
{
    "status": 200,
    "message": "질문 삭제 성공",
    "data": null
}
```

---

## 문의 답변 등록 (관리자용)

### POST /inquiry/{postId}/answer

특정 문의에 대한 답변을 등록합니다.

**Parameters:**

-   `postId` (path, required): 답변을 등록할 문의의 ID

**Request Body:**

```json
{
    "title": "Re: 서비스 이용 관련 질문입니다.",
    "content": "포인트는 마이페이지에서 확인하실 수 있습니다.",
    "userId": 12,
    "attachments": []
}
```

**Request Fields:**

-   `title` (string, required): 답변 제목
-   `content` (string, required): 답변 내용
-   `userId` (integer, optional): 작성자 ID (추후 토큰에서 추출하도록 변경 예정)
-   `attachments` (array, optional): 첨부파일 목록

**Response:**

```json
{
    "status": 200,
    "message": "답변 등록 성공",
    "data": null
}
```

---

## 문의 답변 수정 (관리자용)

### PUT /inquiry/{postId}/answer

특정 문의에 대한 답변을 수정합니다.

**Parameters:**

-   `postId` (path, required): 답변을 수정할 문의의 ID

**Request Body:**

```json
{
    "title": "Re: 서비스 이용 관련 질문입니다.",
    "content": "포인트는 마이페이지 > 포인트 관리에서 확인하실 수 있습니다.",
    "attachments": []
}
```

**Request Fields:**

-   `title` (string, optional): 문의 제목
-   `content` (string, optional): 문의 내용
-   `attachments` (array, optional): 첨부파일 목록

**Response:**

```json
{
    "status": 200,
    "message": "답변 수정 성공",
    "data": null
}
```

---

## 문의 답변 삭제 (관리자용)

### DELETE /inquiry/{postId}/answer

특정 문의에 대한 답변을 삭제합니다.

**Parameters:**

-   `postId` (path, required): 답변을 삭제할 문의의 ID

**Response:**

```json
{
    "status": 200,
    "message": "답변 삭제 성공",
    "data": null
}
```
