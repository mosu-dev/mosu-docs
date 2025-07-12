# 이벤트 API

이벤트 관리 관련 API입니다.

## 이벤트 등록

### POST /event

관리자가 새로운 이벤트를 등록합니다.

**Request Body:**

```json
{
    "title": "여름방학 이벤트",
    "eventLink": "https://mosu.life/event/summer",
    "duration": {
        "startDate": "2025-07-01",
        "endDate": "2025-07-31"
    },
    "attachment": {
        "fileName": "event_banner.jpg",
        "s3Key": "events/2025/summer_banner.jpg"
    }
}
```

**Request Fields:**

-   `title` (string, required): 이벤트 제목
-   `eventLink` (string, optional): 이벤트 링크 URL
-   `duration` (object, optional): 이벤트 기간
    -   `startDate` (string): 이벤트 시작일 (yyyy-MM-dd)
    -   `endDate` (string): 이벤트 종료일 (yyyy-MM-dd)
-   `attachment` (object, optional): 첨부파일 정보
    -   `fileName` (string): 파일 이름
    -   `s3Key` (string): S3 키

**Response:**

```json
{
    "status": 201,
    "message": "이벤트 등록 성공",
    "data": null
}
```

---

## 이벤트 목록 조회

### GET /event/list

전체 이벤트 목록을 조회합니다.

**Response:**

```json
{
    "status": 200,
    "message": "이벤트 목록 조회 성공",
    "data": {
        "eventId": 1,
        "title": "여름방학 이벤트",
        "endDate": "2025-07-31",
        "eventLink": "https://mosu.life/event/summer",
        "attachment": {
            "fileName": "event-banner.png",
            "url": "https://your-bucket.s3.amazonaws.com/event/2025/banner.png",
            "s3Key": "event/2025/banner.png"
        }
    }
}
```

**Response Fields:**

-   `eventId` (integer): 이벤트 ID
-   `title` (string): 이벤트 제목
-   `endDate` (string): 이벤트 종료일
-   `eventLink` (string): 이벤트 링크 URL
-   `attachment` (object): 첨부파일 정보
    -   `fileName` (string): 파일명
    -   `url` (string): 파일 접근 URL
    -   `s3Key` (string): S3 키

---

## 이벤트 상세 조회

### GET /event/{eventId}

특정 이벤트의 상세 정보를 조회합니다.

**Parameters:**

-   `eventId` (path, required): 조회할 이벤트의 ID

**Response:**

```json
{
    "status": 200,
    "message": "이벤트 상세 조회 성공",
    "data": {
        "eventId": 1,
        "title": "여름방학 이벤트",
        "endDate": "2025-07-31",
        "eventLink": "https://mosu.life/event/summer",
        "attachment": {
            "fileName": "event-banner.png",
            "url": "https://your-bucket.s3.amazonaws.com/event/2025/banner.png",
            "s3Key": "event/2025/banner.png"
        }
    }
}
```

---

## 이벤트 수정

### PUT /event/{eventId}

관리자가 특정 이벤트 정보를 수정합니다.

**Parameters:**

-   `eventId` (path, required): 수정할 이벤트의 ID

**Request Body:**

```json
{
    "title": "여름방학 특별 이벤트",
    "eventLink": "https://mosu.life/event/summer-special",
    "duration": {
        "startDate": "2025-07-01",
        "endDate": "2025-08-15"
    },
    "attachment": {
        "fileName": "updated_event_banner.jpg",
        "s3Key": "events/2025/updated_banner.jpg"
    }
}
```

**Request Fields:**

-   `title` (string, required): 이벤트 제목
-   `eventLink` (string, optional): 이벤트 링크 URL
-   `duration` (object, optional): 이벤트 기간
-   `attachment` (object, optional): 첨부파일 정보

**Response:**

```json
{
    "status": 200,
    "message": "이벤트 수정 성공",
    "data": null
}
```

---

## 이벤트 삭제

### DELETE /event/{eventId}

관리자가 특정 이벤트를 삭제합니다.

**Parameters:**

-   `eventId` (path, required): 삭제할 이벤트의 ID

**Response:**

```json
{
    "status": 200,
    "message": "이벤트 삭제 성공",
    "data": null
}
```
