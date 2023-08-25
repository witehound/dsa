var isAnagram = function (s, t) {
  let res = true;
  if (s.length != t.length) return false;
  let store = {};

  const createStore = () => {
    for (let w of s) {
      if (store[w]) {
        store[w]++;
      } else {
        store[w] = 1;
      }
    }
  };

  createStore();

  const validateAnagram = () => {
    for (let w of t) {
      if (store[w] > 0) {
        store[w]--;
      } else {
        res = false;
      }
    }
  };

  validateAnagram();

  return res;
};

export default isAnagram;
