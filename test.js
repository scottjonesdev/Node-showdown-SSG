let fs = require('fs')

let filename = "test.md"
let content = fs.readFileSync(process.cwd() + "/" + filename).toString()

var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = content,
    html      = converter.makeHtml(text);

fs.writeFile('test.html', html, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});

