// Saves options to chrome.storage
function save_options() {
  var bgLink = document.getElementById('bg-link').value;
  chrome.storage.sync.set({
    bg: bgLink
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved. Refresh your browser!';
    chrome.runtime.sendMessage({reload: true})
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    bg: "",
  }, function(items) {
    document.getElementById('bg-link').value = items.bg;
  });
}

function reset() {
  document.getElementById('bg-link').value = "";
  save_options()
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('restore').addEventListener('click', reset);
