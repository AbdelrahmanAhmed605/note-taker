// Taken from UofT BootCamp Module 11 Day 2 activities, Exercise 17 (Ins_POST_Fetch)
// Immediately export a function that generates a string of random numbers and letters
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
