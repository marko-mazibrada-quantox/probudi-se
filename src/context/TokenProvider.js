import { createContext, useContext } from 'react';
import useLocalStorage from '@rehooks/local-storage';

import { TOKEN } from 'utils/storage.constants';

const TokenContext = createContext({});

function TokenProvider({ children }) {
  const token = useLocalStorage(TOKEN);

  return <TokenContext.Provider value={token}>{children}</TokenContext.Provider>;
}

export const useTokenContext = () => useContext(TokenContext);

export default TokenProvider;
