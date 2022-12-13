import {
  StoreContextProvider,
  useLogin,
  useLogout,
  useAddToCart,
  useCartCount,
  useUser,
} from './store-context-selector'

const LoginSection = () => {
  // const login = useStore((state) => state.login)
  // const logout = useStore((state) => state.logout)
  const login = useLogin()
  const logout = useLogout()

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

const UserSection = () => {
  // const user = useStore((state) => state.user)
  const user = useUser()

  return <div>User: {user}</div>
}

const AddToCartSection = () => {
  // const addToCart = useStore((state) => state.addToCart)
  const addToCart = useAddToCart()

  return (
    <div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

const CartCountSection = () => {
  // const cartCount = useStore((state) => state.cartCount)
  const cartCount = useCartCount()

  return <div>Count: {cartCount}</div>
}

const ContextPage = () => {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  )
}

const ContextPageWrapper = () => {
  return (
    <StoreContextProvider>
      <ContextPage />
    </StoreContextProvider>
  )
}

export default ContextPageWrapper
