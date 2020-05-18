const formatWord = (word) => {
  const splittedWord = word.split(``);
  const formattedWord = splittedWord.map((char) => `<span>${char}</span>`);

  return `<span class="animated-text">${formattedWord.join(``)}</span>`;
};

const formatNode = (node, options = {}) => {
  const splittedNodeText = node.innerHTML.split(`\n`);
  const formattedText = splittedNodeText.map((word) => formatWord(word));

  node.innerHTML = formattedText.join(` `);
  node.style.opacity = `1`;
};

export { formatNode };
