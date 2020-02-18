function scrollToElement() {
  var element = document.getElementById("lol");

  element.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest"
  });
}
