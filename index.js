import App from './App/App';

const app = new App();

const fileInput = `${__dirname}/Fixtures/exemple.txt`;
const fileOutput = `${__dirname}/output/output.txt`;

app.readFile(fileInput)
    .then(app.startProgrammeAndReturnOutput)
    .then((outputData)=>{
        app.saveFile(outputData, fileOutput);
    });

