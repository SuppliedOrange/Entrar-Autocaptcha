# Entrar-Autocaptcha
Automatically fills in the captcha on the Entrar login page

Want a minified one-liner instead of a complete extension?
```js
let a=document.getElementsByClassName("label-input100")[0].innerText,b=/([0-9])+ \+ ([0-9])+/gm,c=[...a.matchAll(b)][0],f=parseInt(c[1])+parseInt(c[2]);document.getElementById("captcha").value=f;
```
Ctrl-Shift-J and paste it!

<br>

### Update: It was fun while it lasted :)

Even shorter line of code:
```js 
document.querySelector('#captcha').value=eval(document.querySelector('.label-input100').innerText.match(/\d+/g).join('+'));
```

[Goodbye!](https://gist.github.com/SuppliedOrange/b0827292c4f1cf2c21a5896b979c8376)
