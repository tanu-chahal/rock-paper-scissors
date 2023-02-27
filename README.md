# Frontend Mentor - Rock, Paper, Scissors

![Preview for the Rock, Paper, Scissors](https://github.com/tanu-chahal/]
rock-paper-scissors/blob/master/images/RPS Preview.png?raw=true)

### Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview
It is small Rock, Paper and Scissors Game webpage, in which you can make a choice and play RPS with the computer. For each win you score increments & for each lost game you score decremets.

One match is of 5 points if your score becomes 5 then you win the match or if you score becomes -5 then you lose the match.

#### Rules

 - Paper beats Rock
 - Rock beats Scissors
 - Scissors beats Paper

### Links

- Live Site URL: [Temporarily Unavailable](#)

## My process
I have used HTML for the basic structure of the site & then styled the components using Tailwind utility classes in index.html file only. I have used mobile-first approach while designing. And for its functionality Vanilla Javascript has been used (script.js).

### Built with

- HTML
- Tailwind CSS
- Vanilla JavaScript
- Mobile First Approach

### What I learned

This is my first project made from scratch by me. So, this experience was full of learning and me juggling back & forth to position those divs :)).
In this I got the chance to learn Tailwind CSS, and I absolutely loved it.
This project also helped me strengthening the basics of Vanilla JS.

From this project I really like this piece of code:

```html
 <div data-border-clr="#4865f4" class="circle cursor-pointer relative -top-60 p-4 bg-white rounded-full h-20 w-20 flex flex-row items-center justify-center border-8 border-[#4865f4] shadow-[0px_4px_2px_inset] shadow-slate-400 md:h-40 md:w-40 md:border-[18px] md:shadow-[0px_7px_2px_inset] md:shadow-slate-400 md:p-7 md:-mx-10 md:-top-[20rem]" >
    <button class="chooseBtn" id="paper" data-option="paper">
            <img class="md:h-20" src="./images/icon-paper.svg" alt="paper" />
    </button>
</div>
```

## For Contributers

There are a lot of changes & improvements that can be made in this project, & if you are interested in working on this project with me. This is how you can get started:
- Fork the repo & then pull the code on your system.
- Then run ```npm install``` in the terminal to install all the packages & dependencies needed.
- To run the project use ```npm start``` & the project will be running on the port http://127.0.0.1:5173/

## Front-end Style Guide to Contribute

### Layout

- Responsive Breakpoint: md

### Colors

#### Primary

- Scissors : #ec9e0e
- Paper : #4865f4
- Rock : #dc2e4e

#### Neutral

- Dark Text: hsl(229, 25%, 31%)
- Score Text: hsl(229, 64%, 46%)
- Header Outline: hsl(217, 16%, 45%)

#### Background

- Radial Gradient: hsl(214, 47%, 23%) to hsl(237, 49%, 15%)

### Fonts

- Family: [Barlow Semi Condensed](https://fonts.google.com/specimen/Barlow+Semi+Condensed)
- Weights: 600, 700


## Author

- Website - [tanuChahal](https://tanu-chahal.github.io/index.html)
- LinkedIn - [Tanu Chahal](https://www.linkedin.com/in/tanuchahal/)
- Twitter - [@chahal__tanu](https://www.twitter.com/chahal__tanu)