const url = "https://api.quotable.io/random";
function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote").innerHTML = data.content;
    document.getElementById("author").innerHTML = "- "+data.author;
    document.documentElement.style.setProperty("--main-color",getRandomColor());
   })
 .catch(function(err) {
    console.log(err); 
    });
 }

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("qtbtn").addEventListener("click", generateQuote)