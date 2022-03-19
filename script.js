// Started at 10:07 3-19-2022

// The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i+ 1}: ${el}`);
};

// console.log([...menu.entries()]);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const  openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Ended my first hour at 11:12 3-19-2022
