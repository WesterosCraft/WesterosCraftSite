export const statusColor = status => {
  if (status.toLowerCase() === 'completed') {
    return 'success';
  }
  if (status.toLowerCase() === 'in progress') {
    return 'warning';
  }
  if (status.toLowerCase() === 'abandoned') {
    return 'abandoned';
  }
  if (status.toLowerCase() === 'not started') {
    return 'gray';
  }

  return 'black';
};
