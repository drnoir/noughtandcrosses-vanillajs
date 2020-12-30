# noughtandcrosses-vanillajs
Building  experiment to create a simple naught and crosses game
using vanilla js. In this expereriment I wanted to develop a simple version of the game
noughts and crosses or tic-tac-toe from scratch. I wanted to try and see 
how I get this to work using arrays and indexing checking in js.

The game board is represented as an array 
const gridArr = [1,2,3,4,5,6,7,8,9];

everytime the box with corrosponding num is clicked I replace the number with 
a string of either O or X and then check for index positions of each with a splice 
in CheckGameState function

To check for win conditions, the program checks for index positions of two vars
noughtIndices and crossIndices

If either naughts or crosses match the correct possible winning index positions conditions
then the program will display a win alert and reload.

Its a preety rough and ready demo, will probably improve it later


