import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const form = useForm({
    values: {
      count: 0,
    }
  })

  useEffect(() => {
    form.register('count')
  }, [])

  const watchedCount = form.watch('count');

  const increaseCount = () => {
    const newCount = form.getValues('count') + 1;
    console.log('new count', newCount);
    form.setValue('count', newCount);
    console.log('getValues count', form.getValues('count'));
    console.log('watch count', watchedCount);
  }

  return (
    <>
      <button onClick={increaseCount}>Increase count</button>
    </>
  )
}

export default App
