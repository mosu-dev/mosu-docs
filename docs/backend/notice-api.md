# 공지사항 API

공지사항 관리 관련 API입니다.

## 공지사항 등록

### POST /notice

관리자가 새로운 공지사항을 등록합니다.

**Request Body:**

```json
{
    "title": "서비스 점검 안내",
    "content": "6월 30일 오전 2시부터 서비스 점검이 진행됩니다.",
    "author": "관리자",
    "userId": 1,
    "attachments": [
        {
            "fileName": "notice_attachment.pdf",
            "s3Key": "notices/2025/attachment.pdf"
        }
    ]
}
```

**Request Fields:**

-   `title` (string, required): 공지사항 제목
-   `content` (string, required): 공지사항 본문 내용
-   `author` (string, required): 작성자 이름
-   `userId` (integer, optional): 작성자 ID (추후 토큰 기반 자동 추출 예정)
-   `attachments` (array, optional): 첨부파일 리스트
    -   `fileName` (string): 파일 이름
    -   `s3Key` (string): S3 키

**Response:**

```json
{
    "status": 201,
    "message": "공지사항 등록 성공",
    "data": null
}
```

---

## 공지사항 목록 조회

### GET /notice/list

공지사항 리스트를 페이징하여 조회합니다.

**Parameters:**

-   `page` (query, optional): 페이지 번호 (기본값: 0)
-   `size` (query, optional): 페이지 크기 (기본값: 10)

**Response:**

```json
{
    "status": 200,
    "message": "공지사항 목록 조회 성공",
    "data": {
        "id": 1,
        "title": "서비스 점검 안내",
        "content": "6월 30일 오전 2시부터 서비스 점검이 진행됩니다.",
        "author": "관리자",
        "createdAt": "2025-07-08",
        "attachments": [
            {
                "fileName": "event-banner.png",
                "url": "https://your-bucket.s3.amazonaws.com/event/2025/banner.png",
                "s3Key": "event/2025/banner.png"
            }
        ]
    }
}
```

**Response Fields:**

-   `id` (integer): 공지사항 ID
-   `title` (string): 공지사항 제목
-   `content` (string): 공지사항 내용
-   `author` (string): 작성자 이름
-   `createdAt` (string): 작성일시 (yyyy-MM-dd)
-   `attachments` (array): 첨부파일 목록

---

## 공지사항 상세 조회

### GET /notice/{noticeId}

특정 공지사항의 상세 정보를 조회합니다.

**Parameters:**

-   `noticeId` (path, required): 조회할 공지사항 ID

**Response:**

```json
{
    "status": 200,
    "message": "공지사항 상세 조회 성공",
    "data": {
        "id": 1,
        "title": "서비스 점검 안내",
        "content": "6월 30일 오전 2시부터 서비스 점검이 진행됩니다.",
        "author": "관리자",
        "createdAt": "2025-07-08",
        "attachments": [
            {
                "fileName": "service_guide.pdf",
                "url": "https://bucket.s3.amazonaws.com/.../service_guide.pdf",
                "s3Key": "notices/2025/service_guide.pdf"
            }
        ]
    }
}
```

---

## 공지사항 수정

### PUT /notice/{noticeId}

특정 공지사항을 수정합니다. (관리자 권한)

**Parameters:**

-   `noticeId` (path, required): 수정할 공지사항 ID

**Request Body:**

```json
{
    "title": "시스템 점검 일정 변경 안내",
    "content": "점검 일정이 7월 10일로 변경되었습니다.",
    "author": "관리자",
    "userId": 42,
    "attachments": [
        {
            "fileName": "updated_notice.pdf",
            "s3Key": "notices/2025/updated_notice.pdf"
        }
    ]
}
```

**Request Fields:**

-   `title` (string, required): 공지사항 제목
-   `content` (string, required): 공지사항 내용
-   `author` (string, required): 작성자 이름
-   `userId` (integer, optional): 작성자 ID (토큰에서 추출 예정)
-   `attachments` (array, optional): 첨부파일 목록

**Response:**

```json
{
    "status": 200,
    "message": "공지사항 수정 성공",
    "data": null
}
```

---

## 공지사항 삭제

### DELETE /notice/{noticeId}

특정 공지사항을 삭제합니다. (관리자 권한)

**Parameters:**

-   `noticeId` (path, required): 삭제할 공지사항 ID

**Response:**

```json
{
    "status": 200,
    "message": "공지사항 삭제 성공",
    "data": null
}
```
