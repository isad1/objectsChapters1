//7. Calculate RequiredRunRate: A team is chasing the target set in a one day international match.The 
// objective is to compute the required run rate. The following have been provided as input, target,
//maxOvers,currentScore, oversBowled

let requiredRunRate = (target,currentScore,maxOvers,oversBowled)=>(target-currentScore)/(maxOvers-oversBowled);

console.log(requiredRunRate(500,300,50,35));
console.log(requiredRunRate(400,200,50,20));
