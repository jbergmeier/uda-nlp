const handleSubmit = (event) => {
  event.preventDefault();
  document.getElementById('results').innerHTML = '';

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  Client.checkForName(formText);

  console.log('::: Form Submitted :::');
  fetch('/test', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ textContent: formText }),
  })
    .then((res) => res.json())
    .then(function (res) {
      const resultsArea = document.getElementById('results');

      resultsArea.appendChild(document.createElement('p')).innerHTML =
        'Language: ' + res.result.lang;

      resultsArea.appendChild(document.createElement('p')).innerHTML =
        'Confidence: ' + res.result.confidence;
    });
};

export { handleSubmit };
