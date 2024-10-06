function rearrangeFruits(yuppy) {
  if (yuppy.length < 4) {
    return yuppy;
  }
  const remove = yuppy.splice(-4);
  yuppy.splice(0,0, ... remove);
  return yuppy;
}

const yuppy = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

console.log(rearrangeFruits(yuppy));


