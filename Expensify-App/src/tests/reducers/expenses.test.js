import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should set default state.', () => {
  const state = expensesReducer(undefined, {type: '@@INT'});
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense by if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const expenseToAdd = {
    id: '4',
    description: 'News',
    note: '',
    amount: 200,
    createdAt: moment(0).add(8, 'days').valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenseToAdd
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expenseToAdd]);
});

test('Should edit an expense.', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('Should not edit an expense if expense not found.', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
