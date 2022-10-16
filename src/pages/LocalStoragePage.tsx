import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

import useLocalStorage from 'src/hooks/useLocalStrorage';

const LocalStoragePage = () => {
  const [todos, setTodos] = useLocalStorage<string>('todos', '');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    const arr: string[] = [...todos];
    if (arr.includes(inputValue)) {
      alert('이미 존재합니다.');
      return;
    }
    const newArr = [...arr, inputValue];

    setTodos(newArr);
  };

  return (
    <Form onSubmit={submitForm}>
      <Input
        type='text'
        placeholder='Enter todo'
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {todos &&
          todos.map((todo: string, idx: number) => <li key={idx}>{todo}</li>)}
      </ul>
    </Form>
  );
};

const Form = styled.form`
  padding: 8px;
`;

const Input = styled.input`
  padding: 8px;

  border: 1px solid #000;
`;

export default LocalStoragePage;
