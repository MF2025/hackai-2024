import { useScroll, animated } from 'react-spring'
import { useState } from 'react'

export default AppbarBG;

function AppbarBG(props)
{
  const [opac, setOpac] = useState(0)

  const { scrollYProgress } = useScroll
  ({
    onChange: ({ value: { scrollYProgress } }) =>
    {
      if ( scrollYProgress < parseFloat(props.transparencyThreshold) )
      {
        setOpac( 1 / parseFloat(props.transparencyThreshold) * scrollYProgress)
      }
      else
      {
        setOpac(1)
      }
    }
  })

  return(
    <>
      <animated.div className="absolute bg-[#1A2025] w-[100vw] h-[5rem] -z-10"
      style={{ opacity: opac }}/>
    </>
  )
}