import { createStore } from 'vuex';
import member from './modules/memberStore';
import nutrient from './modules/nutrientStore';
import product from './modules/productStore';
import notice from './modules/notice';

export default createStore({
  modules: {
    member,
    nutrient,
    product,
    notice
  }
});
