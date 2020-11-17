import React, {useEffect} from 'react'

interface HomeProps {
  setTitle: (title: string) => void
}

const Home = (props: HomeProps) => {
  const {setTitle} = props

  useEffect(() => setTitle('Home'), [])
  
  return <p>Home</p>
}

export default Home