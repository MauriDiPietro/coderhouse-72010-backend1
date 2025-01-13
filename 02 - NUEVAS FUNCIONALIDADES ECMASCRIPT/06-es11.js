let value = 0

// 0, null, undefined, false, NaN, ''

// console.log(value || 100);

// console.log(value ?? 100);


// console.log(0 || 'falsey');
// console.log(10 || 'falsey');
// console.log(null || 'falsey');
// console.log(undefined || 'falsey');
// console.log('' || 'falsey');

console.log(0 ?? 'falsey');
console.log(10 ?? 'falsey');
console.log(null ?? 'falsey'); //!
console.log(undefined ?? 'falsey'); //!
console.log('' ?? 'falsey');

/* ------------------------------------ - ----------------------------------- */

class Person{
    #fullName;
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        this.#fullName = `${this.firstname} ${this.lastname}`;
    }

    getFullName(){
        return this.#fullName;
    }
}

