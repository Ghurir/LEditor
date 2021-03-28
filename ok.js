var langList = document.getElementById('langs');
var langInput = document.getElementById('lang-choice');
var TIObutton = document.getElementById('TIObutton');

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
    "1": 4,
    "2": 3,
    "3": 6,
    "4": 2,
    "5": 6,
    "6": 4,
    "7": 7,
    "8": 4,
    "9": 3,
    "!": 3,
    "\"": 3,
    "#": 5,
    "$": 5,
    "%": 6,
    "&": 3,
    "'": 5,
    "(": 4,
    "*": 2,
    "+": 3,
    ",": 4,
    "-": 7,
    ".": 5,
    "/": 7,
    ":": 3,
    ";": 9,
    "<": 6,
    "=": 4,
    ">": 5,
    "?": 2,
    "@": 2,
    "A": 4,
    "B": 4,
    "C": 5,
    "D": 3,
    "E": 4,
    "F": 2,
    "G": 3,
    "H": 1,
    "I": 6,
    "J": 3,
    "K": 3,
    "L": 6,
    "M": 5,
    "N": 6,
    "O": 3,
    "P": 6,
    "Q": 5,
    "R": 8,
    "S": 5,
    "T": 7,
    "U": 1,
    "V": 5,
    "W": 5,
    "X": 7,
    "Y": 3,
    "Z": 5,
    "[": 6,
    "\\": 5,
    "]": 4,
    "_": 4,
    "`": 6,
    "a": 8,
    "b": 5,
    "c": 7,
    "d": 4,
    "e": 4,
    "f": 4,
    "g": 6,
    "h": 2,
    "i": 4,
    "j": 4,
    "k": 5,
    "l": 9,
    "m": 4,
    "n": 6,
    "o": 5,
    "p": 5,
    "q": 7,
    "r": 3,
    "s": 5,
    "t": 3,
    "u": 3,
    "v": 7,
    "w": 7,
    "x": 2,
    "y": 5,
    "z": 2,
    "{": 3,
    "|": 7,
    "}": 5,
    "~": 5,
    " ": 3,
    "¡": 6,
    "¢": 6,
    "£": 3,
    "¤": 3,
    "¥": 6,
    "¦": 2,
    "§": 5,
    "¨": 6,
    "©": 3,
    "ª": 5,
    "«": 4,
    "¬": 3,
    "­": 7,
    "®": 3,
    "¯": 4,
    "°": 2,
    "±": 3,
    "²": 7,
    "³": 8,
    "´": 1,
    "µ": 7,
    "¶": 7,
    "·": 3,
    "¸": 2,
    "¹": 6,
    "º": 5,
    "»": 6,
    "¼": 2,
    "½": 4,
    "¾": 7,
    "¿": 5,
    "À": 5,
    "Á": 7,
    "Â": 3,
    "Ã": 4,
    "Ä": 2,
    "Å": 7,
    "Æ": 3,
    "Ç": 6,
    "È": 1,
    "É": 2,
    "Ê": 5,
    "Ë": 6,
    "Ì": 5,
    "Í": 4,
    "Î": 4,
    "Ï": 3,
    "Ð": 6,
    "Ñ": 2,
    "Ò": 2,
    "Ó": 5,
    "Ô": 2,
    "Õ": 6,
    "Ö": 4,
    "×": 7,
    "Ø": 8,
    "Ù": 7,
    "Ú": 5,
    "Û": 5,
    "Ü": 4,
    "Ý": 5,
    "Þ": 7,
    "ß": 4,
    "à": 2,
    "á": 5,
    "â": 6,
    "ã": 5,
    "ä": 5,
    "å": 6,
    "æ": 5,
    "ç": 2,
    "è": 1,
    "é": 1,
    "ê": 4,
    "ë": 3,
    "ì": 6,
    "í": 6,
    "î": 1,
    "ï": 5,
    "ð": 5,
    "ñ": 4,
    "ò": 3,
    "ó": 3,
    "ô": 6,
    "õ": 6,
    "ö": 3,
    "÷": 3,
    "ø": 6,
    "ù": 5,
    "ú": 1,
    "û": 5,
    "ü": 4,
    "ý": 1,
    "þ": 5,
    "ÿ": 4,
    "Ā": 3,
    "ā": 4,
    "Ă": 5,
    "ă": 6,
    "Ą": 4,
    "ą": 5,
    "Ć": 4,
    "ć": 7,
    "Ĉ": 3,
    "ĉ": 6,
    "Ċ": 5,
    "ċ": 7,
    "Č": 6,
    "č": 3,
    "Ď": 7,
    "ď": 5,
    "Đ": 6,
    "đ": 5,
    "Ē": 3,
    "ē": 5,
    "Ĕ": 3,
    "ĕ": 5,
    "Ė": 6,
    "ė": 1,
    "Ę": 8,
    "ę": 3,
    "Ě": 7,
    "ě": 4,
    "Ĝ": 6,
    "ĝ": 5,
    "Ğ": 3,
    "ğ": 5,
    "Ġ": 5,
    "ġ": 3,
    "Ģ": 2,
    "ģ": 6,
    "Ĥ": 5,
    "ĥ": 6,
    "Ħ": 6,
    "ħ": 7,
    "Ĩ": 9,
    "ĩ": 8,
    "Ī": 7,
    "ī": 7,
    "Ĭ": 3,
    "Į": 6,
    "į": 7,
    "İ": 3,
    "ı": 5,
    "Ĳ": 4,
    "ĳ": 10,
    "Ĵ": 8,
    "ĵ": 4,
    "Ķ": 7,
    "ķ": 2,
    "ĸ": 1,
    "Ĺ": 1,
    "ĺ": 7,
    "Ļ": 3,
    "ļ": 3,
    "Ľ": 9,
    "ľ": 8,
    "Ŀ": 7,
    "ŀ": 3,
    "Ł": 4,
    "ł": 8,
    "Ń": 4,
    "ń": 1,
    "Ņ": 4,
    "ņ": 5,
    "Ň": 2,
    "ň": 6,
    "ŉ": 1,
    "ŋ": 4,
    "Ō": 5,
    "ō": 8,
    "Ŏ": 2,
    "Ő": 6,
    "ő": 4,
    "Œ": 5,
    "œ": 5,
    "Ŕ": 4,
    "ŕ": 7,
    "Ŗ": 4,
    "ŗ": 9,
    "Ř": 6,
    "ř": 4,
    "Ś": 6,
    "ś": 3,
    "Ŝ": 3,
    "ŝ": 2,
    "Ş": 5,
    "ş": 3,
    "Š": 7,
    "š": 7,
    "Ţ": 4,
    "ţ": 6,
    "Ť": 1,
    "ť": 5,
    "Ŧ": 3,
    "ŧ": 7,
    "Ũ": 4,
    "ũ": 8,
    "Ū": 9,
    "ū": 9,
    "Ŭ": 4,
    "ŭ": 6,
    "Ů": 2,
    "ů": 9,
    "Ű": 4,
    "ű": 5,
    "Ų": 7,
    "ų": 4,
    "Ŵ": 5,
    "ŵ": 2,
    "Ŷ": 4,
    "ŷ": 2,
    "Ÿ": 8,
    "Ź": 4,
    "ź": 6,
    "Ż": 5,
    "ż": 3,
    "Ž": 5,
    "ž": 6,
    "ſ": 7,
    "ƀ": 5,
    "Ɓ": 4,
    "Ƃ": 1,
    "ƃ": 3,
    "Ƅ": 5,
    "ƅ": 5,
    "Ɔ": 7,
    "Ƈ": 5,
    "ƈ": 3,
    "Ɖ": 5,
    "Ɗ": 6,
    "Ƌ": 6,
    "ƌ": 3,
    "ƍ": 5,
    "Ǝ": 1,
    "Ə": 6,
    "Ɛ": 6,
    "Ƒ": 6,
    "ƒ": 7,
    "Ɠ": 7,
    "Ɣ": 2,
    "ƕ": 5,
    "Ɩ": 5,
    "Ɨ": 6,
    "Ƙ": 7,
    "ƙ": 6,
    "ƚ": 5,
    "ƛ": 4,
    "Ɯ": 4,
    "Ɲ": 2,
    "Ɵ": 4,
    "Ơ": 6,
    "ơ": 5,
    "Ƣ": 3,
    "ƣ": 3,
    "Ƥ": 5,
    "ƥ": 2,
    "Ʀ": 6,
    "Ƨ": 5,
    "ƨ": 6,
    "Ʃ": 2,
    "ƪ": 6,
    "ƫ": 3,
    "Ƭ": 5,
    "ƭ": 4,
    "Ʈ": 2,
    "Ư": 1,
    "ư": 11,
    "Ʊ": 1,
    "Ʋ": 4,
    "Ƴ": 3,
    "ƴ": 5,
    "ƶ": 3,
    "Ʒ": 3,
    "ƹ": 6,
    "ƺ": 3,
    "ƻ": 6,
    "Ƽ": 4,
    "ƽ": 2,
    "ƾ": 6,
    "ƿ": 6,
    "ǀ": 2,
    "ǁ": 3,
    "ǂ": 3,
    "ǃ": 6,
    "Ǆ": 4,
    "ǅ": 3,
    "ǆ": 3,
    "Ǉ": 2,
    "ǈ": 5,
    "ǉ": 6,
    "Ǌ": 11,
    "ǋ": 4,
    "ǌ": 3,
    "Ǎ": 6,
    "ǎ": 5,
    "Ǐ": 3,
    "ǐ": 3,
    "Ǒ": 8,
    "ǒ": 1,
    "Ǔ": 2,
    "ǔ": 3,
    "Ǖ": 2,
    "ǖ": 4,
    "Ǘ": 5,
    "ǘ": 4,
    "Ǚ": 5,
    "ǚ": 6,
    "Ǜ": 2,
    "ǜ": 3,
    "ǝ": 5,
    "Ǟ": 5,
    "ǟ": 7,
    "Ǡ": 5,
    "ǡ": 5,
    "Ǣ": 3,
    "ǣ": 5,
    "Ǥ": 4,
    "Ǧ": 5,
    "ǧ": 4,
    "Ǩ": 2,
    "ǩ": 6,
    "Ǫ": 7,
    "ǫ": 2,
    "Ǭ": 5,
    "ǭ": 5,
    "Ǯ": 4,
    "ǯ": 5,
    "ǰ": 4,
    "Ǳ": 4,
    "ǲ": 10,
    "ǳ": 7,
    "Ǵ": 5,
    "ǵ": 8,
    "Ƕ": 4,
    "Ƿ": 5,
    "Ǹ": 6,
    "ǹ": 4,
    "Ǻ": 3,
    "ǻ": 3,
    "Ǽ": 3,
    "ǽ": 7,
    "Ǿ": 4,
    "ǿ": 8
  };
  console.log(JSON.stringify(occ));
}

