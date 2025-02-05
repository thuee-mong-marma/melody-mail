import Cookies from "js-cookie"

export const COOKIE_NAME = 'melodymail_history_submission'

export function setCookie(key: string, value: string, options = {}) {
  Cookies.set(key, value, {
    expires: 7,
    ...options,
  })
}

export function getCookie(key: string) {
  const values = Cookies.get(key)
  return values ? JSON.parse(values) : []
}

export function deleteCookie(key: string) {
  Cookies.remove(key)
}