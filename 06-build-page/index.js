const fs = require('fs');
const path = require('path');

let projectFolder = path.dirname(__filename);

fs.mkdir(`${projectFolder}/project-dist`,{recursive: true}, (err)=>{
	if (err) {
		throw err;
	}
});
fs.readFile(`${projectFolder}/template.html`, 'utf8' ,(err,data)=>{
	console.log(data);

});