function headerClick(elem) {
    if (elem.innerHTML === 'top') {
      document.getElementById("top").scrollIntoView();
      window.scrollBy(0, -(elem.offsetHeight))
    }
    if (elem.innerHTML === 'about') {
      document.getElementById("about").scrollIntoView();
      window.scrollBy(0, -(elem.offsetHeight))
      }
    if (elem.innerHTML === 'services') {
      document.getElementById("services").scrollIntoView();
      window.scrollBy(0, -(elem.offsetHeight)-2)
      }
    if (elem.innerHTML === 'Four') {
      document.getElementById("Four").scrollIntoView();
      window.scrollBy(0, -(elem.offsetHeight)-2)
  
    }
    if (elem.innerHTML === 'Five') {
      document.getElementById("Five").scrollIntoView();
      window.scrollBy(0, -(elem.offsetHeight)-2)
    }
  }