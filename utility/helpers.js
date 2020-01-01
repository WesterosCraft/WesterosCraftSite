export const statusColor = status => {
  switch (status.toLowerCase()) {
    case 'completed':
      return '#2CA42C';
    case 'inprogress':
      return '#FFB305';
    case 'orphaned':
      return '#48C8F0';
    case 'notstarted':
      return '#C4C4C4';
    default:
      return 'black';
  }
};

export const statusLabel = status => {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'Completed';
    case 'inprogress':
      return 'In Progress';
    case 'orphaned':
      return 'Orphaned';
    case 'notstarted':
      return 'Not Started';
    default:
      return 'Need status';
  }
};

// Used to convert strings from CraftCMS to arrays of values for responsive margins
export const sizeParser = string => {
  if (string) {
    return !string.includes(',') ? string : string.split(',');
  }
  return string;
};

export const regionLabel = status => {
  switch (status.toLowerCase()) {
    case 'beyondthewall':
    case 'beyond-the-wall':
      return 'Beyond The Wall';
    case 'thewall':
    case 'the-wall':
      return 'The Wall';
    case 'north':
    case 'the-north':
      return 'North';
    case 'riverlands':
      return 'Riverlands';
    case 'vale':
      return 'Vale';
    case 'ironislands':
    case 'iron-islands':
      return 'Iron Islands';
    case 'westerlands':
      return 'Westerlands';
    case 'crownlands':
      return 'Crownlands';
    case 'stormlands':
      return 'Stormlands';
    case 'reach':
      return 'Reach';
    case 'dorne':
      return 'Dorne';
    default:
      return 'Need region';
  }
};

export const projectTypeLabel = type => {
  switch (type.toLowerCase()) {
    case 'greatcastle':
      return 'Great Castle';
    case 'minorcastle':
      return 'Minor Castle';
    case 'ruin':
      return 'Ruin';
    default:
      return 'Need type';
  }
};
