export const setCookie = (cookieName, data) => {
  const date = new Date();
  date.setMonth(date.getMonth() + 24);
  document.cookie = `${cookieName}=${data}; expires=${date}; path=/; Secure; SameSite=Strict`;
};

export const getCookie = (cookieName) => {
  const cookieString = RegExp("[; ]" + cookieName + "[^;]+").exec("; " + document.cookie);
  return unescape(!!cookieString ? cookieString.toString().replace(/^[^=]+./, "") : "");
};

export const getServerCookie = (cookieName, cookie) => {
  const cookieString = RegExp("[; ]" + cookieName + "[^;]+").exec("; " + cookie);
  return unescape(!!cookieString ? cookieString.toString().replace(/^[^=]+./, "") : "");
}