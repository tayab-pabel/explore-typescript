/* === Explicit Type === */
let age: number = 35;

const person: string = "Shakib Al Hasan";

const isFamous: boolean = true;

const friends: string[] = ["Hridoy", "Ayon", "Rabbi", "Yeasfi"];

let player: {
  name: string;
  club: string;
  salary: number;
  famous: boolean;
};

player = {
  name: "Messi",
  club: "Barcelona",
  salary: 100000,
  famous: true,
};

/* === Union Type === */
const friendsAge: (string | number)[] = [
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
let a: any = 5;
a = "Shakib Al Hasan";

let b: any[] = ["Hridoy", 6, "Ayon", 14, "Yeasfi", 44, "Rabbi", 50];

let c: {
  name: any;
  age: any;
};

c = {
  name: "Shakib Al Hasan",
  age: 35,
};

/* === Use of Functions === */
const myfunction = (a: string, b: string, c: string = ".") => {
  return `Hello, ${a} ${b} ${c}`;
};

myfunction("Shakib Al", "Hasan");

/* === Type Aliases === */
type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};

/* === Function Signatures === */
let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) => {
  if (c == "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calculation(5, 6, "minus"));

/* === Classes with Access Modifiers === */
class PlayerOfCricket {
  private name: string;
  readonly age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
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
const players: PlayerOfCricket[] = [shakib, mashrafi];
console.log(players);

/* === Interfaces === */
interface Player {
  club: string;
  name: string;
  salary: number;
  wife?: string;
  isPlaying: boolean;
}

const messi: Player = {
  name: "Messi",
  club: "Barcelona",
  salary: 4500000,
  wife: "Ms Messi",
  isPlaying: true,
};

const ronaldo: Player = {
  name: "Ronaldo",
  club: "Juventus",
  salary: 5500000,
  wife: "Ms Ronaldo",
  isPlaying: true,
};

function getBonus(player: Player) {
  return player.salary * 0.1;
}

const poorPlayer = { age: 50, salary: 10000 };
getBonus(ronaldo);

/* === Generics === */
const addID = <T extends { name: string; age: number }>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "Mashrafi",
  age: 40,
  country: "Bangladesh",
});

addID(user);

/* === Generics in Interfaces === */
interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: APIResponse<string> = {
  status: 200,
  type: "Good",
  data: "test",
};

console.log(response1);

/* === Enum Types === */
enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIRes<T> {
  status: number;
  type: RType;
  data: T;
}

const response2: APIRes<string> = {
  status: 200,
  type: RType.SUCCESS,
  data: "test",
};

console.log(response2);

/* === Tuples === */
let p = [3, "Hello", { p: 3 }];

let q: [number, string, object] = [4, "World", { t: 1 }];

q.push();
