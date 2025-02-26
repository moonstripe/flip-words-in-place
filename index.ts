function reverseInPlace(arr: string[], start: number, end: number): void {
  if (end > arr.length) {
    throw new Error("end cannot be larger than array length.");
  }

  const lastIndex = end - 1;

  for (let i = start, j = lastIndex; i < j; i++, j--) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function reverseInPlaceAroundSpaces(sentenceArr: string[]): void {
  let start = 0;

  for (let i = 0; i <= sentenceArr.length; i++) {
    if (i === sentenceArr.length || sentenceArr[i] === "_") {
      reverseInPlace(sentenceArr, start, i);
      start = i + 1;
    }
  }

  reverseInPlace(sentenceArr, 0, sentenceArr.length);
}
console.log("even number of letters");
const even_sentence = "just_in_case".split("");
console.log(even_sentence.join(""));
reverseInPlaceAroundSpaces(even_sentence);

console.log(" =>", even_sentence.join(""));

console.log("odd number of letters");
const odd_sentence = "just_in_the_scenario_my_dog_comes".split("");
console.log(odd_sentence.join(""));
reverseInPlaceAroundSpaces(odd_sentence);

console.log(" => ", odd_sentence.join(""));

