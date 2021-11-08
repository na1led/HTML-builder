const path = require('path');
const fs = require('fs');


let folderDir = path.join(path.dirname(__filename), 'secret-folder');

let p = new Promise(function (resolve, reject) {
	fs.readdir(folderDir, { withFileTypes: true }, (error, files) => {
		resolve(files);
	});


});
p.then((data) => {
	data.forEach((item) => {
		// console.log(item.name + ' ' + item.isFile());
		// console.log(item.name + ' ' + path.extname(item.name));
		fs.stat(path.join(folderDir, item.name), (err, stats) => {
			let ext = path.extname(item.name);
			if (!item.isFile()) {
			console.log(`${item.name} is not a file!`);
			}else{
				console.log(`File name: [${item.name}] Ext: [${ext}] Size: [${(stats.size / 1000)}kb]`);
			}
		});
			


	});
});

