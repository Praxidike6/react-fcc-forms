/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🦝 Todo: CREATE AN AWESOME AND MAINTAINABLE FORM COMPONENT 
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { DateInput, Input, Select } from './components'

//import { Input, Select, MenuItem } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
  date_validation,
  time_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  const noOfPeople = [
    {
      value: 1,
      label: 'One',
    },
    {
      value: 2,
      label: 'Two',
    },
    {
      value: 3,
      label: 'Three',
    },
    {
      value: 4,
      label: 'Four',
    },
    {
      value: 5,
      label: 'Five',
    },
  ]
  const occasions = [
    {
      value: 'other',
      label: '',
    },
    {
      value: 'birthday',
      label: 'Birthday',
    },
    {
      value: 'wedding',
      label: 'Wedding Anniversary',
    },
    {
      value: 'engagement',
      label: 'Engagement',
    },
    {
      value: 'retirement',
      label: 'Retirement',
    },
  ]

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...date_validation} />
          <Input {...time_validation} />

          <Select
            type="text"
            id="occasion"
            options={occasions}
            name="occasion"
          />
          <Input
            className="w-full"
            {...num_validation}
            label="No. of People (Min 1 - Max 10)"
          />
        </div>
        <div className="mt-5">
          <button
            aria-label="onClick"
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
