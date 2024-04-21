// const why = document.querySelectorAll('#whySo');
const why = document.getElementById('whySo');
const lughter = document.getElementById('laugh');
const serious = document.getElementById('serious');
const jokers = document.getElementById('joker');
const batmans = document.getElementById('batman');
const btn = document.getElementById('flair-btn');
const btn2 = document.getElementById('flair-btn2');
const btn3 = document.getElementById('flair-btn3');
const test = document.getElementById('test');

const tl = gsap.timeline();
const tl5 = gsap.timeline();
let tl2 = gsap.timeline({ delay: 1 });
let tl3 = gsap.timeline({ delay: 6 });
let tl4 = gsap.timeline({ delay: 4 });
let tl6 = gsap.timeline({ delay: 12 });
let tl7 = gsap.timeline({ delay: 13 });
let endTl = gsap.timeline({ delay: 15 });
let endTl2 = gsap.timeline({ delay: 15.3 });

gsap.from('#eyes', { duration: 1, y: '-100%', ease: 'power3' });
gsap.from('#mouth', { duration: 1, y: '-200%', ease: 'bounce' });

const firstLine = document.querySelector('#first');
const secondLine = document.querySelector('#second');

const pathsToAnimateFirst = firstLine.querySelectorAll('path');
const pathsToAnimateSecond = secondLine.querySelectorAll('path');

const firstPathsArray = Array.from(pathsToAnimateFirst).reverse();
const secondPathsArray = Array.from(pathsToAnimateSecond).reverse();

tl.from(firstPathsArray, {
  duration: 1,
  y: '-400%',
  ease: 'elastic.out',
  stagger: 0.1,
});

tl2.to(firstPathsArray, {
  duration: 1,
  fill: 'rgb(134,0,0)',
  stagger: 0.1,
});

tl.from(secondPathsArray, {
  duration: 1,
  y: '-400%',
  ease: 'elastic.out',
  stagger: 0.1,
});

tl2.to(secondPathsArray, {
  duration: 1,
  fill: 'rgb(134,0,0)',
  stagger: 0.1,
});

tl3
  .to(['#l', '#a', '#u', '#g', '#h2'], {
    y: '-100%',
    stagger: 0.2,
  })
  .to(['#l2', '#a4', '#u3', '#g2', '#h3'], {
    y: '-60%',
    stagger: 0.2,
  })
  .to(['#l', '#a', '#u', '#g', '#h2', '#l2', '#a4', '#u3', '#g2', '#h3'], {
    duration: 1,
    fill: 'black',
    stagger: 0.1,
  });

tl.to(['#t', '#h', '#e', '#y', '#a2', '#t2'], {
  x: '-3000%',
  duration: 0.6,
  stagger: 0.3,
}).to(
  [
    '#m',
    '#e2',
    '#b',
    '#e3',
    '#c',
    '#a3',
    '#u2',
    '#s',
    '#e5',
    '#i',
    '#mark',
    '#m2',
  ],
  {
    y: '-400%',
    duration: 1,
    stagger: 0.3,
  }
);

tl6
  .to(['#d'], {
    x: '-1350%',
    duration: 0.3,
  })
  .to(['#i2'], {
    x: '-2500%',
    duration: 0.3,
    stagger: 0.3,
  })
  .to(['#f', '#f2'], {
    x: '-2020%',
    duration: 0.3,
    stagger: 0.3,
  })
  .to(['#e6'], {
    x: '-1530%',
    duration: 0.3,
    stagger: 0.3,
  })
  .to(['#r'], {
    x: '-1820%',
    duration: 0.3,
    stagger: 0.3,
  })
  .to(['#e7'], {
    x: '-1530%',
    duration: 0.3,
    stagger: 0.3,
  })
  .to(['#n'], {
    x: '-1550%',
    duration: 0.3,
    stagger: 0.3,
  })
  .to(['#t3'], {
    x: '-1850%',
    duration: 0.3,
    stagger: 0.3,
  });

tl7
  .to(['#l'], {
    x: '1415%',
    y: '0',
    duration: 0.3,
    stagger: 0.3,
  })
  .to(['#a'], {
    x: '1810%',
    y: '0',
    duration: 0.3,
    stagger: 0.3,
  })
  .to(['#u'], {
    x: '1225%',
    y: '0',
    duration: 0.3,
    stagger: 0.3,
  })
  .to(['#g'], {
    x: '1255%',
    y: '0',
    duration: 0.3,
    stagger: 0.3,
  })
  .to(['#h2'], {
    x: '1160%',
    y: '0',
    duration: 0.3,
    stagger: 0.3,
  })
  .to(['#s'], { y: '0', x: '550%', fill: 'black' });

tl.to(['#i3', '#a5', '#t4', '#t5', '#h4', '#e8', '#m3'], {
  y: '-300%',
})
  .to(['#b2', '#e9', '#c2', '#a6', '#u4', '#s2', '#e9'], {
    y: '300%',
  })
  .to(['#t6', '#h5', '#e10', '#y2', '#mark2', '#r2', '#e12'], { x: '5000%' });

endTl
  .to(['#a7'], { x: '-1780%', ease: 'bounce' })
  .to(['#l3'], { x: '-1390%', ease: 'bounce' })
  .to(['#l4'], { x: '-1920%', ease: 'bounce' })
  .to(['#t7'], { x: '-2260%', ease: 'bounce' })
  .to(['#h6'], { x: '-1080%', ease: 'bounce' })
  .to(['#e13'], { x: '-1870%', ease: 'bounce' });
endTl2
  .to(['#s3'], {
    x: '-1970%',
    ease: 'bounce',
    fill: 'black',
  })
  .to(['#a8'], {
    x: '-1670%',
    ease: 'bounce',
    fill: 'black',
  })
  .to(['#m4'], {
    x: '-880%',
    ease: 'bounce',
    fill: 'black',
  })
  .to(['#e14'], {
    x: '-1230%',
    ease: 'bounce',
    fill: 'black',
  });

endTl.to(['#l2', '#a4', '#u3', '#g2', '#h3'], {
  y: '500%',
});

endTl
  .from('.black', {
    duration: 0.2,
    opacity: 0,
    // y: '-70%',
    rotateX: '100%',
  })
  .to('.black', {
    duration: 0.2,
    opacity: 0,
    // y: '-70%',
    rotateX: '-100%',
  });

const clicked3 = () => {
  location.reload();
};

btn3.addEventListener('click', clicked3);
