import { createStore } from 'vuex';
import member from './modules/memberStore';
import nutrient from './modules/nutrientStore';
import product from './modules/productStore';

export default createStore({
  modules: {
    member,
    nutrient,
    product
  }
});
