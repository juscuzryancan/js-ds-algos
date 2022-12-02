/**
* Linear Search goes through each element within an input array from start to end
* to find the element's index
* Javascript impl can return null when the target is not found
* Runtime: O(n)
* Space Complexity: O(1) no additional space needed
*/
const linearSearch = (array, target) => {

  for (let i = 0; i < array.length; i++) {
    if(array[i] === target) {
      return i;
    }
  }

  return -1;
}

//Example Calls
const array = [1, 2, 3, 4, 5];
console.log(linearSearch(array, 3));
console.log(linearSearch(array, 10));

module.export = linearSearch;
