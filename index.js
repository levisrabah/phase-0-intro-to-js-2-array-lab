const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependcat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function destructivelyPrependCat(){
    return [name, ...cats];
}
function appendCat(name){
    return [...cats, name];
}
function removeFirstCat(){
    return cats.slice[1];
}
function prependCat(name){
    return [...cats, name]
}
function removeLastCat(){
    return cats.slice(0, cats.length -1);
}
function destructivelyPrependCat (name) {
    cats.unshift(name);
  }
  function prependCat (name) {
    return [name, ...cats];
  }
  function removeFirstCat () {
    return cats.slice(1);
  }