# Entrar-Autocaptcha
Automatically fills in the captcha on the Entrar login page

Want a minified one-liner instead of a complete extension?
```js
document.querySelector('#captcha').value=eval(document.querySelector('.label-input100').innerText.match(/\d+/g).join('+'));
```
Ctrl-Shift-J and paste it!

### Update: It was fun while it lasted :)

[Goodbye!](https://gist.github.com/SuppliedOrange/b0827292c4f1cf2c21a5896b979c8376)
