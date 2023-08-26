/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let count = 0;
  let store = {};

  const createStore = () => {
    while (count < strs.length) {
      let temp = strs[count].split("").sort();
      if (store[temp]) {
        store[temp] = [...store[temp], strs[count]];
      } else {
        store[temp] = [strs[count]];
      }
      count++;
    }
  };

  createStore();

  return Object.entries(store).map(([_, values]) => values);
};

export default groupAnagrams;
