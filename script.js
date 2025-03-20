body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.buttons button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s ease;
}

.buttons button:hover {
  background-color: #0056b3;
}

.model-viewer {
  margin-top: 20px;
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  transform: translateZ(0); /* Enable GPU acceleration */
}

#back-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #6c757d;
  color: #fff;
  transition: background-color 0.3s ease;
}

#back-button:hover {
  background-color: #5a6268;
}

.loading-spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #007bff;
}
