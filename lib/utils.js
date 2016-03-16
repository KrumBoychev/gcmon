//helper functions

function attention(string) {
	//blink does not work for some terminals :(
	return '\x1b[7m' + string + '\x1b[25m';
}

function convertUptime(totalSeconds) {

    var days  = Math.floor(totalSeconds / (3600*24));
    totalSeconds %= (3600*24);
    var hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    var minutes = Math.floor(totalSeconds / 60);
	// format 3d,20h,25m
    return(days + "d," + hours + "h," + minutes + "m");
}

function parseLatency(repl_laten_string) {
	// format: <min>/<avg>/<max>/<std_dev>/<sample_size>
	var values = repl_laten_string.split('/');
    // return in milli secs
	return (parseFloat(values[1]) * 1000);
}

module.exports = {
  attention: attention,
  convertUptime: convertUptime,
  parseLatency: parseLatency
};
