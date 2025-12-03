import fs from "fs";

const lines = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .map((line) => line.trim());

const part1 = () => {
  let counter = 50;
  let ans = 0;

  for (let i = 0; i < lines.length; i++) {
    const str = lines[i];
    const value = Number(str?.slice(1));

    if (str![0] === "R") {
      counter += value;
    } else {
      counter -= value;
    }

    counter = (counter + 100) % 100;

    if (counter === 0) ans++;
  }

  return ans;
};

console.log("part 1:", part1());

const part2 = () => {
  let counter = 50;
  let ans = 0;

  for (let i = 0; i < lines.length; i++) {
    const str = lines[i];
    const value = Number(str?.slice(1));
    let full = Math.floor(value / 100);
    let rest = value % 100;
    ans += full;

    if (str![0] === "R") {
      for (let i = 0; i < rest; i++) {
        counter = (counter + 1) % 100;
        if (counter === 0) ans++;
      }
    } else {
      for (let i = 0; i < rest; i++) {
        counter = (counter - 1 + 100) % 100;
        if (counter === 0) ans++;
      }
    }
  }

  return ans;
};

console.log("part 2:", part2());
