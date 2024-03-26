class CircularIterator {
  constructor(str) {
    this.str = str;
    this.lastIndex = 0;
  }

  getCharacterAt(index, str) {
    const length = str.length; // Using the passed word instead of this.str
    console.log("length in circular : ", length);
    console.log("string: ", str);
    console.log("index in circular : ", index);
    const newIndex = (this.lastIndex + index - 1) % 6;
    this.lastIndex = newIndex;
    return str[newIndex]; // Returning character from the passed word
  }
}

export default CircularIterator;
