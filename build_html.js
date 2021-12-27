//import filesystem module
let fs = require('fs');

//read partials. This way we can reuse our head, header, and footer on all pages
var head = fs.readFileSync(process.cwd() + "/" + 'partials/head.md').toString();
var header = fs.readFileSync(process.cwd() + "/" + 'partials/header.md').toString();
var footer = fs.readFileSync(process.cwd() + "/" + 'partials/footer.md').toString();

//read all files in content folder
let directory_name = "content";
let filenames = fs.readdirSync(directory_name);

//for each content file, convert md to html and concatenate content with partials (head, header, footer)
filenames.forEach((file) => {
	let content = fs.readFileSync(process.cwd() + "/" + directory_name + '/' + file).toString();

	var showdown  = require('showdown'),
	    converter = new showdown.Converter(),
	    text      = content,
	    html      = converter.makeHtml(text);

	//write or replace the html file with corresponding filename. trim .md off the end before adding .html extension
	fs.writeFile(file.slice(0,-3) + '.html', head + header + html + footer , function (err) {
		if (err) throw err;
	  	console.log(file.slice(0,-3) + '.html' + ' created or updated');
	});
});