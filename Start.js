
// 1 
var price = 100;
var product = "pen";
var tax = 20;
console.log(product);
var total = price + tax;
console.log(total);

//2
var fruit = "Apple";
var count = "10";
var price = "50";
var total = count * price;
console.log(fruit);
console.log(total);

//3
var a = 10;
var b = ++a;

console.log(a);
console.log(b);
var c = a++;
console.log(c);

//4
function abc()
{
    console.log("abcd")
}
 abc()

 //5

var a = 10;
var b = 15;
function add()
{
    console.log(a+b);
}
add()

//6

var factor = "kamal";
var fplayer = "dhoni";
var fmovie = "anbe sivam";

function favourite(){
    console.log("favourite actor:", factor);
    console.log("favourite player:", fplayer);
    console.log("favourite movie:", fmovie);
}
favourite()


//7
function area(l,b)
{
    console.log(l*b);
}
area(10,3);

//8
 function add(a,b)
 {
    return a+b
 }
 var c = add(10,20)
 console.log(c)

 //9

    var rain = false
    if(rain)
    {
        console.log("unbrella take")
    }
    else {
        console.log("no need")
    }

// 10
var season = "Spring";
if (season == "Spring"){
    console.log("Enjoy the bloom");
}
if (season == "Summer"){
    console.log("HAve fun")
}

//11
 
var score = 50;
if (score <= 50 ){
    console.log("need to improve")
}
else if (50 > score &&score <= 70){
    console.log("good job")
}
else if (score>70)
    console.log("excellent")

//12
 
var num = 4;
if (num%2==0){
    console.log("even")
}
else{
    console.log("odd")
}

//13
var lett = "g"

if ("aeiouAEIOU".includes(lett) )
{
    console.log("vowel")
}
else{
    console.log("consonent")
}


//14

for(count=1;count<=10;count=count+1){
    console.log(count)

}

//15
for (count=1;count<=10;count=count+2)
    console.log(count)

//16

for (count=10;count>=1;count=count-1)
    console.log(count)

//17

for(count=1;count<=10;count=count+1){
    console.log(count+"*"+"2" + "=" +(count*2))

}
