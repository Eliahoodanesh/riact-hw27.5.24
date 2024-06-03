import React from 'react';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center' }}> 
      <div style={{ marginBottom: '10px' }}> 
        <label>שם:</label>
        <input type="text" {...register("name", { required: true, minLength: 2, pattern: /^[A-Za-z ]+$/i })} />
        {errors.name && <p style={{ color: 'red' }}>שם חייב להכיל לפחות 2 אותיות באנגלית ורווחים בלבד</p>}
      </div>
      <div style={{ marginBottom: '10px' }}> 
        <label>אימייל:</label>
        <input type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <p style={{ color: 'red' }}>אנא הכנס כתובת אימייל חוקית</p>}
      </div>
      <div style={{ marginBottom: '10px' }}> 
        <label>אימייל חוזר:</label>
        <input type="text" {...register("confirmEmail", { required: true, validate: value => value === watch('email') })} />
        {errors.confirmEmail && <p style={{ color: 'red' }}>אימייל לא תואם לאימייל הקודם</p>}
      </div>
      <div style={{ marginBottom: '10px' }}> 
        <label>סיסמא:</label>
        <input type="password" {...register("password", { required: true, minLength: 6 })} />
        {errors.password && <p style={{ color: 'red' }}>סיסמא חייבת להכיל לפחות 6 תווים</p>}
      </div>
      <button type="submit">שליחה</button>
    </form>
  );
}

export default SignupForm;
