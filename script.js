// --------Gloable Variable-------

hero1 = document.getElementsByClassName("hero1")[0];
hero2 = document.getElementsByClassName("hero2")[0];
hero3 = document.getElementsByClassName("hero3")[0];

v2 = document.getElementsByClassName("villen2")[0];
v3 = document.getElementsByClassName("villen3")[0];
v1 = document.getElementsByClassName("villen1")[0];

audio=new Audio("music.mp3");
audioover=new Audio("gameover.mp3")

cross = false;
//------------------START-------------------------------

let videoElements = document.querySelectorAll(".video1, .video2, .video3");

// Loop through each video element and pause it
videoElements.forEach((videoElement) => {
  videoElement.pause();
});

let startbut = document.getElementById("startbutton");
startbut.addEventListener("click", () => {
  v1.classList.add("villenAni");
  v2.classList.add("villenAni");
  v3.classList.add("villenAni");

  // ------------------for villen 1------------

  setInterval(() => {
    setTimeout(() => {
      v1.style.display = "none";
    }, 800);

    setTimeout(() => {
      v1.style.display = "flex";
    }, 2000);
  }, 4800);

  // ------------------for villen 2------------
  setInterval(() => {
    setTimeout(() => {
      v2.style.display = "none";
    }, 300);

    setTimeout(() => {
      v2.style.display = "flex";
    }, 1600);
  }, 9000);

  // ------------------for villen 3------------

  setInterval(() => {
    setTimeout(() => {
      v3.style.display = "none";
    }, 500);

    setTimeout(() => {
      v3.style.display = "flex";
    }, 1900);
  }, 6800);

  videoElements.forEach((videoElement) => {
    videoElement.play();
  });
  score = 0;
  cross = true;

  audio.play();

});

//----------Hero Movement--------

document.onkeydown = function (e) {
  console.log("Key code is ", e.keyCode);


  if (e.keyCode == 38 || e.keyCode == 32) {
    hero1.classList.add("animatehero1");
    hero2.classList.add("animatehero1");
    hero3.classList.add("animatehero1");
    hero1.classList.remove("a2");
    hero2.classList.remove("a2");
    hero3.classList.remove("a2");

    setTimeout(() => {
      hero1.classList.remove("animatehero1");
      hero2.classList.remove("animatehero1");
      hero3.classList.remove("animatehero1");
    }, 700);
  }

  // -----------------Move Char--------------
  if (e.keyCode == 39) {
    //----------move right--------
    hero1X = parseInt(
      window.getComputedStyle(hero1, null).getPropertyValue("left")
    );
    hero1.style.left = hero1X + 150 + "px";
    hero2X = parseInt(
      window.getComputedStyle(hero2, null).getPropertyValue("left")
    );
    hero2.style.left = hero2X + 150 + "px";
    hero3X = parseInt(
      window.getComputedStyle(hero3, null).getPropertyValue("left")
    );
    hero3.style.left = hero3X + 150 + "px";
  }

  //-------------------move left-----------------
  if (e.keyCode == 37) {
    hero1Y = parseInt(
      window.getComputedStyle(hero1, null).getPropertyValue("left")
    );
    hero1.style.left = hero1X - 150 + "px";
    hero2Y = parseInt(
      window.getComputedStyle(hero2, null).getPropertyValue("left")
    );
    hero2.style.left = hero2X - 150 + "px";
    hero3Y = parseInt(
      window.getComputedStyle(hero3, null).getPropertyValue("left")
    );
    hero3.style.left = hero3X - 150 + "px";
  }

  // ---------------small----------------------
  if (e.keyCode == 40) {
    hero1.classList.add("a2");
    hero2.classList.add("a2");
    hero3.classList.add("a2");
  }
};

// ---------Theme Control--------

let themebut = document.getElementById("theme");
let one = document.getElementsByClassName("video1")[0];
let two = document.getElementsByClassName("video2")[0];
let three = document.getElementsByClassName("video3")[0];

themebut.addEventListener("click", () => {
  console.log("theme clicked");

  // Check the opacity of the videos and toggle accordingly
  if (one.style.opacity === "1") {
    one.style.opacity = "0";
    two.style.opacity = "1";
  } else if (two.style.opacity === "1") {
    two.style.opacity = "0";
    three.style.opacity = "1";
  } else {
    three.style.opacity = "0";
    one.style.opacity = "1";
  }
});

//--------- Character Control ------------------------

let charbut = document.getElementById("Character");
let four = document.getElementsByClassName("hero1")[0];
let five = document.getElementsByClassName("hero2")[0];
let six = document.getElementsByClassName("hero3")[0];

