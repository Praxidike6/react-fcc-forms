/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'write your name ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}
export const date_validation = {
  name: 'date',
  label: 'Date',
  type: 'date',
  id: 'date',
  placeholder: 'write the booking date ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const time_validation = {
  name: 'time',
  label: 'Time',
  type: 'time',
  id: 'time',
  min: '18:00',
  max: '23:00',
  placeholder: 'write the booking time ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const desc_validation = {
  name: 'description',
  label: 'description',
  multiline: true,
  id: 'description',
  placeholder: 'write description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
}

export const num_validation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  placeholder: 'No#',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    max: { value: 10, message: 'Max is 10.' },
    min: { value: 1, message: 'Min is 1.' },
  },
}

export const email_validation = {
  name: 'email',
  label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'example@gmail.com',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
