import { createStore } from 'vuex';

 const state = {
 count: 0
 };
 const mutations =  {
  increment(state){
 state.count += 1
 },
  decrement(state){
  state.count -= 1
	}
  };
  const actions = {
	increment: ({commit}) => commit('increment'),
	decrement: ({commit}) => commit('decrement')
  };
  
  export default createStore({
	state,
	actions,
	mutations
	
})