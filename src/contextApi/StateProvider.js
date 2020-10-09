import React, { useContext, createContext, useReducer } from 'react'

// prepare the data layer

export const storeContext = createContext()

// Will be used to wrap around the APP and provide data layer to every component that need the data

export const StateProvider = ({ reducer, initialState, children }) => (
  <storeContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </storeContext.Provider>
)

export const useStoreValue = () => useContext(storeContext)