import {
  setTextFilter, 
  sortByAmount, 
  sortByDate, 
  setStartDate, 
  setEndDate} 
  from '../../actions/filters';
import moment from 'moment';

test('Should generate set text action object with text', () => {
  const action = setTextFilter('Filter string');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Filter string'
  });
});

test('Should generate set text action object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});


test('Should generate sort by amount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('Should generate sort by date action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

