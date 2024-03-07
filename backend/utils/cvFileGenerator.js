const PDFDocument = require('pdfkit');
const fs = require('fs');
const officegen = require('officegen');
const path = require('path');

const generatePDF = async (cvContent) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const outputPath = path.join(__dirname, '../temp', `${Date.now()}.pdf`);
    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);
    doc.text(cvContent);
    doc.end();
    stream.on('finish', () => {
      resolve(outputPath);
    });
    stream.on('error', (err) => {
      reject(err);
    });
  });
};

const generateDOC = async (cvContent) => {
  return new Promise((resolve, reject) => {
    const doc = officegen('docx');
    const outputPath = path.join(__dirname, '../temp', `${Date.now()}.docx`);
    const stream = fs.createWriteStream(outputPath);
    doc.on('finalize', () => {
      resolve(outputPath);
    });
    doc.on('error', (err) => {
      reject(err);
    });
    const pObj = doc.createP();
    pObj.addText(cvContent);
    doc.generate(stream);
  });
};

module.exports = { generatePDF, generateDOC };