charbut.addEventListener("click", () => {
  console.log("Character clicked");

  // Check the opacity of the videos and toggle accordingly
  if (four.style.display === "flex") {
    four.style.display = "none";
    five.style.display = "flex";
  } else if (five.style.display === "flex") {
    five.style.display = "none";
    six.style.display = "flex";
  } else {
    six.style.display = "none";
    four.style.display = "flex";
  }
});

//---------------------game Over--------------------------------

setInterval(() => {
  gameover = document.querySelector(".gameOver");

  dx2 = parseInt(window.getComputedStyle(hero2, null).getPropertyValue("left"));
  dx3 = parseInt(window.getComputedStyle(hero3, null).getPropertyValue("left"));
  dx1 = parseInt(window.getComputedStyle(hero1, null).getPropertyValue("left"));

  dy1 = parseInt(window.getComputedStyle(hero1, null).getPropertyValue("top"));
  dy2 = parseInt(window.getComputedStyle(hero2, null).getPropertyValue("top"));
  dy3 = parseInt(window.getComputedStyle(hero3, null).getPropertyValue("top"));

  ox1 = parseInt(window.getComputedStyle(v1, null).getPropertyValue("left"));
  ox2 = parseInt(window.getComputedStyle(v2, null).getPropertyValue("left"));
  ox3 = parseInt(window.getComputedStyle(v3, null).getPropertyValue("left"));

  oy1 = parseInt(window.getComputedStyle(v1, null).getPropertyValue("top"));
  oy2 = parseInt(window.getComputedStyle(v2, null).getPropertyValue("top"));
  oy3 = parseInt(window.getComputedStyle(v3, null).getPropertyValue("top"));

  offsetx1 = Math.abs(dx1 - ox1);
  offsetx2 = Math.abs(dx1 - ox2);
  offsetx3 = Math.abs(dx1 - ox3);
  offsetx4 = Math.abs(dx2 - ox1);
  offsetx5 = Math.abs(dx2 - ox2);
  offsetx6 = Math.abs(dx2 - ox3);
  offsetx7 = Math.abs(dx3 - ox1);
  offsetx8 = Math.abs(dx3 - ox2);
  offsetx9 = Math.abs(dx3 - ox3);

  offsety1 = Math.abs(dy1 - oy1);
  offsety2 = Math.abs(dy1 - oy2);
  offsety3 = Math.abs(dy1 - oy3);
  offsety4 = Math.abs(dy2 - oy1);
  offsety5 = Math.abs(dy2 - oy2);
  offsety6 = Math.abs(dy2 - oy3);
  offsety7 = Math.abs(dy3 - oy1);
  offsety8 = Math.abs(dy3 - oy2);
  offsety9 = Math.abs(dy3 - oy3);

  // console.log(offsetx3, offsety3);

  //------------ Game Over--------------
  if (
    (offsetx1 < 63 && offsety1 < 67) ||
    (offsetx2 < 63 && offsety2 < 67) ||
    (offsetx3 < 63 && offsety3 < 67) ||
    (offsetx4 < 63 && offsety4 < 67) ||
    (offsetx5 < 63 && offsety5 < 67) ||
    (offsetx6 < 63 && offsety6 < 67) ||
    (offsetx7 < 63 && offsety7 < 67) ||
    (offsetx8 < 63 && offsety8 < 67) ||
    (offsetx9 < 63 && offsety9 < 67)
  ) {
    gameover.style.visibility = "visible";
    v1.classList.remove("villenAni");
    v2.classList.remove("villenAni");
    v3.classList.remove("villenAni");

    // Get all video elements by class name
    let videoElements = document.querySelectorAll(".video1, .video2, .video3");

    // Loop through each video element and pause it
    videoElements.forEach((videoElement) => {
      videoElement.pause();
      audio.pause();
      audioover.play();
      setTimeout(() => {
        audioover.pause();
      }, 2000);
      hero1.style.bottom="-100px";
      hero2.style.bottom="-150px";
      hero3.style.bottom="-120px";
    });
  } else if (
    (offsetx1 < 63 && cross) ||
    (offsetx2 < 63 && cross) ||
    (offsetx3 < 63 && cross) ||
    (offsetx4 < 63 && cross) ||
    (offsetx5 < 63 && cross) ||
    (offsetx6 < 63 && cross) ||
    (offsetx7 < 63 && cross) ||
    (offsetx8 < 63 && cross) ||
    (offsetx9 < 63 && cross)
  ) {
    score++;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
  }
}, 100);

function updateScore(score) {
  scoreCount.innerHTML = "Your Score :" + score;
}
