const formatWord = (word) => {
  const splittedWord = word.split(``);
  const formattedWord = splittedWord.map((char) => {
    const charSpan = document.createElement(`span`);
    charSpan.innerText = char;

    return charSpan;
  });

  const wordSpan = document.createElement(`span`);
  wordSpan.classList.add(`animated-text`);

  formattedWord.forEach((item) => {
    wordSpan.appendChild(item);
  });

  return wordSpan;
};

const formatNode = (node) => {
  const splittedNodeText = node.innerHTML.split(`\n`);
  const formattedText = splittedNodeText.map((word) => formatWord(word));

  node.innerHTML = null;
  formattedText.forEach((item) => {
    node.appendChild(item);
  });
};

export {formatNode};
