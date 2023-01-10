const { LinkedList } = require("../data-structures");

describe("LinkedList", () => {

  describe("Constructor", () => {
    it("Creates an object with correct defaults", () => {
      const list = new LinkedList();
      expect(list).toBeInstanceOf(LinkedList)
      expect(list).toEqual({
        head: null,
        tail: null,
        iterator: null,
        length: 0
      });
    })
  })

  describe("addFirst", () => {
    const list = new LinkedList();
    it("Sets head and tail to the newly added node when list is empty", () => {
      list.addFirst(1);
      expect(list.getFirst()).toEqual(1);
      expect(list.getLast()).toEqual(1);
      expect(list.getLength()).toEqual(1);
    })

    it("Inserts data into the front of the list", () => {
      list.addFirst(2);
      expect(list.getFirst()).toEqual(2);
      expect(list.getLast()).toEqual(1);
      expect(list.getLength()).toEqual(2);
    })
  });

  describe("addLast", () => {
    const list = new LinkedList();
    it("Sets head and tail to the newly added node when list is empty", () => { 
      list.addLast(1)
      expect(list.getFirst()).toEqual(1);
      expect(list.getLast()).toEqual(1);
      expect(list.getLength()).toEqual(1);
    });

    it("Inserts data into the back of the list", () => {
      list.addLast(2);
      expect(list.getFirst()).toEqual(1);
      expect(list.getLast()).toEqual(2);
      expect(list.getLength()).toEqual(2);
    })
  });

  describe("removeFirst", () => {
    const list = new LinkedList();
    it("throws an error when called on an empty list", () => {
      expect(() => list.removeFirst()).toThrow();
    })
    it("removes the first element in the list", () => {
      list.addLast(1);
      list.addLast(2);
      list.removeFirst();

      expect(list.getFirst()).toEqual(2);
      expect(list.getLast()).toEqual(2);
      expect(list.getLength()).toEqual(1);
    });
  });

  describe("removeLast", () => {
    const list = new LinkedList();
    it("throws an error when called on an empty list", () => {
      expect(() => list.removeLast()).toThrow();
    })
    it("removes the last element in the list", () => {
      list.addLast(1);
      list.addLast(2);
      list.removeLast();

      expect(list.getFirst()).toEqual(1);
      expect(list.getLast()).toEqual(1);
      expect(list.getLength()).toEqual(1);
    });
  });

  describe("getFirst", () => {
    const list = new LinkedList();
    it("throws an error when called on an empty list", () => {
      expect(() => list.getFirst()).toThrow();
    })

    it("returns the data from the first element of the list", () => {
      list.addFirst(5);
      list.addFirst(12);
      expect(list.getFirst()).toEqual(12);
    })
  });

  describe("getLast", () => {
    const list = new LinkedList();
    it("throws an error when called on an empty list", () => {
      expect(() => list.getLast()).toThrow();
    })

    it("returns the data from the last element of the list", () => {
      list.addFirst(5);
      list.addFirst(12);
      expect(list.getLast()).toEqual(5);
    })
  });

  describe("getLength", () => {
    it("returns the length", () => {
      const list = new LinkedList();
      expect(list.getLength()).toEqual(0);
    })
  });

  describe("isEmpty", () => {
    const list = new LinkedList();

    it("returns true when the list is not empty", () => {
      expect(list.isEmpty()).toEqual(true);
    })

    it("returns false when the list is not empty", () => {
      list.addFirst(2)
      expect(list.isEmpty()).toEqual(false);
    })
  });
})

// testException(() => {
//   list355.getFirst();
// });

// testException(() => {
//   list355.getLast();
// });

// list355.addFirst(5);
// list355.addFirst(5);
// list355.addFirst(3);
// console.log(list355.toString())

// list355.removeLast()
// console.log("after remove last",list355.toString())

// list355.removeFirst()
// console.log("after removefirst", list355.toString())

// list355.removeFirst();

// testException(() => {
//   list355.removeFirst();
// });

// testException(() => {
//   list355.removeLast();
// });
// const testException = (callback) => {
//   try {
//     callback();
//   } catch (e) {
//     console.error(e);
//   }
// }