var htmlValue = '';
var upOcc = { ...occ
};

TIObutton.onfocus = function () {
  let used = editor.getValue();
  TIObutton.href = tio_url(used);
}; //create the code editor


var field = document.getElementById("field");
var editor = CodeMirror(field, {
  lineNumbers: true,
  tabSize: 2,
  mode: 'javascript',
  theme: 'monokai'
});
editor.setSize(1200, 60); //update the buttons when the text in the editor changes

editor.on('change', updateButtons); //and update button

updateButtons(); //filter keys that are not allowed

editor.on("keydown", function (cm, event) {
  var K = event.key; //In order to allways allow keys like backspace,enter,shift, etc

  if (K.length == 1 || K.length == 2) {
    //allow all keys that involve Ctrl (Ctrl-z, Ctrl-y,etc)
    if (!event.ctrlKey) {
      //stop default behaviour
      event.preventDefault();
      upOcc = { ...occ
      }; //Count the chars used

      let used = editor.getValue();
      [...used].forEach(chr => upOcc[chr]--); //Insert key if still available

      if (K.length < 3) {
        [...K].forEach(chr => {
          if (upOcc.hasOwnProperty(chr) && upOcc[chr] > 0) {
            insertString(chr);
            upOcc[chr]--;
          }
        });
      }
    }
  }
}); //on button click create new url

