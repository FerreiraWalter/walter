import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from './home-page/Home'

const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Home />
    </QueryClientProvider>
  )
}

export default App
