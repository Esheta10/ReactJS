import React from 'react'
import withCardLook from './hoc/withCardLook'
import Alpha from './components/Alpha';
import Beta from './components/Beta';
import withBorder from './hoc/withBorder';

const App = () => {

  const WithCardLookAlpha = withCardLook(Alpha);
  const WithCardLookBeta = withCardLook(Beta);

  const WithBorderAlpha = withBorder(Alpha);
  const WithBorderBeta = withBorder(Beta);

  return (
    <div>
      <WithCardLookAlpha/>
      <WithCardLookBeta/>

      <WithBorderAlpha/>
      <WithBorderBeta/>

    </div>
  )
}

export default App


