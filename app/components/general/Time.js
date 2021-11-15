import moment from 'moment';

export function Day() {
  return moment().format("dddd");
}

export function Date() {
  return moment().format("MMMM Do");
}
