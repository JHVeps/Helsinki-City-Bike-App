import cookie from "js-cookie";

// set in cookie
export const setCookie = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

// remove from cookie
export const removeCookie = (key: string) => {
  if (typeof window !== "undefined") {
    cookie.remove(key, { expires: 1 });
  }
};

// get from cookie such as stored token
// will be useful when we need to make request to server with token
export const getCookie = (key: string) => {
  if (typeof window !== "undefined") {
    return cookie.get(key);
  }
};

// set in localstorage
export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// remove from localstorage
export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// authenticate user by passing data to cookie and localstorage during signin
// this basically works like a middleware
export const authenticate = (response: any, next: any) => {
  setCookie("token", response.payload.data.token);
  setLocalStorage("user", response.payload.data.user);
  next();
};

// access user info from localstorage
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
