/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Ghost and Stuff","One Hundred Miles and Running","Desperados","No Fun"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imagesLinks = ["https://i.ytimg.com/vi/pb-EwykPTv8/hqdefault.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/YoungSinatraIV.jpg/220px-YoungSinatraIV.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Uncomfortable_by_Andy_Mineo.jpg/220px-Uncomfortable_by_Andy_Mineo.jpg","https://i.ytimg.com/vi/8Vlej7QUGGE/maxresdefault.jpg"];
var songLengths=["3:14","5:54","3:36","2:48"]
var artists=["Deadmau5","Logic","Andy Mineo","Joji"];
var listen=["https://www.youtube.com/watch?v=h7ArUgxtlJs","https://www.youtube.com/watch?v=heqMtBJxfVg"
,"https://www.youtube.com/watch?v=RBlUqAjtSL0","https://www.youtube.com/watch?v=8Vlej7QUGGE"];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(title){
        $("#songs").append("<p>"+title+"</p>");
    });
    imagesLinks.forEach(function(cover){
        $("#images").append("<img src="+cover+">");
    });
    songLengths.forEach(function(time){
        $("#lengths").append("<p>"+time+"</p>")
    });
    artists.forEach(function(names){
        $("#artists").append("<p>"+names+"</p>")
    });
    listen.forEach(function(links){
        $("#links").append("<a href='"+links+"'>"+"Listen"+"</a>");
    });

}


function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
 

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
