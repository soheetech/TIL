import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  FunctionComponent,
} from 'react'

interface AppContext {
  fusejs: any
  setFusejs: Dispatch<SetStateAction<any>>
}

export const AppContext = createContext<AppContext>({
  fusejs: null,
  setFusejs: () => {},
})

type AppProps = {
  children: ReactNode
}

const AppProvider: FunctionComponent<AppProps> = ({ children }) => {
  const [fusejs, setFusejs] = useState(null)

  return (
    <AppContext.Provider value={{ fusejs, setFusejs }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
