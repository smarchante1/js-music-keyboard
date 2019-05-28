$(document).ready( function() {
  // your code here
  $( ".note.c" ).click(function() {
    let sound = document.getElementById("cAudio");
    sound.play();
    // alert( "Handler for .click() called." );
  });

  $( ".note.d" ).click(function() {
    let sound = document.getElementById("dAudio");
    sound.play();
  });

  $( ".note.e" ).click(function() {
    let sound = document.getElementById("eAudio");
    sound.play();
  });

  $( ".note.f" ).click(function() {
    let sound = document.getElementById("fAudio");
    sound.play();
  });

  $( ".note.g" ).click(function() {
    let sound = document.getElementById("gAudio");
    sound.play();
  });

  $( ".note.a" ).click(function() {
    let sound = document.getElementById("aAudio");
    sound.play();
  })

  $( ".note.b" ).click(function() {
    let sound = document.getElementById("bAudio");
    sound.play();
  });

});
