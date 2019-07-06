let updateConcourseBody = function() {
  var title = document.getElementsByTagName('title')[0].innerText

  if (title.endsWith("Concourse")) {
    let defaultImage = "http://chillestmonkey.com/img/monkey.gif"
    chrome.storage.sync.get({
      bg: defaultImage
    }, function(opt) {
      let imageURL = opt.bg
      if (imageURL == "") imageURL = defaultImage
      document.getElementsByTagName("body")[0].style = `background-image: url('${imageURL}'); background-size: cover;`
      chrome.runtime.sendMessage({show : true})
    })
  }
}

updateConcourseBody();
