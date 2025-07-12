# 결제 API

결제 처리 관련 API입니다.

## 결제 준비

### POST /payment/prepare

결제를 준비합니다.

**Request Body:**

```json
{
    "items": [
        {
            "applicationSchoolId": 1,
            "name": "대치중학교"
        }
    ],
    "size": 1
}
```

**Request Fields:**

-   `items` (array, required): 결제 항목 목록
    -   `applicationSchoolId` (integer, required): 신청 학교 ID
    -   `name` (string, required): 결제 항목명
-   `size` (integer, optional): 항목 개수

**Response:**

```json
{
    "status": 200,
    "message": "결제 준비 성공",
    "data": {
        "orderId": "ORDER_20250713_001",
        "totalPrice": 50000
    }
}
```

**Response Fields:**

-   `orderId` (string): 주문 ID
-   `totalPrice` (integer): 총 결제 금액

---

## 결제 승인

### POST /payment/confirm

결제를 승인합니다.

**Request Body:**

```json
{
    "applicationSchoolIds": [1, 2],
    "paymentKey": "tgen_20250713_001",
    "orderId": "ORDER_20250713_001",
    "amount": 50000
}
```

**Request Fields:**

-   `applicationSchoolIds` (array, required): 신청 학교 ID 목록
-   `paymentKey` (string, required): 결제 키
-   `orderId` (string, required): 주문 ID
-   `amount` (integer, required): 결제 금액

**Response:**

```json
{
    "status": 200,
    "message": "결제 승인 성공",
    "data": null
}
```

## 결제 상태

결제 시스템에서 사용되는 상태 값들입니다.

### 결제 상태 (Payment Status)

-   `PREPARE`: 결제 준비 중
-   `DONE`: 결제 완료
-   `EXPIRED`: 결제 만료
-   `ABORTED`: 결제 중단

### 결제 방법 (Payment Method)

-   `EASY_PAY`: 간편결제
-   `CARD`: 카드 결제

## 결제 플로우

1. **결제 준비**: `POST /payment/prepare`로 결제 정보를 준비합니다.
2. **결제 진행**: 프론트엔드에서 결제 위젯을 통해 결제를 진행합니다.
3. **결제 승인**: `POST /payment/confirm`으로 결제를 최종 승인합니다.
4. **결제 취소** (필요시): `POST /payment/{paymentId}/cancel`로 결제를 취소합니다.
