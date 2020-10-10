const north = document.getElementById('north');
const east = document.getElementById('east');
const south = document.getElementById('south');
const west = document.getElementById('west');

type clickHandler = () => void;

export function initUI(n:clickHandler, s:clickHandler, e:clickHandler, w:clickHandler) {
  if(north && south && east && west) {
    north.onclick=n;
    south.onclick=s;
    east.onclick=e;
    west.onclick=w;
  }
}