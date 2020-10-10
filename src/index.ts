import {Room} from './Room';
import {Map} from './Map';

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

const map:Map = [];

map[0] = room0;
map[1] = room1;
map[2] = room2;
map[3] = room3;



console.log(`
you are in the ${room0.name}, There are exits leading to 
the following rooms: ${room0.n}, ${room0.s}, ${room0.w}, ${room0.e}`
);