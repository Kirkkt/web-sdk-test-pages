// {{{ constants {{{1
var localkey = 'key_live_amjUVsEyFPbXiDNlbyqNHmepafpADskB';

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

var include = function(source, functionlist) {
	if (!source) {
		source = "http://localhost:8000/github/Smart-App-Banner-Deep-Linking-Web-SDK/dist/build.min.js";
	}

	if (!functionlist) {
		functionlist = "init data addListener removeListener setIdentity logout track link sendSMS referrals credits creditHistory applyCode validateCode getCode redeem banner closeBanner";
	} else {
		functionlist += "init data addListener removeListener setIdentity logout track link sendSMS referrals credits creditHistory applyCode validateCode getCode redeem banner closeBanner";
	}

	(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src=source;k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},functionlist.split(" "), 0);
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

// individual pages {{{1
// empty playground {{{2
var emptyplayground = function() {
	mininclude();
}

// banner forgetHide {{{2
var bannerforgethide = function() {
	mininclude();
	init();
}
var bannerforgethideaction = function(phone) {
	var data = {
		data : {
			mydata: 'something',
			foo: 'bar',
			'$desktop_url': 'https://en.wikipedia.org/wiki/Internet',
			'$ios_url': 'https://en.wikipedia.org/wiki/Internet',
			'$ipad_url': 'https://en.wikipedia.org/wiki/Internet',
			'$android_url': 'https://en.wikipedia.org/wiki/Internet',
			'$og_app_id': '12345',
			'$og_title': 'My App',
			'$og_description': 'My app\'s description.'
		},
		tags: ['foo1', 'foo2']
	};
	var options = {
		icon: 'http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Appstore-icon.png',
		title: 'Branch Demo App',
		description: 'The Branch demo app!',
		openAppButtonText: 'Open',
		downloadAppButtonText: 'Download',
		sendLinkText: 'Send Link',
		phonePreviewText: '+44 9999-9999',
		showiOS: true,
		showiPad: true,
		showAndroid: true,
		showDesktop: true,
		iframe: true,
		disableHide: false,
		forgetHide: (phone.value === 'forgetHide'),
		position: 'top',
		mobileSticky: false,
		desktopSticky: true,
		customCSS: '.title { color: #F00; }',
		make_new_link: true,
		open_app: true
	};
	branch.banner(options, data);
}

// deepview {{{2
var deepview = function() {
	include(null, " deepview deepviewCta ");
	localinit();
	var data = {
		channel: 'facebook',
		data: {
			mydata: 'something',
			foo: 'bar',
			'$desktop_url': 'https://en.wikipedia.org/wiki/Internet',
			'$ios_url': 'https://en.wikipedia.org/wiki/Internet',
			'$ipad_url': 'https://en.wikipedia.org/wiki/Internet',
			'$android_url': 'https://en.wikipedia.org/wiki/Internet',
			'$deepview_path': 'item_id=12345',
			'$og_app_id': '12345',
			'$og_title': 'My App',
			'$og_description': 'My app\'s description.'
		},
		feature: 'dashboard',
		stage: 'new user',
		tags: [ 'tag1', 'tag2' ],
	};
	var options = {
		make_new_link: true,
		open_app: true
	};
	var callback = function(err) {
		console.log('kirk deepview callback:', err);
	};

	branch.deepview(data, options, callback);
};

var deepviewaction = function() {
	window.__branchRedirectToStore();
};
