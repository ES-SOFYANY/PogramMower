import App from './App/App';

const app = new App();

const fileInputPath = `${__dirname}/Fixtures/exemple.txt`;
const fileOutputPath = `${__dirname}/output/output.txt`;

app.readFile(fileInputPath)
    .then(app.startProgrammeAndReturnOutput)
    .then(app.saveOutputInFile(fileOutputPath));

