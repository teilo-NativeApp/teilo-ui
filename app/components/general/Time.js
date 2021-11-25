import moment from 'moment';

export const isToday = (someDate) => {
  const today = new Date();
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
}

export const isUpcoming = (someDate, upcoming) => {
  const upcoming1 = moment().add(1,'days');
  const upcoming2 = moment().add(2,'days');
  const upcoming3 = moment().add(3,'days');

  return someDate.getDate() == upcoming.getDate() &&
    someDate.getMonth() == upcoming.getMonth() &&
    someDate.getFullYear() == upcoming.getFullYear()
}
