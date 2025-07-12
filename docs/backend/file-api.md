# 파일 업로드 API

S3 파일 업로드 관련 API입니다.

## 파일 업로드

### POST /s3

S3에 파일을 업로드합니다.

**Parameters:**

-   `folderName` (query, optional): 폴더명 (기본값: "temp")

**Request Body:**

```json
{
    "file": "<binary_data>"
}
```

**Request Fields:**

-   `file` (binary, required): 업로드할 파일 데이터

**Response:**

```json
{
    "status": 200,
    "message": "파일 업로드 성공",
    "data": {
        "fileName": "example.jpg",
        "s3Key": "temp/2025/07/13/example_123456.jpg"
    }
}
```

**Response Fields:**

-   `fileName` (string): 파일 이름
-   `s3Key` (string): S3 저장 키

## 파일 업로드 가이드

### 지원 파일 형식

일반적으로 다음 파일 형식들이 지원됩니다:

-   **이미지**: JPG, JPEG, PNG, GIF
-   **문서**: PDF, DOC, DOCX, XLS, XLSX
-   **압축**: ZIP, RAR

### 파일 크기 제한

-   최대 파일 크기: 10MB (추후 변경 가능)
-   권장 이미지 크기: 1920x1080px 이하

### 폴더 구조

업로드된 파일은 다음과 같은 폴더 구조로 저장됩니다:

```
/{folderName}/{year}/{month}/{day}/{filename}_{timestamp}
```

예시:

-   `temp/2025/07/13/example_123456.jpg`
-   `notices/2025/07/13/notice_attachment_789012.pdf`

### 사용 예시

#### 1. 수험표 업로드

```javascript
const formData = new FormData();
formData.append("file", admissionTicketFile);

fetch("/api/v1/s3?folderName=admission", {
    method: "POST",
    body: formData,
});
```

#### 2. 공지사항 첨부파일 업로드

```javascript
const formData = new FormData();
formData.append("file", noticeFile);

fetch("/api/v1/s3?folderName=notices", {
    method: "POST",
    body: formData,
});
```

#### 3. 프로필 이미지 업로드

```javascript
const formData = new FormData();
formData.append("file", profileImage);

fetch("/api/v1/s3?folderName=profiles", {
    method: "POST",
    body: formData,
});
```

### 주의사항

-   파일 업로드 후 반환되는 `s3Key`는 다른 API 호출 시 파일 참조용으로 사용됩니다.
-   임시 업로드된 파일(`temp` 폴더)은 일정 기간 후 자동 삭제될 수 있습니다.
-   파일 업로드 시 적절한 `folderName`을 사용하여 파일을 분류하는 것이 좋습니다.

### 폴더명 가이드

-   `temp`: 임시 파일
-   `admission`: 수험표
-   `notices`: 공지사항 첨부파일
-   `inquiries`: 문의 첨부파일
-   `faq`: FAQ 첨부파일
-   `events`: 이벤트 첨부파일
-   `profiles`: 프로필 이미지
