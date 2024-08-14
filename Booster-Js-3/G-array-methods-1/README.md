Do you remember how strings have special functions called methods? Don't worry if not! Here's an example to jog your memory:

```sh
$ node
> let name = "Mehdi"
undefined
> name.toLowerCase()
mehdi
```

Arrays also have several methods that you can use.

### `.sort()`

_An array method that sorts the values in an array into ascending alphabetical or numerical order._

```js
const unorderedLetters = ["z", "v", "b", "f", "g"];
const orderedLetters = unorderedLetters.sort();

const unorderedNumbers = [8, 5, 1, 4, 2];
const orderedNumbers = unorderedNumbers.sort();

console.log(orderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]
console.log(unorderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]
console.log(orderedNumbers); // logs [ 1, 2, 4, 5, 8 ]
console.log(unorderedNumbers); // logs [ 1, 2, 4, 5, 8 ]
```

> When you call this array method it uses the array on the left side of the dot as an input, and it sorts that array also returning it. Note how both ordered and unordered arrays are sorted now!
### `.concat()`

_Adds (or concatenates) another value or array to the array._

```sh
$ node
> let arr = [1, 2, 3]
undefined
> arr.concat(4)
[1, 2, 3, 4]
> arr
[1, 2, 3]
```

Did you notice how calling the concat method did not change `arr`? This is because `concat`, like most array methods, returns a _new_ array, it does not alter the one you called the method on.

If you wan to use the array returned by calling `.concat()` you should store it in a new variable.

```js
let arr = [1, 2, 3];
let newArr = arr.concat(4);

console.log(newArr); // logs [1, 2, 3, 4]
```