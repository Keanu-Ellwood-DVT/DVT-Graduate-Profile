function scrollToElement(elementParam) {
  var element = document.getElementById(elementParam);

  element.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest"
  });
}
