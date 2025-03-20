let isButtonClicked = false;

const models = {
  model1: '<iframe title="Animal cell 2.0 - annotated in English" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0d9f7f4257224975b2ef83a283709b2f/embed" width="100%" height="300"></iframe>',
  model2: '<iframe width="100%" height="300" src="https://sketchfab.com/models/YOUR_MODEL_2_ID/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'
};

function showModel(modelKey) {
  if (isButtonClicked) return;
  isButtonClicked = true;

  const modelViewer = document.getElementById('model-viewer');
  const backButton = document.getElementById('back-button');
  const spinner = document.getElementById('loading-spinner');

  spinner.style.display = 'block';
  modelViewer.innerHTML = '';

  setTimeout(() => {
    modelViewer.innerHTML = models[modelKey];
    backButton.style.display = 'block';
    spinner.style.display = 'none';
    isButtonClicked = false;
  }, 500);
}

function goBack() {
  const modelViewer = document.getElementById('model-viewer');
  const backButton = document.getElementById('back-button');
  modelViewer.innerHTML = '';
  backButton.style.display = 'none';
}
