export function validateInput(value, fieldName) {
  if (!value.trim()) {
    return `${fieldName}을(를) 입력하세요.`;
  }
  return "";
}
