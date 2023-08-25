const containsDuplicate = function (nums) {
  let store = {};

  const validate = (num) => {
    if (store[num]) {
      return true;
    } else {
      store[num] = 1;
    }
  };

  for (let n of nums) {
    if (validate(n)) {
      return true;
    }
  }

  return false;
};

export default containsDuplicate;
