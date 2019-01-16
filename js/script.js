/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Ghost and Stuff","One Hundred Miles and Running","Desperados","No Fun"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = ["https://i.ytimg.com/vi/pb-EwykPTv8/hqdefault.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/YoungSinatraIV.jpg/220px-YoungSinatraIV.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Uncomfortable_by_Andy_Mineo.jpg/220px-Uncomfortable_by_Andy_Mineo.jpg","https://i.ytimg.com/vi/8Vlej7QUGGE/maxresdefault.jpg"];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

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
