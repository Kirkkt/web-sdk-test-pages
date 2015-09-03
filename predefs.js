var callbackerrdata=function(data) {
	console.log('callback data from console', data);
};
var callbackerr=function(err) {
	console.log('callback err from console', err);
};
var callbackerrdata=function(err, data) {
	console.log('callback err, data from console', err, data);
};
var options = {};
var init = function() {
	branch.init('key_live_gnbMtci1g3qBX2jRNsF1RhjpswaZkiaa', options, callbackerrdata);
};
