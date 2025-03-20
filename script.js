// Define your 3D models here
const models = {
  model1: '<iframe title="Animal cell 2.0 - annotated in English" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0d9f7f4257224975b2ef83a283709b2f/embed" width="100%" height="400"></iframe>',
  model2: '<iframe width="100%" height="400" src="https://sketchfab.com/models/YOUR_MODEL_2_ID/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'
};

// Function to show the selected model
function showModel(modelKey) {
  const modelViewer = document.getElementById('model-viewer');
  const backButton = document.getElementById('back-button');
  modelViewer.innerHTML = models[modelKey];
  backButton.style.display = 'block';
}

// Function to go back to the main menu
function goBack() {
  const modelViewer = document.getElementById('model-viewer');
  const backButton = document.getElementById('back-button');
  modelViewer.innerHTML = '';
  backButton.style.display = 'none';
}