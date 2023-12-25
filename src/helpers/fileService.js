const path = require('path');

class FileService {
    saveFile(file) {
        try {
            const fileName = `test.jpg`;
            const filePath = path.resolve('static', fileName);

            file.mv(filePath);

            return fileName;
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new FileService();
