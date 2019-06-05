import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('Should setup default filter values.', () => {
  const state = filterReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const action = { 
    type: 'SET_TEXT_FILTER',
    text: 'Some text'
  }
  const state = filterReducer(undefined, action);
  expect(state.text).toBe('Some text');
});

test('Should set startDate filter', () => {
  const startDate = moment(0);
  const action = { 
    type: 'SET_START_DATE',
    startDate: startDate
  }
  const state = filterReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('Should set endDate filter', () => {
  const endDate = moment(0);
  const action = { 
    type: 'SET_END_DATE',
    endDate: endDate
  }
  const state = filterReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});