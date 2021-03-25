var langList = document.getElementById('langs');
var langInput = document.getElementById('lang-choice');
var TIObutton = document.getElementById('TIObutton');

function tio_url(str) {
    return "https://tio.run/##" + byteStringToBase64(byteArrayToByteString(deflate(langInput.value + "\xff" + "\xff" + textToByteString(str) + "\xff" + "\xff")))
}

function deflate(byteString) {
    return pako.deflateRaw(byteStringToByteArray(byteString), {
        "level": 9
    });
}

function iterate(iterable, monad) {
    if (!iterable)
        return;
    for (var i = 0; i < iterable.length; i++)
        monad(iterable[i]);
}

function textToByteString(string) {
    return unescape(encodeURIComponent(string));
}

function byteStringToBase64(byteString) {
    return btoa(byteString).replace(/\+/g, "@").replace(/=+/, "");
}

function byteArrayToByteString(byteArray) {
    var retval = "";
    iterate(byteArray, function(byte) {
        retval += String.fromCharCode(byte);
    });
    return retval;
}

function byteStringToByteArray(byteString) {
    var byteArray = new Uint8Array(byteString.length);
    for (var index = 0; index < byteString.length; index++)
        byteArray[index] = byteString.charCodeAt(index);
    byteArray.head = 0;
    return byteArray;
}




