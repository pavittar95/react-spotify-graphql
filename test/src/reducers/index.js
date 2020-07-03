import storage from 'redux-persist/lib/storage';
import { persistCombineReducers } from "redux-persist";
import createEncryptor from "redux-persist-transform-encrypt";
import user from "./modules/user";
import profile from "./modules/profile";

const encryptor = createEncryptor({
  secretKey: "my-super-secret-key",
});

const persistConfig = {
  key: "spotify-app",
  storage: storage,
  transforms: [encryptor],
  blacklist: ['router']
};

export default persistCombineReducers(persistConfig, {
  user,
  profile
});
