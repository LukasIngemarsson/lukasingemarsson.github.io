const calculateMyAge = () => {
  const today = new Date();
  const myBirthday = new Date("2002-06-03");

  let age = today.getFullYear() - myBirthday.getFullYear();
  const monthDiff = today.getMonth() - myBirthday.getMonth();
  const dayDiff = today.getDate() - myBirthday.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) --age;

  return age;
};

export const WHOAMI_DATA = [
  `I am a ${calculateMyAge()}-year-old AI/ML student currently based in Linköping and Stockholm, Sweden.`,
  "I was born in Connecticut, USA, but raised in Sweden from the age of six.",
  "I have always enjoyed solving problems, and have grown all the more fond of AI and ML solutions in recent years.",
  "I greatly enjoy learning new things, challenging myself, and collaborating with others to achieve meaningful goals.",
  "I am also a big sports enthusiast – particularly a fan of ice hockey, tennis, and the lesser-known winter sport of bandy.",
];
