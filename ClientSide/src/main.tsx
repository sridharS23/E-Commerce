import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App/Layout/Style.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './App/routes/Routes.tsx';
import { Provider } from 'react-redux';
import { store } from './App/store/store.ts';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
    
  </StrictMode>,
)
