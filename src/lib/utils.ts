// 공통 유틸 함수 예시

export function formatDate(date: Date) {
  // TODO: 날짜 포맷팅 함수 구현
  return date.toISOString().slice(0, 10);
} 