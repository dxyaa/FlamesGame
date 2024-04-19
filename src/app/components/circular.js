class CircularIterator {
  constructor(str) {
    this.str = str;
    this.lastIndex = 0;
    this.first = 0;
  }

  getCharacterAt(index, str) {
    const length = str.length;
    //this.lastIndex=0;
    console.log("length in circular : ", length);
    console.log("string: ", str);
    console.log("index in circular : ", index);
    //console.log("newind above: ", newIndex);
    console.log("last ind : ", this.lastIndex);
    let newIndex;
    if (this.first == 0) {
      newIndex = (this.lastIndex + index - 1) % length;
      this.first = 1;
    } else {
      newIndex = (this.lastIndex + index) % length;
    }
    //find out exactly which letter and when
    if (newIndex >= length) {
      newIndex = newIndex - length;
    }
    console.log("newind below: ", newIndex);
    this.lastIndex = newIndex - 1;
    return str[newIndex];
  }
}

export default CircularIterator;
