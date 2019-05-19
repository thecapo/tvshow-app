export const calcPopularity = popularity => {
  const score = (popularity * 0.1).toFixed(0) + '%';
  return score;
}

// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};