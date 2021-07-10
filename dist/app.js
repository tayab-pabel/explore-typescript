"use strict";
/* === Explicit Type === */
let age = 35;
const person = "Shakib Al Hasan";
const isFamous = true;
const friends = ["Hridoy", "Ayon", "Rabbi", "Yeasfi"];
let player;
player = {
    name: "Messi",
    club: "Barcelona",
    salary: 100000,
    famous: true,
};
/* === Union Type === */
const friendsAge = [
    "Hridoy",
    6,
    "Ayon",
    14,
    "Yeasfi",
    44,
    "Rabbi",
    50,
];
/* === Dynamic Type === */
let a = 5;
a = "Shakib Al Hasan";
let b = ["Hridoy", 6, "Ayon", 14, "Yeasfi", 44, "Rabbi", 50];
let c;
c = {
    name: "Shakib Al Hasan",
    age: 35,
};
/* === Use of Functions === */
const myfunction = (a, b, c = ".") => {
    return `Hello, ${a} ${b} ${c}`;
};
myfunction("Shakib Al", "Hasan");
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
/* === Function Signatures === */
let calculation;
calculation = (a, b, c) => {
    if (c == "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, "minus"));
/* === Classes with Access Modifiers === */
class PlayerOfCricket {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const mashrafi = new PlayerOfCricket("Mashrafi", 40, "Bangladesh");
const shakib = new PlayerOfCricket("Shakib", 35, "Bangladesh");
const players = [shakib, mashrafi];
console.log(players);
const messi = {
    name: "Messi",
    club: "Barcelona",
    salary: 4500000,
    wife: "Ms Messi",
    isPlaying: true,
};
const ronaldo = {
    name: "Ronaldo",
    club: "Juventus",
    salary: 5500000,
    wife: "Ms Ronaldo",
    isPlaying: true,
};
function getBonus(player) {
    return player.salary * 0.1;
}
const poorPlayer = { age: 50, salary: 10000 };
getBonus(ronaldo);
/* === Generics === */
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh",
});
addID(user);
const response1 = {
    status: 200,
    type: "Good",
    data: "test",
};
console.log(response1);
/* === Enum Types === */
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const response2 = {
    status: 200,
    type: RType.SUCCESS,
    data: "test",
};
console.log(response2);
/* === Tuples === */
let p = [3, "Hello", { p: 3 }];
let q = [4, "World", { t: 1 }];
q.push();
