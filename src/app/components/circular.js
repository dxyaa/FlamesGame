class CircularIterator {
  constructor(str) {
    this.str = str;
    this.lastIndex = 0;
    this.first = 0;
  }

  getCharacterAt(index, str) {
    const length = str.length;
    console.log("length in circular : ", length);
    console.log("string: ", str);
    console.log("index in circular : ", index);
    let newIndex;
    if (this.first == 0) {
      newIndex = (this.lastIndex + index - 1) % 6;
      this.first = 1;
    } else {
      newIndex = (this.lastIndex + index) % 6;
    }
    //find out exactly which letter and when
    if (newIndex >= length) {
      newIndex = newIndex - length;
    }
    console.log("newind : ", newIndex);
    this.lastIndex = newIndex;
    return str[newIndex];
  }
}

export default CircularIterator;