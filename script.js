// Caesar Cipher Encryption
function encryptCaesar() {
    let text = document.getElementById("inputText").value;
    let shift = parseInt(document.getElementById("shift").value);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let shiftAmount = shift % 26;

            if (char >= "A" && char <= "Z") {
                code = ((code - 65 + shiftAmount) % 26) + 65;
            } else if (char >= "a" && char <= "z") {
                code = ((code - 97 + shiftAmount) % 26) + 97;
            }
            result += String.fromCharCode(code);
        } else {
            result += char;
        }
    }

    document.getElementById("outputText").value = result;
}

// Caesar Cipher Decryption
function decryptCaesar() {
    let text = document.getElementById("inputText").value;
    let shift = parseInt(document.getElementById("shift").value);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let shiftAmount = shift % 26;

            if (char >= "A" && char <= "Z") {
                code = ((code - 65 - shiftAmount + 26) % 26) + 65;
            } else if (char >= "a" && char <= "z") {
                code = ((code - 97 - shiftAmount + 26) % 26) + 97;
            }
            result += String.fromCharCode(code);
        } else {
            result += char;
        }
    }

    document.getElementById("outputText").value = result;
}

// Base64 Encoding
function encodeBase64() {
    let text = document.getElementById("inputText").value;
    let encoded = btoa(text); // Convert text to Base64
    document.getElementById("outputText").value = encoded;
}

// Base64 Decoding
function decodeBase64() {
    let text = document.getElementById("inputText").value;
    try {
        let decoded = atob(text); // Convert Base64 back to text
        document.getElementById("outputText").value = decoded;
    } catch (e) {
        alert("Invalid Base64 input!");
    }
}
