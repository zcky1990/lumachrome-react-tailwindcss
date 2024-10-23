import React from 'react'
import type { FC } from 'react'
import DashboardLayout from '../layout/DashboardLayout'

interface Props {
    name: string
}

const Apa: FC<Props> = ({name}) => {
  return (
    <DashboardLayout children={name}/>
  )
}

export default Apa