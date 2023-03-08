# A3 - Multi-User Experience


## Installation

Run the following two commands

```bash
npm init -y 
```

```bash
npm i socket.io
```
and
```bash
node app.js
```
or
```bash
npm run dev
```

## Overview of what you did (i.e., what are the controls? Why this design?)

The A-Frame JS project I created offers users the option to choose their team by selecting either red or blue from a welcome screen. Once a team has been picked, the user can click on their respective vending machine to generate a new rubber duck. The scene features touch controls for mobile devices and wasd controls for desktop, providing a seamless and intuitive navigation experience. Users can animate their new rubber ducks towards an inflatable pool by clicking on them. To enhance the immersive experience, ambient, vending machine, and duck sounds have been added to support the scene. Each time a duck is sent to the inflatable pool, the score UI is updated for all connected players.

## What was challenging?

While working on the A-Frame JS project, my biggest challenge was updating the UI for all connecting users via Socket.io. Initially, I had the instantiated ducks appended to the vending machine element, but this caused several issues. I couldn't add an event listener to the instantiated duck to increment the score, which made updating the UI impossible. Therefore, I had to refactor the code to append the ducks to the scene and update the UI through the socket. This was challenging, but I was eventually able to make it work.

## What went well (i.e., how did you solve the above challenges?).

I was able to successfully refactor my code using classes and instantiate two objects for the red team and blue team, which allowed for easy code reuse. One of the most successful features of the project was the real-time UI score for all users, which was implemented using sockets io. The sound effects, such as quacking when clicking on the ducks, added to the overall experience and made the project more immersive.

## GitHub Repository
https://github.com/abdallahaac/abouChahineAbdallah_IMD3901_A3

## Demo
![](https://github.com/abdallahaac/abouChahineAbdallah_IMD3901_A3/blob/main/public/assets/duck_duck_go_red.gif)
![](https://github.com/abdallahaac/abouChahineAbdallah_IMD3901_A3/blob/main/public/assets/duck_duck_go_blue.gif)




## License

https://github.com/abdallahaac/abouChahineAbdallah_IMD3901_A3
