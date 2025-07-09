const EXPIRE_DAYS = 7

export class Cookie {
  static setCookie(
    name: string,
    value: string,
    days: number = EXPIRE_DAYS
  ): void {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
  }
  static deleteCookie = (name: string) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
  }
  static getUserEmailFromCookie = () => {
    const useremailCookie = document.cookie
      .split(";")
      .find((row) => row.trim().startsWith("username="))

    return useremailCookie ? useremailCookie.split("=")[1] : "email"
  }

  static getUsernameFromCookie = () => {
    const getEmail = Cookie.getUserEmailFromCookie()
    if (getEmail === "email") {
      return "사용자"
    } else {
      return getEmail?.split("@")[0]
    }
  }
  static readLoginCookie = (): boolean => {
    const c = document.cookie
      .split(";")
      .find((row) => row.trim().startsWith("isLoggedIn="))
    return c ? c.split("=")[1] === "true" : false
  }
}
