import KeyManager from '../lib/KeyManager.mjs';
import CryptoApi from '../lib/CryptoAPI.mjs';
const check ={
    
        async price(cmd) {
          try {
            const key_Manager = new KeyManager();
            const key = key_Manager.getKey();
      
            const api = new CryptoApi(key);
      
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);
      
            console.log(priceOutputData);
          } catch (err) {
            console.error(err.message.red);
          }
        }
    };
      

export default check;