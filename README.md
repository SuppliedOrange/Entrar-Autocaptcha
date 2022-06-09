# Entrar-Autocaptcha
Automatically fills in the captcha on the Entrar login page

Want a minified one-liner instead of a complete extension?
```js
let a=document.getElementsByClassName("label-input100")[0].innerText,b=/([0-9])+ \+ ([0-9])+/gm,c=[...a.matchAll(b)][0],f=parseInt(c[1])+parseInt(c[2]);document.getElementById("captcha").value=f;
```
Ctrl-Shift-J and paste it!
