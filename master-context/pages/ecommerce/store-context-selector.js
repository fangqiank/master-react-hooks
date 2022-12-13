import { createContext, useContextSelector } from 'use-context-selector'
import { useState, useCallback } from 'react'

const useStore = () => {
  const [user, setUser] = useState('')
  const [cartCount, setCartCount] = useState(0)

  return {
    user,
    cartCount,
    login: useCallback(() => setUser('lisi'), []),
    logout: useCallback(() => setUser(''), []),
    addToCart: useCallback(() => setCartCount((prev) => prev + 1), []),
  }
}

const StoreContext = createContext(null)

export const StoreContextProvider = ({ children }) => (
  <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
)

export const useLogin = () =>
  useContextSelector(StoreContext, (state) => state.login)

export const useLogout = () =>
  useContextSelector(StoreContext, (state) => state.logout)

export const useUser = () =>
  useContextSelector(StoreContext, (state) => state.user)

export const useAddToCart = () =>
  useContextSelector(StoreContext, (state) => state.addToCart)

export const useCartCount = () =>
  useContextSelector(StoreContext, (state) => state.cartCount)
