import App from './App/App';

const app = new App();

const fileInput = `${__dirname}/Fixtures/exemple.txt`;
const fileOutpout = `${__dirname}/output/output.txt`;

app.readFile(fileInput)
  .then((inputData) => {
    app.saveFile(fileOutpout, inputData);
  });

