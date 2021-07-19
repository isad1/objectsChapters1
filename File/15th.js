//lotteryPrize: jack bought a lottery ticket. He will get a reward based on the number of the lottery 
//ticket. He will get a reward based on the number of the lottery ticket. The rules are as follows
// = if the ticket number is divisible by 4 , he gets 6 - if the ticket number is divisible by 7 he
// gets 10 - if the ticket number is divisible by both 4 and 7 than he gets 20 else 0 he will get

let lotteryPrize = (num) => (num%7==0&&num%4==0)?20:(num%4==0)?6:(num%7==0)?10:0 ;

console.log(lotteryPrize(32));
console.log(lotteryPrize(28));
console.log(lotteryPrize(21));
console.log(lotteryPrize(13));
