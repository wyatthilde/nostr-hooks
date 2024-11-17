import NDK from '@nostr-dev-kit/ndk';
import { create } from 'zustand';

type NDKState = {
  ndk: NDK;
};

type NDKActions = {
  setNdk: (ndk: NDK) => void;
};

export const useStore = create<NDKState & NDKActions>()((set) => ({
  ndk: new NDK({
    explicitRelayUrls: [],
  }),

  setNdk: (ndk) => set({ ndk }),
}));
