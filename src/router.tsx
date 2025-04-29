import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { getAllProducts } from './data/loaders/getAllProducts'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import { getSingleProduct } from './data/loaders/getSingleProduct'
import { SingleProduct } from './pages/SingleProduct'

export const Router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'products',
        Component: Products,
        loader: async () => getAllProducts(),
      },
      {
        path: 'products/:productID',
        Component: SingleProduct,
        loader: async ({ params }) => getSingleProduct(Number(params.productID)),
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
])
