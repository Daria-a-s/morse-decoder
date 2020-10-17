const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letters = expr.match(/.{1,10}/g);
    let count = 0;
    let answer = '';
    let code = '';
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] == '**********') answer+= ' '
        else {
        while (count < letters[i].length) {
            switch (letters[i].toString().substring(count,count+2)) {
                case '11':
                    code+= '-';
                    break;
                case '10':
                    code+= '.';
            }
            count+= 2;
        }
        count = 0;
        answer+= MORSE_TABLE[code];
        code = '';
        }
    }
    return answer;
}

module.exports = {
    decode
}

