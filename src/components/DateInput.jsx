import * as React from 'react'

import { useController, useFormContext } from 'react-hook-form'

import { DatePicker } from '@mui/x-date-pickers'

export const DateInput = ({ label, name }) => {
  const { control } = useFormContext()
  const { field } = useController({ control, name, defaultValue: null })

  return (
    <DatePicker
      label={label}
      maxDate={new Date()}
      value={field.value}
      onChange={field.onChange}
      slotProps={{
        textField: {
          ...{ readOnly: true },
        },
      }}
    />
  )
}
