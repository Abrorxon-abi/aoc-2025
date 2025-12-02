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
