import { useState, useCallback } from "react";
import isEmail from 'validator/es/lib/isEmail';

export default function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;    

    if (name === 'name') {
      const regex = /^[а-яА-ЯёЁa-zA-Z -]$/;
      if (!regex.test(value)) {
        input.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел или дефис.');
      } else {
        input.setCustomValidity('');
        console.log('сброс')
      }
    }

    if (name === 'email') {
      if (!isEmail(value)) {
          input.setCustomValidity('Некорректый E-mail.');
      } else {
        input.setCustomValidity('');
      }
    }

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}