export const calculateTomorrowsDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  return new Date(tomorrow.setDate(tomorrow.getDate() + 1));
};

export const checkIfDateInPast = dateString =>
  new Date() > new Date(dateString);

export const calculateNumOfDaysPast = dateString =>
  Math.ceil((+new Date() - +new Date(dateString)) / (1000 * 60 * 60 * 24));
