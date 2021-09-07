walk(document.body);
function walk(node) {
    
    var child, next;
    switch (node.nodeType) {
            
        // You can find the nodeTypes here if u wanna know what these mean: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
            
        case 1: // Since it is inside a <div> its a nodeType 1. So we use look inside the <div> again with walk(). while a firstChild exists, we walk() through the firstChild too, then we set the child to next sibling and so on until there is no child left. in case we hit plain text, the required operations are performed.
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // If plain text, perform handleText()
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;
    if (v.includes('eval')) return; // entrar has this in its code on top of the captcha
    let x = v.indexOf('+')
    if (x == -1) return;
    x = v.slice(x - 2, x + 3);
    
    // x will be 'number + number'
    // example: '9 + 4'
    // also note, the way i wrote this works for single digits because entrar didn't add double digits yet

    console.log((x[0]) + ' will be added to ' + (x[4]));
    let errormsg = 'Entrar Autocaptcha ran into an error. If you think this was not supposed to happen, report this to blackandantiqual@gmail.com or Doog#5101 on Discord'

    let add1 = parseInt(x[0])
    let add2 = parseInt(x[4])
    let sum = add1 + add2

    try {
        document.getElementById('captcha').value = sum;
    } catch (error) {
        console.log(errormsg + '\n' + error)
    }
    
}
