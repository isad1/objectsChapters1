function Song(name,releaseDay,duration,artist,originCountry){
    this.name = name ;
    this.releaseDay = releaseDay ;
    this.duration = duration ;
    this.artist = artist ;
    this.country = originCountry ;
    this.records = function(){
        console.log(this.name + ' holds various natioanl records')
    };
    this.playing = function(){
        console.log(this.name +' song is playing for  ' + this.duration + ' minutes')
    };
    this.firstViewed = function(){
        console.log(this.name + ' first released on ' + this.releaseDay)
    }
    

    
}

var song1 = new Song("Maa tujhe salam" , ' monday ' , 5 , "AR rahman", "India") ;
var song2 = new Song("yada yada he dharmasya", ' tuesday ' , 3 , "mahabharat song" , "India") ;
var song3 = new Song("Lo que tengo yo" , ' saturday ' , 4 , "lali" , "mexico") ;

console.log(song1 , song2 , song3);
song1.playing();
song1.records();
song2.playing();
song2.records();
song3.playing();