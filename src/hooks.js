import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import { minify } from 'html-minifier'; //Imports the module


export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userid = cookies.userid || uuid();

	const response = await resolve(event);

	if (response.headers['content-type'] === 'text/html') {
		response.body = minify(response.body, minification_options); //Minifies the response.body
	}

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers.set(
			'set-cookie',
			cookie.serialize('userid', event.locals.userid, {
				path: '/',
				httpOnly: true
			})
		);
	}

	return response;
};

const minification_options = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true,
	removeEmptyElements: true
};