document.getElementById("urlButton").onclick = el => createURL(el);

function updateButtons() {
  let htmlValue = '';
  upOcc = { ...occ
  };
  let used = editor.getValue();
  [...used].forEach(a => upOcc[a]--);

  for (let [key, value] of Object.entries(upOcc)) {
    if (value > 0) htmlValue += `<button title="${key}">${key}</br><div class='small'>${value}</div></button>`;
  }

  document.getElementById('buttons').innerHTML = htmlValue;
  var elems = document.getElementsByTagName("BUTTON");

  for (var i = 0, len = elems.length; i < len; i++) elems[i].onclick = el => inputF(el);
}

function count(arr) {
  var count = {};
  arr.forEach(function (s) {
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
  prompt('Ctr-c + Enter', 'https://minialfa.github.io/LEditor/#' + encodeURIComponent(JSON.stringify(upOcc)));
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
    };
    doc.replaceRange(str, pos);
  }
} // -------------------------------------------------------------------------------

/* taken from the TIO github code at https://github.com/TryItOnline/tryitonline */
// -------------------------------------------------------------------------------


function tio_url(str) {
  return "https://tio.run/##" + byteStringToBase64(byteArrayToByteString(deflate(langInput.value + "\xff" + "\xff" + textToByteString(str) + "\xff" + "\xff")));
}

function deflate(byteString) {
  return pako.deflateRaw(byteStringToByteArray(byteString), {
    "level": 9
  });
}

function iterate(iterable, monad) {
  if (!iterable) return;

  for (var i = 0; i < iterable.length; i++) monad(iterable[i]);
}

function textToByteString(string) {
  return unescape(encodeURIComponent(string));
}

function byteStringToBase64(byteString) {
  return btoa(byteString).replace(/\+/g, "@").replace(/=+/, "");
}

function byteArrayToByteString(byteArray) {
  var retval = "";
  iterate(byteArray, function (byte) {
    retval += String.fromCharCode(byte);
  });
  return retval;
}

function byteStringToByteArray(byteString) {
  var byteArray = new Uint8Array(byteString.length);

  for (var index = 0; index < byteString.length; index++) byteArray[index] = byteString.charCodeAt(index);

  byteArray.head = 0;
  return byteArray;
}
