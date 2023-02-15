var siteName = document.getElementById('siteName');
var siteURL = document.getElementById('siteURL')
var submitBtn = document.getElementById('submitBtn');
var bookmarksList = document.getElementById('bookmarksList')
var siteNameContainer = document.getElementById('siteNameContainer')
var siteURLContainer = document.getElementById('siteURLContainer')


if (inputCheck)
  submitBtn.addEventListener('click', addBookmark);

var bookmarksArr;

(function () {
  if (localStorage.getItem('bookmarks') == null)
    bookmarksArr = [];
  else {
    bookmarksArr = JSON.parse(localStorage.getItem('bookmarks'));
    display();
  }
})();

function addBookmark() {
  siteNameContainer.innerHTML = ' ';
  siteURLContainer.innerHTML = ' ';
  if (inputCheck()) {
    var bookmark = {
      sName: siteName.value,
      sURL: siteURL.value
    }
    bookmarksArr.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarksArr))
    display();
    clearForm();

  }
}

function display() {
  var box = ``;
  for (var i = 0; i < bookmarksArr.length; i++) {
    box += `
    <div class="bookmark-content p-4 w-100 mb-5 " id="bookmark">
    <div class="w-50 d-flex justify-content-between">
      <p class="fw-bold fs-4" id="title">${bookmarksArr[i].sName}</p>
      <div class="btns">
        <a  class="btn btn-primary" id="visit" href="${bookmarksArr[i].sURL}">Visit</a>
        <button class="btn btn-danger" id="delete" onclick="deleteBookmark(${i})">Delete</button>
      </div>
    </div>
  </div>
    `
  }
  bookmarksList.innerHTML = box;
}


function deleteBookmark(index) {
  bookmarksArr.splice(index, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarksArr));
  display();
}

function clearForm() {
  siteName.value = '';
  siteURL.value = '';

}

function inputCheck() {
  var checkResult = true;

  if (siteName.value == '') {
    siteNameContainer.innerHTML += `<div class="warning fw-bold p-1 w-75 m-3 position-relative start-50 translate-middle-x" id="URLWarning">Name Field is required</div>`
    checkResult = false
  }

  if (siteURL.value == '') {
    siteURLContainer.innerHTML = `<div class="warning fw-bold p-1 w-75 m-3 position-relative start-50 translate-middle-x" id="URLWarning">URL Field is required</div>`
    checkResult = false;
  }

  for (var i = 0; i < bookmarksArr.length; i++) {
    if (siteName.value == bookmarksArr[i].sName) {
      siteNameContainer.innerHTML = `<div class="warning fw-bold p-1 w-75 m-3 position-relative start-50 translate-middle-x" id="URLWarning">This name already exists</div>`
      checkResult = false;
      break;
    }
  }

  for (var i = 0; i < bookmarksArr.length; i++) {
    if (siteURL.value == bookmarksArr[i].sURL) {
      siteURLContainer.innerHTML = `<div class="warning fw-bold p-1 w-75 m-3 position-relative start-50 translate-middle-x" id="URLWarning">This URL already exists</div>`
      checkResult = false;
      break;
    }
  }

  return checkResult;
}