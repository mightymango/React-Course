import { addExpense, editExpense, removeExpense} from '../../actions/expenses';
import { exportAllDeclaration } from '@babel/types';

test('Should setup remove expense action object.', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should setup edit expense action object.', () => {
  const action = editExpense('123abc', { note: 'New note'});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id: '123abc',
    updates: { note: 'New note'}
  });
});

test('Should setup add expense action object with provided values.', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last month\'s rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should setup add expense action object with default values.', () => {
  const expenseDefaultData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseDefaultData,
      id: expect.any(String)
    }
  });
});