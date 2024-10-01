function searchIDE() {
  const searchValue = document.getElementById('searchBar').value.toLowerCase();
  const ideItems = document.querySelectorAll('.card');
  ideItems.forEach(item => {
      const ideName = item.querySelector('.card-title').textContent.toLowerCase();
      if (ideName.includes(searchValue)) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
}

function openDownloadForm(appName) {
  const email = prompt(`Please enter your email to receive the download link for ${appName}:`);
  if (email) {
      alert(`Thank you! You will receive the download link for ${appName} at ${email}.`);
  }
}

function submitReview(ideName) {
  alert(`Your review for ${ideName} has been submitted.`);
}

document.getElementById('accountForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Account created successfully!');
});

document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Subscribed to the newsletter successfully!');
});
