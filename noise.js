$(document).ready( function() {
  // your code here
  $( ".note.c" ).click(function() {
    let sound = document.getElementById("cAudio");
    sound.play();
  });

  $('body').keydown((event) => {
    let sound = document.getElementById("cAudio");
    if (event.key === 'c') {
     sound.play();
    }
  });

  
  $( ".note.d" ).click(function() {
    let sound = document.getElementById("dAudio");
    sound.play();
  });

  $('body').keydown((event) => {
    let sound = document.getElementById("dAudio");
    if (event.key === 'd') {
     sound.play();
    }
  });

  $( ".note.e" ).click(function() {
    let sound = document.getElementById("eAudio");
    sound.play();
  });

  $('body').keydown((event) => {
    let sound = document.getElementById("eAudio");
    if (event.key === 'e') {
     sound.play();
    }
  });

  $( ".note.f" ).click(function() {
    let sound = document.getElementById("fAudio");
    sound.play();
  });

  $('body').keydown((event) => {
    let sound = document.getElementById("fAudio");
    if (event.key === 'f') {
     sound.play();
    }
  });

  $( ".note.g" ).click(function() {
    let sound = document.getElementById("gAudio");
    sound.play();
  });

  $('body').keydown((event) => {
    let sound = document.getElementById("gAudio");
    if (event.key === 'g') {
     sound.play();
    }
  });

  $( ".note.a" ).click(function() {
    let sound = document.getElementById("aAudio");
    sound.play();
  })

  $('body').keydown((event) => {
    let sound = document.getElementById("aAudio");
    if (event.key === 'a') {
     sound.play();
    }
  });

  $( ".note.b" ).click(function() {
    let sound = document.getElementById("bAudio");
    sound.play();
  });

  $('body').keydown((event) => {
    let sound = document.getElementById("bAudio");
    if (event.key === 'b') {
     sound.play();
    }
  });

});
