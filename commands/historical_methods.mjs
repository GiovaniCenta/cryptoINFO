import KeyManager from '../lib/KeyManager.mjs';
import CryptoApi from '../lib/CryptoAPI.mjs';
const historical ={
    
        async firstTradeDate(cmd) {
          try {
            const key_Manager = new KeyManager();
            const key = key_Manager.getKey();
      
            const api = new CryptoApi(key);
      
            const firstTD= await api.getFirstTradeDate(cmd.coin);
      
            console.log(firstTD);
          } catch (err) {
            console.error(err.message.red);
          }
        }
    };
      

export default historical;