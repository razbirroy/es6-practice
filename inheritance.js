class Parent{
    constructor(){
        this.surname = "RichMan";
    }
}

class Children extends Parent{
    constructor(id1, id2){
        super();
        this.name = id1;
        this.mobile = id2;
      }
      likeFunction(){
          return this.name + this.mobile;
      }
}

const children1 = new Children("Tutul", 234);
const children2 = new Parent("Shubrata");
console.log(children1.likeFunction());