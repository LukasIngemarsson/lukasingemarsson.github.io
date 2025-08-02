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
  `I am a ${calculateMyAge()}-year-old student (class of 2026) currently based in Linköping and Stockholm, Sweden.`,
  "Born in Connecticut, USA, but raised in Sweden from the age of six.",
  "Interested in most CS-related topics, but especially passionate about AI and machine learning.",
  "Greatly enjoy learning new things, challenging myself, and collaborating with others to achieve meaningful goals.",
  "Also a big sports enthusiast – particularly a fan of ice hockey, tennis, and the lesser-known winter sport of bandy.",
];
