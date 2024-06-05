//set
function setCookie(cookieName, cookieValue, expiryDate = "") {
  if (
    !cookieName ||
    !cookieValue ||
    typeof cookieName !== "string" ||
    arguments.length > 3
  ) {
    throw new Error(
      "Your cookie data is missing or not valid, or you added more than 3 arguments"
    );
  } else if (expiryDate !== "" && expiryDate instanceof Date === false) {
    throw new Error("Set a valid date");
  }

  document.cookie = `${cookieName} = ${cookieValue}; expires=${expiryDate}`;
}
//delete
function deleteCookie(cookieName) {
  if (!cookieName || typeof cookieName !== "string" || arguments.length > 1) {
    throw new Error(
      "Cookie name is not valid, or you added more than one argument"
    );
  }
  if (!getCookie(cookieName)) {
    throw Error("this cookie does not existe");
  }
  document.cookie = `${cookieName} =; expires= Mon Jun 03 2000 00:11:34 GMT+0300 (Eastern European Summer Time)`;
}
//get
function getCookie(cookieName) {
  if (!cookieName || typeof cookieName !== "string" || arguments.length > 1) {
    throw new Error(
      "Cookie name is not valid, or you added more than one argument"
    );
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
  if (arguments.length > 0) {
    throw new Error("You do not need any arguments for this function");
  }
  let arr = document.cookie.split(";");
  let cookies = [];
  for (let i = 0; i < arr.length; i++) {
    cookies.push(arr[i].trim().split("="));
  }
  if (cookies[0].length === 1) {
    throw Error("You do not have any cookies");
  }
  return cookies;
}
//check
function hasCookie(cookieName) {
  if (!cookieName || typeof cookieName !== "string" || arguments.length > 1) {
    throw new Error(
      "Cookie name is not valid, or you added more than one argument"
    );
  }
  let cookies = allCookieList();
  let hasCookie = false;
  for (let i = 0; i < cookies.length; i++) {
    cookies[i][0] === cookieName ? (hasCookie = true) : "";
  }
  return hasCookie;
}
