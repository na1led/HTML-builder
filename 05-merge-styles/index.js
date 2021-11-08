const fs = require('fs');
const path = require('path');




let folderDir = path.join(path.dirname(__filename), 'styles');
let dest = path.join(path.dirname(__filename), 'project-dist');


fs.mkdir(dest, { recursive: true }, (error) => {
	if (error) {
		throw error;
	}
});

let destFile = path.join(dest, 'bundle.css');


let p = new Promise(function (resolve, reject) {
	fs.readdir(folderDir, { withFileTypes: true }, (error, files) => {
		resolve(files);
	});

});

p.then((data) => {
	console.log('Starting scanning files...');
	checkFiles(data);

}).catch((err) => {
	if (err) {
		throw err;
	}
});

async function checkFiles(data) {
	for await (let item of data) {
		let ext = path.extname(item.name);
		if (ext == '.css') {
			let dirName = path.join(folderDir, item.name);

			fs.readFile(dirName, 'utf8', (err, data) => {

				if (err) {
					throw err;
				}
				fs.appendFile(destFile, `${data}`, (error) => {
					if (error) {
						throw error;
					}

				});

			});

		}
		console.log(item.name + ' in for await');
	}

}

