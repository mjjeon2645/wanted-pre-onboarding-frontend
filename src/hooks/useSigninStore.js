import { signinStore } from '../stores/SigninStore';

import useStore from './useStore';

export default function useSigninStore() {
  return useStore(signinStore);
}
