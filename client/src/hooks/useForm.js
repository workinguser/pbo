import { useCallback, useState } from "react";

const useForm = (initialValues) => {
   const [formValues, setFormValues] = useState(initialValues);

   const handleInputChange = useCallback(
      ({ target }) => {
         setFormValues((prev) => ({ ...prev, [target.name]: target.value }));
      },
      [setFormValues]
   );

   const resetFormValues = useCallback(
      (newFormState = initialValues) => {
         setFormValues(newFormState);
      },
      [initialValues, setFormValues]
   );

   return [formValues, handleInputChange, resetFormValues];
};

export default useForm;
