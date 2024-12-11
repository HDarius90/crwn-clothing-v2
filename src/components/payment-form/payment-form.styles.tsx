import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #fefae0;
  margin-top: 5rem;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-right: 30px;
`;

export const CardElementContainer = styled.div`
  margin: 1rem;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 1rem;
`;
