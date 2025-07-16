// API 연동 함수 예시

export async function apiFetch(url: string, options?: RequestInit) {
  // TODO: 인증 토큰 등 공통 처리 추가
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('API 요청 실패');
  }
  return res.json();
} 