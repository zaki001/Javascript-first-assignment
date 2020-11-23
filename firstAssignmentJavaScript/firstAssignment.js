function book(namn, ämne, antalSidor, ISBNNummer) {
  this.namn = namn;
  this.ämne = ämne;
  this.antalSidor = antalSidor;
  this.ISBNNummer = ISBNNummer;
  this.getBookInfo = function () {
    return this.namn + ' ' + this.ämne + ' ' + this.ISBNNummer;
  };
}

('use strict');
let putInBookInfo = ['programmin ett i java', 'javaScript & jqurey', 'vikings'];
let putIn = prompt('how many books do you wanto to put here? ');

putInBookInfo.push(new book('resan', 'migration', 100, 2211));
putInBookInfo.push(new book('resan', 'migration', 100, 2211));
putInBookInfo.push(new book('resan', 'migration', 100, 2211));
putInBookInfo.push(new book('resan', 'migration', 100, 2211));
putInBookInfo.push(new book('resan', 'migration', 100, 2211));
putInBookInfo.push(new book('resan', 'migration', 100, 2211));
putInBookInfo.push(new book('resan', 'migration', 100, 2211));
putInBookInfo.push(new book('resan', 'migration', 100, 2211));

putInBookInfo.forEach(function () {
  return this.getBookInfo;
});
console.log(book);
