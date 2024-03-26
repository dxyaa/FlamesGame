class CircularIterator {
  constructor(str) {
    this.str = str;
    this.lastIndex = 0;
  }

  getCharacterAt(index, str) {
    const length = this.str.length;
    const newIndex = (this.lastIndex + index) % length;
    this.lastIndex = newIndex;
    return this.str[newIndex];
  }
}

export default CircularIterator;
