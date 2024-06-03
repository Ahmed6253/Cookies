//set
function setCookie(cookieName, cookieValue, expiryDate = "") {
  if (!cookieName || !cookieValue || typeof cookieName !== "string") {
    throw new Error("Your cookie data is missing or not valid");
  } else if (expiryDate !== "" && expiryDate instanceof Date === false) {
    throw new Error("Set a valid date");
  }

  document.cookie = `${cookieName} = ${cookieValue}; expires=${expiryDate}`;
}
//delete
function deleteCookie(cookieName) {
  if (!cookieName || typeof cookieName !== "string") {
    throw new Error("Cookie name is not valid");
  }
  if (!getCookie(cookieName)) {
    throw Error("this cookie does not existe");
  }
  document.cookie = `${cookieName} =; expires= Mon Jun 03 2000 00:11:34 GMT+0300 (Eastern European Summer Time)`;
}
//get
function getCookie(cookieName) {
  if (!cookieName || typeof cookieName !== "string") {
    throw new Error("Cookie name is not valid");
  }
  let cookies = allCookieList();
  let cookie;
  for (let i = 0; i < cookies.length; i++) {
    cookies[i][0] === cookieName ? (cookie = cookies[i][1]) : "";
  }
  if (cookie === undefined) {
    throw Error("this cookie does not existe");
  }
  return cookie;
}
//get all
function allCookieList() {
  let arr = document.cookie.split(";");
  let cookies = [];
  for (let i = 0; i < arr.length; i++) {
    cookies.push(arr[i].trim().split("="));
  }
  if (cookies.length === 0) {
    throw Error("You do not have any cookies");
  }
  return cookies;
}
//check
function hasCookie(cookieName) {
  if (!cookieName || typeof cookieName !== "string") {
    throw new Error("Cookie name is not valid");
  }
  let cookies = allCookieList();
  let hasCookie = false;
  for (let i = 0; i < cookies.length; i++) {
    cookies[i][0] === cookieName ? (hasCookie = true) : "";
  }
  return hasCookie;
}

setCookie("ahmed", "ahmed");

console.log(hasCookie("ah"));
