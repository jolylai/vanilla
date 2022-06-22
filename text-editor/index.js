(() => {
  const btn = document.querySelector("#btn");

  const enableBlob = () => {
    const selection = window.getSelection();
    if (selection.rangeCount) {
      const wrapper = document.createElement("b");
      const range = selection.getRangeAt(0).cloneRange();
      range.surroundContents(wrapper);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };
  btn.addEventListener("click", enableBlob);
})();