if (window.location.hash) {
    var occ = JSON.parse(decodeURIComponent(window.location.hash).slice(1));
} else {
    /* random char generator
    var arr = [...Array(2021)].map(a => {
        let chr = 0;
        while (chr < 32 || (chr > 126 && chr < 160)) chr = ~~(Math.random() * 512);
        return String.fromCodePoint(chr);
    });
	arr.sort();
	var occ = count(arr);
	*/
    var occ = {
        "0": 2,
        "1": 1,
        "2": 8,
        "3": 2,
        "4": 5,
        "5": 5,
        "7": 1,
        "8": 3,
        "9": 7,
        " ": 6,
        "!": 7,
        "\"": 7,
        "#": 7,
        "$": 6,
        "%": 6,
        "&": 3,
        "\'": 6,
        "(": 2,
        ")": 4,
        "*": 1,
        "+": 4,
        ",": 6,
        "-": 5,
        ".": 5,
        "/": 3,
        ":": 2,
        ";": 6,
        "<": 2,
        "=": 5,
        ">": 4,
        "?": 2,
        "@": 4,
        "A": 1,
        "B": 4,
        "C": 6,
        "D": 5,
        "E": 3,
        "F": 6,
        "G": 6,
        "H": 3,
        "I": 7,
        "J": 3,
        "K": 2,
        "L": 4,
        "M": 5,
        "N": 4,
        "O": 3,
        "P": 6,
        "Q": 4,
        "R": 3,
        "S": 4,
        "T": 3,
        "U": 3,
        "V": 1,
        "W": 4,
        "X": 6,
        "Y": 6,
        "Z": 3,
        "[": 4,
        "\\": 2,
        "]": 3,
        "^": 8,
        "_": 4,
        "`": 5,
        "a": 2,
        "b": 8,
        "c": 3,
        "d": 6,
        "e": 7,
        "f": 5,
        "g": 6,
        "h": 2,
        "i": 5,
        "j": 7,
        "k": 4,
        "l": 4,
        "m": 5,
        "n": 2,
        "o": 7,
        "p": 3,
        "r": 5,
        "s": 4,
        "t": 6,
        "u": 4,
        "v": 7,
        "w": 3,
        "x": 2,
        "y": 4,
        "z": 5,
        "{": 6,
        "|": 2,
        "}": 7,
        "~": 5,
        " ": 8,
        "¡": 1,
        "¢": 8,
        "£": 5,
        "¤": 5,
        "¥": 6,
        "¦": 8,
        "§": 6,
        "¨": 7,
        "©": 7,
        "ª": 4,
        "«": 3,
        "¬": 3,
        "­": 4,
        "®": 5,
        "¯": 8,
        "°": 5,
        "±": 3,
        "²": 3,
        "³": 2,
        "´": 5,
        "µ": 2,
        "¶": 1,
        "·": 6,
        "¸": 3,
        "¹": 6,
        "º": 3,
        "»": 4,
        "¼": 6,
        "½": 4,
        "¾": 3,
        "À": 5,
        "Á": 6,
        "Â": 4,
        "Ã": 2,
        "Ä": 2,
        "Å": 6,
        "Æ": 8,
        "Ç": 4,
        "È": 8,
        "É": 3,
        "Ê": 9,
        "Ë": 2,
        "Ì": 3,
        "Í": 6,
        "Î": 6,
        "Ï": 3,
        "Ð": 2,
        "Ñ": 4,
        "Ò": 9,
        "Ó": 8,
        "Ô": 6,
        "Õ": 4,
        "Ö": 3,
        "×": 3,
        "Ø": 2,
        "Ù": 6,
        "Ú": 1,
        "Û": 2,
        "Ü": 6,
        "Ý": 3,
        "Þ": 8,
        "ß": 2,
        "à": 5,
        "á": 9,
        "â": 5,
        "ã": 4,
        "ä": 7,
        "å": 5,
        "æ": 3,
        "ç": 6,
        "è": 4,
        "é": 3,
        "ê": 5,
        "ë": 5,
        "ì": 7,
        "í": 4,
        "î": 5,
        "ï": 3,
        "ð": 6,
        "ñ": 4,
        "ò": 5,
        "ó": 2,
        "ô": 3,
        "õ": 4,
        "ö": 3,
        "÷": 9,
        "ø": 5,
        "ù": 4,
        "ú": 3,
        "û": 8,
        "ü": 4,
        "ý": 4,
        "þ": 6,
        "ÿ": 2,
        "Ā": 7,
        "ā": 5,
        "Ă": 9,
        "ă": 4,
        "Ą": 5,
        "ą": 6,
        "Ć": 9,
        "ć": 3,
        "Ĉ": 2,
        "ĉ": 3,
        "Ċ": 8,
        "ċ": 8,
        "Č": 4,
        "č": 9,
        "Ď": 2,
        "ď": 5,
        "Đ": 5,
        "đ": 4,
        "Ē": 3,
        "ē": 4,
        "Ĕ": 6,
        "Ė": 3,
        "ė": 6,
        "Ę": 8,
        "ę": 3,
        "Ě": 7,
        "ě": 4,
        "Ĝ": 2,
        "ĝ": 4,
        "Ğ": 5,
        "ğ": 4,
        "Ġ": 8,
        "ġ": 2,
        "Ģ": 10,
        "ģ": 1,
        "Ĥ": 6,
        "ĥ": 5,
        "Ħ": 3,
        "ħ": 4,
        "Ĩ": 6,
        "Ī": 5,
        "ī": 2,
        "Ĭ": 4,
        "ĭ": 9,
        "Į": 2,
        "į": 3,
        "İ": 6,
        "ı": 3,
        "Ĳ": 3,
        "ĳ": 1,
        "Ĵ": 4,
        "ĵ": 7,
        "Ķ": 6,
        "ķ": 4,
        "ĸ": 5,
        "Ĺ": 4,
        "ĺ": 2,
        "Ļ": 2,
        "ļ": 1,
        "Ľ": 9,
        "ľ": 2,
        "Ŀ": 2,
        "ŀ": 3,
        "Ł": 4,
        "ł": 6,
        "Ń": 5,
        "ń": 3,
        "Ņ": 3,
        "ņ": 8,
        "Ň": 4,
        "ň": 4,
        "ŉ": 4,
        "Ŋ": 7,
        "ŋ": 1,
        "Ō": 5,
        "ō": 5,
        "Ŏ": 3,
        "ŏ": 4,
        "Ő": 7,
        "ő": 4,
        "Œ": 3,
        "œ": 3,
        "Ŕ": 3,
        "ŕ": 2,
        "Ŗ": 4,
        "ŗ": 1,
        "Ř": 1,
        "ř": 4,
        "Ś": 4,
        "ś": 1,
        "Ŝ": 3,
        "ŝ": 2,
        "Ş": 8,
        "ş": 8,
        "Š": 6,
        "š": 3,
        "Ţ": 7,
        "ţ": 4,
        "Ť": 8,
        "ť": 3,
        "Ŧ": 5,
        "ŧ": 9,
        "Ũ": 5,
        "ũ": 4,
        "Ū": 3,
        "ū": 9,
        "Ŭ": 4,
        "ŭ": 1,
        "Ů": 2,
        "ů": 5,
        "Ű": 6,
        "ű": 6,
        "Ų": 3,
        "ų": 6,
        "Ŵ": 9,
        "ŵ": 7,
        "Ŷ": 2,
        "ŷ": 5,
        "Ÿ": 6,
        "Ź": 3,
        "ź": 3,
        "Ż": 6,
        "ż": 1,
        "Ž": 4,
        "ž": 3,
        "ſ": 6,
        "ƀ": 3,
        "Ɓ": 5,
        "Ƃ": 4,
        "ƃ": 4,
        "Ƅ": 3,
        "ƅ": 2,
        "Ɔ": 6,
        "Ƈ": 4,
        "ƈ": 4,
        "Ɖ": 6,
        "Ɗ": 4,
        "Ƌ": 6,
        "ƌ": 4,
        "Ǝ": 4,
        "Ə": 2,
        "Ɛ": 8,
        "Ƒ": 3,
        "ƒ": 6,
        "Ɠ": 7,
        "Ɣ": 12,
        "ƕ": 4,
        "Ɩ": 3,
        "Ɨ": 5,
        "Ƙ": 3,
        "ƙ": 6,
        "ƚ": 7,
        "ƛ": 3,
        "Ɯ": 5,
        "Ɲ": 4,
        "ƞ": 4,
        "Ɵ": 2,
        "Ơ": 7,
        "ơ": 2,
        "Ƣ": 5,
        "ƣ": 7,
        "Ƥ": 7,
        "ƥ": 5,
        "Ʀ": 4,
        "Ƨ": 3,
        "ƨ": 8,
        "Ʃ": 2,
        "ƪ": 7,
        "ƫ": 6,
        "Ƭ": 5,
        "ƭ": 5,
        "Ʈ": 5,
        "Ư": 2,
        "ư": 4,
        "Ʊ": 5,
        "Ʋ": 3,
        "Ƴ": 7,
        "ƴ": 1,
        "Ƶ": 4,
        "ƶ": 4,
        "Ʒ": 2,
        "Ƹ": 2,
        "ƹ": 6,
        "ƺ": 3,
        "ƻ": 3,
        "Ƽ": 2,
        "ƽ": 4,
        "ƾ": 3,
        "ƿ": 7,
        "ǀ": 3,
        "ǁ": 4,
        "ǂ": 7,
        "ǃ": 1,
        "Ǆ": 4,
        "ǅ": 4,
        "ǆ": 8,
        "Ǉ": 3,
        "ǈ": 8,
        "ǉ": 3,
        "Ǌ": 4,
        "ǋ": 4,
        "ǌ": 5,
        "Ǎ": 1,
        "ǎ": 4,
        "Ǐ": 6,
        "ǐ": 3,
        "Ǒ": 5,
        "ǒ": 4,
        "Ǔ": 7,
        "ǔ": 6,
        "Ǖ": 9,
        "ǖ": 5,
        "Ǘ": 2,
        "ǘ": 9,
        "Ǚ": 7,
        "ǚ": 6,
        "Ǜ": 4,
        "ǜ": 6,
        "ǝ": 6,
        "Ǟ": 3,
        "ǟ": 3,
        "Ǡ": 5,
        "ǡ": 3,
        "Ǣ": 4,
        "ǣ": 6,
        "Ǥ": 4,
        "ǥ": 3,
        "Ǧ": 5,
        "ǧ": 5,
        "Ǩ": 6,
        "ǩ": 6,
        "Ǫ": 3,
        "ǫ": 6,
        "Ǭ": 4,
        "ǭ": 5,
        "Ǯ": 15,
        "ǯ": 3,
        "ǰ": 5,
        "Ǳ": 11,
        "ǲ": 4,
        "ǳ": 6,
        "Ǵ": 4,
        "ǵ": 6,
        "Ƕ": 5,
        "Ƿ": 6,
        "Ǹ": 4,
        "ǹ": 4,
        "Ǻ": 9,
        "ǻ": 3,
        "Ǽ": 4,
        "ǽ": 8,
        "Ǿ": 6,
        "ǿ": 1
    };
    console.log(JSON.stringify(occ));
}


