export function getStoredGroceries() {
  return JSON.parse(localStorage.getItem('gl_items')) || [];
}

export function getStoredUsers() {
  return JSON.parse(localStorage.getItem('gl_users')) || [];
}
