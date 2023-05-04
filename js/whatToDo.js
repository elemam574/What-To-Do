let whatHappens = "My Uncle did'nt Tell Me To Going To Apply To Job That's His Told About It Before";
let whatToDO = "";
let jobIsFine = false;
let whatsNext = "";

if (whatHappens === "My Uncle Tells Me To Going To Apply To Job That's His Told About It Before") {
    whatToDO = "Going To My Uncle Suggested Job";
} else {
    whatToDO = "Going To Investment Organization Job Next Day";
    if (jobIsFine === true) {
        whatsNext = "I'll Continue In This Job and i'll not going to Theater";
    } else if (jobIsFine === false) {
        whatsNext = "I'll Going To Theater Next Day";
    };
};

console.log(whatToDO);
console.log(whatsNext);