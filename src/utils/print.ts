
const output = document.getElementById('output');

export function print(msg:string) {
  
  if (output) output.innerHTML = output.innerHTML + "<br />" + msg;

}

export function clear() {
  if (output) output.innerHTML = '';
}