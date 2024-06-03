## Cookies Manager

-First, add a script tag for the cookies library above your main script tag in your HTML file:
```
<script src="cookie.js"></script> // cookies library
<script src="script.js"></script> // your script
```
-Add your cookie by passing three arguments to the following function, your cookie name, the cookie value, and expiry date which is optional:
```
setCookie(cookieName, cookieValue, expiryDate) // cookie with expiry date
setCookie(cookieName, cookieValue) // session cookie
```
-Delete a cookie by its name:
```
deleteCookie(cookieName)
```
-Get the cookie value by its name:
```
getCookie(cookieName)
```
-Get an array of all your cookies:
```
allCookieList()
```
-Check if a cookie exists by its name:
```
 hasCookie(cookieName)
```
