import cookie from "js-cookie";

export const setCookie = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const authenticate = (response: any, next: any) => {
  setCookie("token", response.payload.data.token);
  setLocalStorage("user", response.payload.data.user);
  next();
};

export const removeCookie = (key: string) => {
  if (typeof window !== "undefined") {
    cookie.remove(key, { expires: 1 });
  }
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const getCookie = (key: string) => {
  if (typeof window !== "undefined") {
    return cookie.get(key);
  }
};

export const isAuth = () => {
  if (typeof window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      const storedUser = localStorage.getItem("user");
      if (storedUser !== null) {
        return JSON.parse(storedUser);
      } else {
        return false;
      }
    }
  }
};

export const signout = (next: any) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
};
