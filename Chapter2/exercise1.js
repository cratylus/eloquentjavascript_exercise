Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

for (var i = 0; i < 7; i++) {
	var lineContent = "";
	for (var j = 0; j <= i; j++) {
		lineContent += '#';
	};
	console.log(lineContent);
};