import { createNomineeRecord, mockNominees } from "@/data/mockNominees";

const state = () => ({
  nominees: mockNominees
})

// getters
const getters = {
	allNominees: state => state.nominees,
	nomineeCount: state => state.nominees.length,
	firstFortyTwoNonSuspendedNominees: state => state.nominees.slice(0, 42),
	nonSuspendedNomineesByIndex: (state) => (start, end) => {
		// console.log('fromstate', state.nominees, state.nominees.filter(nominee => !nominee.fields.Suppress).slice(start, end))
    return state.nominees.slice(start, end)
  }
}

// actions
const actions = {
  async getAllNominees ({ state, commit }) {
		if (state.nominees.length === 0) {
			commit('setNominees', mockNominees)
		}
  },
  addNominee ({ state, commit }, nomination) {
		const nextNumber = state.nominees.reduce((max, nominee) => {
			return Math.max(max, nominee.fields.Nominee || 0)
		}, 0) + 1
		commit('setNominees', [
			createNomineeRecord(nomination, nextNumber),
			...state.nominees,
		])
  }
}

// mutations
const mutations = {
  setNominees (state, nominees) {
    state.nominees = nominees
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
