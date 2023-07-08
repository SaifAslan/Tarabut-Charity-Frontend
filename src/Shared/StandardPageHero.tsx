import React from 'react'

interface IProps {
  title: string;
}
const StandardPageHero: React.FC<IProps> = ({title}) => {
  return (
    <div className='standard-page-hero'><h1>{title}</h1></div>
  )
}

export default StandardPageHero;