function handleSubmit(event) {
  alert('Hello');
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  //checkForName(formText);

  console.log('::: Form Submitted :::');
  fetch('http://localhost:1337/test')
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById('results').innerHTML = res.message;
    });
}

export { handleSubmit };
