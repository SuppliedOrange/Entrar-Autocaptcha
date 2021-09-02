walk(document.body);
function walk(node) {
    
    var child, next;
    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node
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

    console.log((x[0]) + ' will be added to ' + (x[4]));
    let errormsg = 'Entrar Autocaptcha ran into an error. Please report this to blackandantiqual@gmail.com or Doog#5101 on Discord'

    let add1 = parseInt(x[0])
    let add2 = parseInt(x[4])
    let sum = add1 + add2

    try {
        document.getElementById('captcha').value = sum;
    } catch (error) {
        console.log(errormsg + '\n' + error)
    }
    
}