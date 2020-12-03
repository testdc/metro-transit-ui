import { Provider } from 'react-redux';
import makeStore from '../store/store';

export default function App({ Component, pageProps }) {
  const store = makeStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}