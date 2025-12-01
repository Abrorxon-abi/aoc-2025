import fs from "fs";

async function getInput(year: number, day: number) {
  const url = `https://adventofcode.com/${year}/day/${day}/input`;
  const response = await fetch(url, {
    headers: {
      Cookie: `session=${process.env.AOC_SESSION_ID}`,
    },
  });
  return response.text();
}

async function getOrWriteInput(day: number) {
  const input = await getInput(2025, day);
  if (!input) {
    throw new Error("Error. Check AOC_SESSION_ID");
  }
  fs.mkdirSync(`${day}`, { recursive: true });
  fs.writeFileSync(`${day}/input.txt`, input.trim());
  fs.writeFileSync(`${day}/${day}.ts`, "");
}

function getDay() {
  return new Date().getDate();
}

async function main() {
  const now = new Date();
  const day = getDay();
  const targetHour = 10;
  const targetMinute = 1;

  if (
    now.getHours() < targetHour ||
    (now.getHours() === targetHour && now.getMinutes() < targetMinute)
  ) {
    let hoursLeft = targetHour - now.getHours();
    let minutesLeft = targetMinute - now.getMinutes();

    if (minutesLeft < 0) {
      hoursLeft -= 1;
      minutesLeft += 60;
    }

    console.log(
      `The task hasn't opened yet. It will open at 10:00 AM. Time left: ${hoursLeft}h ${minutesLeft}m`
    );
    return;
  }

  console.log(`Fetching input for day ${day}`);
  await getOrWriteInput(day);
}

main();
