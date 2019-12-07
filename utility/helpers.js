export const statusColor = status => {
  if (status.toLowerCase() === 'completed') {
    return '#2CA42C';
  }
  if (status.toLowerCase() === 'inprogress') {
    return '#FFB305';
  }
  if (status.toLowerCase() === 'orphaned') {
    return '#48C8F0';
  }
  if (status.toLowerCase() === 'notstarted') {
    return '#C4C4C4';
  }

  return 'black';
};

export const statusLabel = status => {
  if (status.toLowerCase() === 'completed') {
    return 'Completed';
  }
  if (status.toLowerCase() === 'inprogress') {
    return 'In Progress';
  }
  if (status.toLowerCase() === 'orphaned') {
    return 'Orphaned';
  }
  if (status.toLowerCase() === 'notstarted') {
    return 'Not Started';
  }

  return 'Need Status';
};

// Used to convert strings from CraftCMS to arrays of values for responsive margins
export const sizeParser = string => {
  if (string) {
    return !string.includes(',') ? string : string.split(',');
  }
  return string;
};

export const regionLabel = status => {
  if (status.toLowerCase() === 'beyondthewall') {
    return 'Beyond The Wall';
  }
  if (status.toLowerCase() === 'thewall') {
    return 'The Wall';
  }
  if (status.toLowerCase() === 'north') {
    return 'North';
  }
  if (status.toLowerCase() === 'riverlands') {
    return 'Riverlands';
  }
  if (status.toLowerCase() === 'vale') {
    return 'Vale';
  }
  if (status.toLowerCase() === 'ironislands') {
    return 'Iron Islands';
  }
  if (status.toLowerCase() === 'westerlands') {
    return 'Westerlands';
  }
  if (status.toLowerCase() === 'crownlands') {
    return 'Crownlands';
  }
  if (status.toLowerCase() === 'stormlands') {
    return 'Stormlands';
  }
  if (status.toLowerCase() === 'reach') {
    return 'Reach';
  }
  if (status.toLowerCase() === 'dorne') {
    return 'Dorne';
  }

  return 'Need Region';
};
