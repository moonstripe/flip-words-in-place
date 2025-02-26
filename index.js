function reverseInPlace(arr, start, end) {
    if (end > arr.length) {
        throw new Error("end cannot be larger than array length.");
    }
    var lastIndex = end - 1;
    for (var i = start, j = lastIndex; i < j; i++, j--) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
function reverseInPlaceAroundSpaces(sentenceArr) {
    var start = 0;
    for (var i = 0; i <= sentenceArr.length; i++) {
        if (i === sentenceArr.length || sentenceArr[i] === "_") {
            reverseInPlace(sentenceArr, start, i);
            start = i + 1;
        }
    }
    reverseInPlace(sentenceArr, 0, sentenceArr.length);
}
var sentence = "just_in_case".split("");
reverseInPlaceAroundSpaces(sentence);
console.log(sentence.join(""));
