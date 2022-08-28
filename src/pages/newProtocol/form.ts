import * as yup from 'yup';

export const validationForm = yup.object({
  protocolo: yup.string().required('Campo Obrigatório'),
  apresentante: yup.string().required('Campo Obrigatório'),
  tipo: yup.string().required('Campo Obrigatório'),
  entrada: yup.number().required('Campo Obrigatório'),
  vencimento: yup.number().required('Campo Obrigatório'),
});

export const initialValues = { 
  protocolo: '', 
  apresentante: '', 
  tipo: '',  
  entrada: 0,
  vencimento: 0
};
