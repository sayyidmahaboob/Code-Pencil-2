function run() {
  const html = document.querySelector(".editor  #htmlCode").value;
  const css =
    " <style> " +
    document.querySelector(".editor  #cssCode").value +
    "</style>";
  const js = document.querySelector(".editor  #jsCode").value;
  const result = document.querySelector(".editor  #output");

  //   display output
  result.contentDocument.body.innerHTML = html + css;

  // display js
  result.contentWindow.eval(js);
}

// event listeners
document.querySelector(".editor  #htmlCode").addEventListener("keyup", run);
document.querySelector(".editor  #cssCode").addEventListener("keyup", run);
document.querySelector(".editor  #jsCode").addEventListener("keyup", run);
