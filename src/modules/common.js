// let debugUrl = "http://api.github.com/repos/tree-some/tree-some.github.io/contents";
let debugUrl = "https://raw.githubusercontent.com/tree-some/tree-some.github.io/master";
// let debugUrl = "";


// Vue route 이동
export const routeAssignUrl = function(url, _this) {
    let router = (this && this.$router) || (_this && _this.$router);
    if ( typeof url === "string" && router ) { 
        if ( router.history.current.path !== url ) { 
            router.push({ path: url }); 
        }   
    }   
}

export const hrefChange = function(url) {
    if ( typeof url === "string" ) { 
		window.location.assign(url);
    }   
};

export const openNewTab = function(url) {
    if ( typeof url === "string" ) { 
		window.open(url);
    }   
};

export const reqHttpGet = function(url) {
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.addEventListener('load', (evt) => {
			resolve(evt.target);
		});
		req.addEventListener('error', (evt) => {
			reject(evt);
		});

		req.open("GET", url);
		req.send();
	});
};

export const getXMLJson = function(url) {
	return new Promise((resolve, reject) => {
		reqHttpGet(url).then(res => {
			let json = JSON.parse(res.responseText);
			resolve(json);
		}).catch(reject);
	});
};

export const getPostsJson = function() {
	return new Promise((resolve, reject) => {
		reqHttpGet(debugUrl + "/posts.json").then(res => {
			let json = JSON.parse(res.responseText);
			resolve(json);
		}).catch(reject);
	});
};

export const getConfigJson = function() {
	return new Promise((resolve, reject) => {
		reqHttpGet(debugUrl + "/config.json").then(res => {
			let json = JSON.parse(res.responseText);
			resolve(json);
		}).catch(reject);
	});
};

export const getPostHTML = function(path) {

	if ( path[0] !== "/" ) {
		path = "/" + path;
	}

	return reqHttpGet(debugUrl + path);
};

export const getContent = function(element) {
	if ( !element ) {
		element = document.querySelector('#router-view>main');
	}

	return element.innerText.slice(0, 160);
};

export const mkKeyword = function(words) {
	const defaultKeywords = [
		"SOPIA",
		"소피아",
		"스푼 매니저",
		"스푼 봇",
	];

	return defaultKeywords.concat(words).join(", ");
};
