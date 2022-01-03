hash - table - массив - хеш - функция;

const array = new Array(5);
console.log(array);

const hash = (char) => char.charCodeAt(0) % 5;

// ----------------
// https://www.youtube.com/watch?v=QY_b2r_a7bs

function HashTable(size = 13) {
  const _store = [];
  const _size = size;

  function hash(string) {
    let index = 0;
    for (let i = 0; i < string.length; i++) {
      index += string.charCodeAt(i) * (i + 1);
    }
    return index % _size;
  }

  function findMatchingIndex(list, key) {
    for (let i = 0; i < list.length; i++) {
      if (list[i][0] === key) return i;
    }
  }

  return {
    setElement(key, value) {
      const index = hash(key);
      if (!_store[index]) {
        _store[index] = [[key, value]];
        //  || (_store[index] && _store[index][0] === key)
      } else {
        const list = _store[index];
        const matchingIndex = findMatchingIndex(list, key);

        if (matchingIndex) {
          list[matchingIndex] = [key, value];
          return;
        }

        list.push([key, value]);
      }
    },
    getElement(key) {
      const index = hash(key);
      if (_store[index]) {
        const list = _store[index];
        const matchingIndex = findMatchingIndex(list, key);
        if (matchingIndex) return list[matchingIndex][1];
      }
    },
    dump() {
      return _store;
    },
  };
}

const ht = new HashTable();
ht.setElement('boroda', 'Boroda');
ht.setElement('winderton', 'winderton');
ht.setElement('soer', 'soer');
ht.getElement('boroda');
console.log(ht.dump());
