import path from 'path';
import nunjucks from 'nunjucks';



const templatesDirPath = path.join(__dirname, '../templates')
const env = nunjucks.configure(templatesDirPath);
const singleSvgPreview = env.getTemplate("single-svg-preview.html");

export const templates = {
	singleSvgPreview
};
