# FAQ API

FAQ 관리 관련 API입니다.

## FAQ 등록

### POST /faq

관리자가 새로운 FAQ를 등록합니다.

**Request Body:**

```json
{
    "question": "서비스 이용에 대해 궁금합니다.",
    "answer": "서비스는 로그인 후 사용 가능합니다.",
    "author": "관리자",
    "userId": 1,
    "attachments": [
        {
            "fileName": "faq_guide.pdf",
            "s3Key": "faq/2025/guide.pdf"
        }
    ]
}
```

**Request Fields:**

-   `question` (string, required): FAQ 질문
-   `answer` (string, required): FAQ 답변
-   `author` (string, required): 작성자 이름
-   `userId` (integer, optional): 작성자 ID (추후 토큰에서 추출 예정)
-   `attachments` (array, optional): 첨부파일 리스트
    -   `fileName` (string): 파일 이름
    -   `s3Key` (string): S3 키

**Response:**

```json
{
    "status": 201,
    "message": "FAQ 등록 성공",
    "data": null
}
```

---

## FAQ 목록 조회

### GET /faq/list

전체 FAQ 목록을 페이징하여 조회합니다.

**Parameters:**

-   `page` (query, optional): 페이지 번호 (기본값: 0)
-   `size` (query, optional): 페이지 크기 (기본값: 10)

**Response:**

```json
{
    "status": 200,
    "message": "FAQ 목록 조회 성공",
    "data": [
        {
            "id": 1,
            "question": "서비스 이용에 대해 궁금합니다.",
            "answer": "서비스는 로그인 후 사용 가능합니다.",
            "createdAt": "2025-07-10",
            "attachments": [
                {
                    "fileName": "faq_guide.pdf",
                    "url": "https://your-bucket.s3.amazonaws.com/faq/2025/guide.pdf",
                    "s3Key": "faq/2025/guide.pdf"
                }
            ]
        }
    ]
}
```

**Response Fields:**

-   `id` (integer): FAQ ID
-   `question` (string): 질문
-   `answer` (string): 답변
-   `createdAt` (string): 작성 일자 (yyyy-MM-dd)
-   `attachments` (array): 첨부파일 리스트

---

## FAQ 상세 조회

### GET /faq/{faqId}

FAQ ID를 기반으로 상세 내용을 조회합니다.

**Parameters:**

-   `faqId` (path, required): FAQ ID

**Response:**

```json
{
    "status": 200,
    "message": "FAQ 상세 조회 성공",
    "data": {
        "id": 1,
        "question": "서비스 이용에 대해 궁금합니다.",
        "answer": "서비스는 로그인 후 사용 가능합니다.",
        "createdAt": "2025-07-10",
        "attachments": [
            {
                "fileName": "faq_guide.pdf",
                "url": "https://your-bucket.s3.amazonaws.com/faq/2025/guide.pdf",
                "s3Key": "faq/2025/guide.pdf"
            }
        ]
    }
}
```

---

## FAQ 수정

### PUT /faq/{faqId}

기존 FAQ 내용을 수정합니다.

**Parameters:**

-   `faqId` (path, required): 수정할 FAQ ID

**Request Body:**

```json
{
    "question": "서비스 사용에 대해 알고 싶습니다.",
    "answer": "로그인 후 전체 메뉴가 노출됩니다.",
    "author": "관리자",
    "attachments": [
        {
            "fileName": "updated_faq_guide.pdf",
            "s3Key": "faq/2025/updated_guide.pdf"
        }
    ]
}
```

**Request Fields:**

-   `question` (string, required): 수정할 질문 내용
-   `answer` (string, required): 수정할 답변 내용
-   `author` (string, required): 작성자 이름
-   `attachments` (array, optional): 첨부파일 리스트

**Response:**

```json
{
    "status": 200,
    "message": "FAQ 수정 성공",
    "data": null
}
```

---

## FAQ 삭제

### DELETE /faq/{faqId}

FAQ ID를 기반으로 게시글을 삭제합니다.

**Parameters:**

-   `faqId` (path, required): 삭제할 FAQ ID

**Response:**

```json
{
    "status": 200,
    "message": "FAQ 삭제 성공",
    "data": null
}
```
