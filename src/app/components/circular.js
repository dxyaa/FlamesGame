class CircularIterator {
  constructor(string) {
    this.string = string;
    this.lastIndex = 0;
  }

  getCharacterAt(index) {
    const length = this.string.length;
    const newIndex = (this.lastIndex + index) % length;
    this.lastIndex = newIndex;
    return this.string[newIndex];
  }
}

export default CircularIterator;
