var twoSum = function (nums, target) {
  let store = {};

  const createStore = () => {
    for (let w = 0; w <= nums.length - 1; w++) {
      if (store[nums[w]]) {
        store[nums[w]] = [...store[nums[w]], w];
      } else {
        store[nums[w]] = [w];
      }
    }
  };

  createStore();

  const checker = () => {
    let res = [];

    for (let w = 0; w < nums.length; w++) {
      if (res.length > 0) return res;
      let diff = target - nums[w];
      let temp = store[diff];
      if (temp && temp[0] != w) {
        res = temp[0] > w ? [w, temp[0]] : [temp[0], w];
        if (temp.length > 1) {
          store[diff] = store[diff].pop();
        }
      }
    }

    return res;
  };

  return checker();
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([-1, -2, 2, 3], 0));
