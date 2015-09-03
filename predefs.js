var callbackdata=function(data) {
	console.log('callback data from console', data);
};
var cbd = callbackdata;
var callbackerr=function(err) {
	console.log('callback err from console', err);
};
var cbe = callbackerr;
var callbackerrdata=function(err, data) {
	console.log('callback err, data from console', err, data);
};
var cbed = callbackerrdata;
var options = {};
var init = function() {
	branch.init('key_live_gnbMtci1g3qBX2jRNsF1RhjpswaZkiaa', options, callbackerrdata);
};