var htmlValue = '';
var upOcc = {
    ...occ
};

//create the code editor
var field = document.getElementById("field");
var editor = CodeMirror(field, {
    lineNumbers: true,
    tabSize: 2,
    mode: 'javascript',
    theme: 'monokai'
});

editor.setSize(1200, 60);

//update the buttons when the text in the editor changes
editor.on('change', updateButtons);
//and update button
updateButtons();

//filter keys that are not allowed
editor.on("keydown", function(cm, event) {
    var K = event.key;

    //In order to allways allow keys like backspace,enter,shift, etc
    if ((K.length == 1 || K.length == 2)) {
        //allow all keys that involve Ctrl (Ctrl-z, Ctrl-y,etc)
        if (!event.ctrlKey) {
            //stop default behaviour
            event.preventDefault();
            upOcc = {
                ...occ
            };
            //Count the chars used
            let used = editor.getValue();
            [...used].forEach(chr => upOcc[chr]--);
            //Insert key if still available
            if (K.length < 3) {
                [...K].forEach(chr => {
                    if (upOcc.hasOwnProperty(chr) && upOcc[chr] > 0) {
                        insertString(chr);
                        upOcc[chr]--;
                    }
                })
            }
        }
    }

});

//on button click create new url
document.getElementById("urlButton").onclick = el => createURL(el);

