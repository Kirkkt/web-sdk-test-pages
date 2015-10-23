// {{{ constants {{{1
var localkey = 'key_live_ggkIIzvaEwblwYQp7ATCMomepdfePSjU';

var options = {};
var data = {};
var linkData = {};

// callbacks {{{1
var callbackdata=function(data) {
	console.log('callback data', data);
};
var cbd = callbackdata;

var callbackerr=function(err) {
	console.log('callback err', err);
};
var cbe = callbackerr;

var callbackerrdata=function(err, data) {
	console.log('callback err, data', err, data);
};
var cbed = callbackerrdata;

// include {{{1
var cdnversion = "v1.7.0";

var include = function(source) {
	if (!source) {
		source = "http://localhost:8000/github/Smart-App-Banner-Deep-Linking-Web-SDK/dist/build.min.js";
	}
	(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src=source;k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"init data addListener removeListener setIdentity logout track link sendSMS referrals credits creditHistory applyCode validateCode getCode redeem banner closeBanner".split(" "), 0);
};
var mininclude = function() {
	include("http://localhost:8000/github/Smart-App-Banner-Deep-Linking-Web-SDK/dist/build.min.js");
};
var debuginclude = function() {
	include("http://localhost:8000/github/Smart-App-Banner-Deep-Linking-Web-SDK/dist/build.js");
};
var cdninclude = function() {
	include("https://cdn.branch.io/branch-"+cdnversion+".min.js");
};

// init {{{1
var init = function() {
	branch.init('key_live_gnbMtci1g3qBX2jRNsF1RhjpswaZkiaa', options, function(err, data) {console.log("callback after init:", err, data);});
};

var localinit = function() {
	branch.init(localkey, options, function(err, data) {console.log("callback after init:", err, data);});
};

