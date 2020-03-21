function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value
    });
    return vars
  }  


var video1 = "";
var video2 = "";

if (!getUrlVars()["v1"]) {
    video1 = "5e5ca347bd322b00287a1ecc";
} else {
    video1 = getUrlVars()["v1"];
}

if (!getUrlVars()["v2"]) {
    video2 = "5e5af541eb7beb0028039dfb";
} else {
    video2 = getUrlVars()["v2"];
}
	

var disqus_config = function () {
    this.page.url = 'https://livecounts.io/storyfire-view-count/compare/?v1='+video1+'&v2='+video2;
	this.page.identifier = video1+'-vs-'+video2;
};

(function() {
var d = document, s = d.createElement('script');
s.src = 'https://livecounts-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