function updateButtons() {
    let htmlValue = '';
    upOcc = {
        ...occ
    };
    let used = editor.getValue();
    [...used].forEach(a => upOcc[a]--);

    for (let [key, value] of Object.entries(upOcc)) {
        if (value > 0) htmlValue += `<button title="${key}">${key}</br><div class='small'>${value}</div></button>`;
    }
    document.getElementById('buttons').innerHTML = htmlValue;

    var elems = document.getElementsByTagName("BUTTON");
    for (var i = 0, len = elems.length; i < len; i++) elems[i].onclick = el => inputF(el);
    TIObutton.href = tio_url(used);
}


function count(arr) {
    var count = {};
    arr.forEach(function(s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}

function inputF(e) {
    e = e || window.event;
    if (e.target !== e.currentTarget) {
        e = e.target.parentElement || e.srcElement.parentElement;
    } else {
        e = e.target || e.srcElement;
    }

    if (upOcc[e.title] && upOcc[e.title] > 0) {
        editor.setValue(editor.getValue() + e.title);
    }
    updateButtons();
}

function createURL() {
    const filtered = Object.keys(upOcc).reduce((p, c) => {
        if (upOcc[c] > 0) p[c] = upOcc[c];
        return p;
    }, {});

    prompt('Ctr-c + Enter', '#' + encodeURIComponent(JSON.stringify(upOcc)));

}

function insertString(str) {

    var selection = editor.getSelection();

    if (selection.length > 0) {
        editor.replaceSelection(str);
    } else {

        var doc = editor.getDoc();
        var cursor = doc.getCursor();

        var pos = {
            line: cursor.line,
            ch: cursor.ch
        }

        doc.replaceRange(str, pos);

    }

}