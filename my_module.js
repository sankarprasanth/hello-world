function hello () {
	// body...
	return "world";
}
function helloworld(){
	return hello() + "again";
}
module.exports.helloworldAgain=helloworld;