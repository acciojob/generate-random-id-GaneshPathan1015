


function makeid(l) {
  // write your code here
	let str ="";
	for(let i=0;i<l;i++){
		let rand = generat();
		str =str+String.fromCharCode(rand);
	}
	return str;

	function generat() {
		let gen = parseInt(Math.random()*100);
		if((gen>=48 && gen<=57) || (gen>=65 && gen<=90) || (gen>=97 && gen<=100)){
			return gen;
		}
		else{
			return 100 + parseInt(gen/5);
		}
    }
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
