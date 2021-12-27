let fs = require('fs')

var head = fs.readFileSync(process.cwd() + "/" + 'head.md').toString();
var header = fs.readFileSync(process.cwd() + "/" + 'header.md').toString();
var footer = fs.readFileSync(process.cwd() + "/" + 'footer.md').toString();

let filename = "test.md"
let content = fs.readFileSync(process.cwd() + "/" + filename).toString()

var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = content,
    html      = converter.makeHtml(text);

fs.writeFile(filename.slice(0,-3) + '.html', head + header + html + footer , function (err) {
	if (err) throw err;
  	console.log('File is created successfully.');
});

