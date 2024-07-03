import { createStore } from 'vuex';
import member from './modules/memberStore';
import nutrient from './modules/nutrientStore';
import product from './modules/productStore';
import survey from './modules/surveyStore';

export default createStore({
  modules: {
    member,
    nutrient,
    product,
    survey
  }
});
