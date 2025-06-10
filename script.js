const dictionary = {
  "こんにちは": "hello",
  "ありがとう": "thank you",
  "さようなら": "goodbye",
  "猫": "cat",
  "犬": "dog"
};

function translateToEnglish() {
  const input = document.getElementById("inputText").value;
  let output = input;

  for (const [jp, en] of Object.entries(dictionary)) {
    output = output.replaceAll(jp, en);
  }

  document.getElementById("outputText").innerText = output;
}

function translateToJapanese() {
  const input = document.getElementById("inputText").value;
  let output = input;

  for (const [jp, en] of Object.entries(dictionary)) {
    output = output.replaceAll(en, jp);
  }

  document.getElementById("outputText").innerText = output;
}
