import { RouterProvider } from 'react-router-dom'
import { routers } from './routes/index'

function App() {
 
  return (
      <RouterProvider router={routers} />
  )
}

export default App