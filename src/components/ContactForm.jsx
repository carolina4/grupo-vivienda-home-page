import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { withFormik } from 'formik';

function ContactForm({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
  return(
    <form id="contact-form" onSubmit={handleSubmit} className="mb4">
      <TextField
        type="text"
        name="name"
        label="Nombre"
        value={values.name}
        variant="outlined"
        fullWidth
        margin="normal"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.name && touched.name}
        helperText={errors.name && touched.name ? errors.name : null}
      />
      <TextField
        type="tel"
        name="phone"
        label="Teléfono"
        value={values.phone}
        variant="outlined"
        fullWidth
        margin="normal"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.phone && touched.phone}
        helperText={errors.phone && touched.phone ? errors.phone : null}
      />
      <TextField
        type="email"
        name="email"
        label="Correo Electrónico"
        value={values.email}
        variant="outlined"
        fullWidth
        margin="normal"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.email && touched.email}
        helperText={errors.email && touched.email ? errors.email : null}
      />
      <TextField
        name="message"
        label="Mensaje"
        multiline
        rows={7}
        value={values.message}
        variant="outlined"
        fullWidth
        margin="normal"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.message && touched.message}
        helperText={errors.message && touched.message ? errors.message : null}
      />
      <div className="mt2">
        <Button type="submit" variant="contained">Submit</Button>
      </div>
    </form>
  );
}

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Correo electrónico inválido.';
  }
  if (!values.name) {
    errors.name = 'Requerido';
  }
  if (!values.message) {
    errors.message = 'Requerido';
  }
  if (values.phone && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i.test(values.phone)) {
    errors.phone = 'Teléfono inválido.';
  }
  return errors;
};

const initialValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

const handleSubmit = (values, actions) => {
  console.log(values);
};

export default withFormik({
  mapPropsToValues: () => (initialValues),
  validate: validate,
  handleSubmit: handleSubmit,
  displayName: 'Contacto',
})(ContactForm);
