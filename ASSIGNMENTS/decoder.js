alphabet = ['a','b','c','d', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function reverse(alpha) {
        rIndex = 25 - alphabet.indexOf(alpha)
        return alphabet[rIndex]
    }
   
function reverseWord(word){
    wordoutput=""
    for (const element of word){
        if(alphabet.includes(element)){
            wordoutput+=reverse(element)
        }
        else wordoutput += element
    }
    return wordoutput;
}

const encodedMessage = "sld ziv blf";
const decodedMessage = reverseWord(encodedMessage);

console.log("Decoded Message:", decodedMessage);
