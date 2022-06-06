class hitError {
    constructor(error,what) {
        this.error = error;
        this.what = what;
    }
    logError() {
        console.log("Error while attempting to solve captcha: " + this.error + "\nThis means: " + this.what + "\nSuggestion: Try reloading your page or informing the extension's owner | loadedinferp@gmail.com")
    }
}

function findCaptchaElement() { // Returns the values of the captcha, if found.
    const element = document.getElementsByClassName("label-input100")[0] // label-input100 is the class name for the captcha element.
    if (!element) return new hitError(
        "Could not get label-input100 by class name",
        "The extension was unable to find the captcha on the page."
    )
    const checker = /([0-9])+ \+ ([0-9])+/gm; // Regex to match the captcha
    let captchaString = checker.exec(element.innerText) // The string we obtain from the captcha like "2 + 4 ="
    /*
    * In captchaString,
    * [0] = "2 + 4 ="
    * [1] = "2"
    * [2] = "4"
    */
   if (!captchaString) return new hitError( // Error if RegEx fails.
       "Captcha could not be matched by RegEx",
       "The extension was unable to confirm that the captcha is in the form of addition \"x + y =\""
   )
    return captchaString;
}

function solveCaptcha(values) { // Solves the captcha.
    values.first_number = parseInt(values.first_number), values.second_number = parseInt(values.second_number); // Convert both values to integer

    if (typeof values.first_number != "number" || typeof values.second_number != "number") return new hitError( // Error if one of the values are not a number.
        `Expected number.\nValues: ${typeof values.first_number} - ${values.first_number} and ${typeof values.second_number} - ${values.second_number}`,
        "While adding the numbers, the conversion process of text to numbers failed."
    )
    return values.first_number + values.second_number; // Return the added value.
}

function startCaptchaSolving() { // Captcha Solving Process
    let captchaString = findCaptchaElement(); // The element is first looked for.
    if (captchaString instanceof hitError) return captchaString.logError(); // If it hits an error, log error.

    let values = {
        first_number: captchaString[1],
        second_number: captchaString[2]
    }

    let solved = solveCaptcha(values); // The captcha is solved
    if (solved instanceof hitError) return solved.logError(); // If it hits an error, log error.

    const element = document.getElementById("captcha"); // Get the captcha textbox element
    if (!element) return new hitError("Could not find element with ID \"captcha\"", "The extension was unable to find the captcha box").logError(); // If textbox is not found, log error.
    element.value = solved; // And update it with the solved value.
}

startCaptchaSolving(); // Start!
