document.writeln();
var coder = [{
    name: 'john',
    surname:'Doe',
    favoritePerformers:["Justin Timberlake " , " Ed sheeran " , " Emma Waston"],
    age: 25,
    myPhoto: "img/boy1.800x1000.jpg",
    likes:8,
    fun: 'b',
    id:"like"
    },{
    name: 'Maria',
    surname:'Doe',
    favoritePerformers:[" Justin Timberlake " , " Ed sheeran " , " Emma Waston "],
    age: 25,
    myPhoto: "img/girl1.800x1000.jpg",
    likes:4,
    fun: 'b1',
    id:"like1"    
    },{
    name: 'David',
    surname:'Doe',
    favoritePerformers:[" Justin Timberlake " , " Ed sheeran " , " Emma Waston "],
    age: 25,
    myPhoto: "img/boy2.800x1000.jpg",
    likes:5,
    fun: 'b2',
    id:"like2"    
    },{
    name: 'Manuel',
    surname:'porche',
    favoritePerformers:[" Justin Timberlake " , " Ed sheeran " , " Emma Waston "],
    age: 25,
    myPhoto: "img/girl2.800x1000.jpg",
    fun: 'b3',
    likes:8,
    id:"like3"    
    
}]

for(var i=0; i<coder.length; i++){
 document.getElementById("row").innerHTML +=('<div class="column" id="column"><div class="container"><img src=" ' + coder[i].myPhoto + '" alt="' + coder[i].name + '" class="image"><div class="overlay"><div class="text"><div class="name" id="name"> Name : ' + coder[i].name + '</div><div class="surname"> Surename: ' + coder[i].surname + '</div><div class="age">Age: ' + coder[i].age + '</div><div class="favoritePerformers">Favorite Performers : <p>' + coder[i].favoritePerformers + '</p> </div><button class="button button4" id="'+ coder[i].fun +'"type="button">Like |<i class="fa fa-heart" aria-hidden="true"></i><a id="'+ coder[i].id +'">'+ coder[i].likes +'</a> </button></div></div</div></div>')
}
$("#b").on("click", function(){
    $("#like").text(8 + 1);
})
$("#b1").on("click", function(){
    $("#like1").text(4 + 1);
})
$("#b2").on("click", function(){
    $("#like2").text(5 + 1);
})
$("#b3").on("click", function(){
    $("#like3").text(8 + 1);
})

