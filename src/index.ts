import {Room} from './Room';
import {Map} from './Map';
import {print, clear} from './utils/print.js';
import {initUI} from './initUI.js';

let position: number;
let map: Map = [];

function initGame() {
  const room0:Room = {
    name: 'Troll Room',
    n:-1,
    e:2,
    s:-1,
    w:1,
  }

  const room1:Room = {
    name: 'Forest',
    n:-1,
    s:-1,
    w:0,
    e:-1,
  }

  const room2:Room = {
    name: 'Cave',
    n:0,
    s:-1,
    w:-1,
    e:3,
  }

  const room3:Room = {
    name: 'Dungeon',
    n:-1,
    s:-1,
    w:2,
    e:-1,
  }

  const initialMap:Map = [];

  initialMap[0] = room0;
  initialMap[1] = room1;
  initialMap[2] = room2;
  initialMap[3] = room3;

  return initialMap;
}

function movePlayer(newPos:number) {
    clear();
  if(newPos === -1) {
    print("There is no exit in that direction")
  } else {
    position = newPos;
    print(`You are now in ${map[position].name}`);
  }
}

function startMessage(map: Map, position: number) {
  print("Welcome to the great adventure");
  print(`you are in the ${map[position].name}.`);
  print('where do you want to go now?');
  print('Click a direction button N,S,E or W');
}

function goNorth() {
  movePlayer(map[position].n)
}

function goEast() {
  movePlayer(map[position].e)
}

function goSouth() {
  movePlayer(map[position].s)
}

function goWest() {
  movePlayer(map[position].w)
}

function initialise() {
  initUI(goNorth, goEast, goSouth, goWest);
  map = initGame();
  position = 0;
  startMessage(map, position);
  // startGame();
}


  // console.log(`
  // you are in the ${room0.name}, There are exits leading to 
  // the following rooms: ${room0.n}, ${room0.s}, ${room0.w}, ${room0.e}`
  // );

initialise();