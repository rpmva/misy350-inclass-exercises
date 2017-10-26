console.log("hello");

// arrays
let bucket_list = ["learn to fly", 67, "go to japan"];
console.log(bucket_list[3]);

// for loop
for(let i = 0; i<bucket_list.length; i++){
  console.log(bucket_list[i])
}

// nested loop

let movie_list_1 = ["1movie1","2movie2","movie3","12movie4","13movie5"];

let movie_list_2 = ["movie3","movie5","movie1"];

for(let i = 0; i<movie_list_1.length; i++){
  for(let j = 0; j<movie_list_2.length; j++){
    if (movie_list_1[i] == movie_list_2[j]) {
      console.log(movie_list_1[i]);
    }
  }
}

// while loop

let balance = 10000
let years = 0

while(balance < 1000000){
  balance += balance*0.07;
  years +=1;
}

console.log(years);

// iterators

movie_list_1.forEach(movie => console.log("- " + movie));

let new_list = movie_list_1.filter(movie => movie.slice(0, 1) == "1");

new_list.forEach(movie => console.log("- " + movie));
