const state = () => ({
	traits: [
		{
			name: 'Passionate',
			slug: 'passionate',
			description: 'We take initiative and put everything we have into our work.',
			color: '#E19442'
		},
		{
			name: 'Courageous',
			slug: 'courageous',
			description: 'We face challenges without question and stand up for what’s right.',
			color: '#92D400'
		},
		{
			name: 'Relentless',
			slug: 'relentless',
			description: 'We forge ahead no matter what. We never give up.',
			color: '#275937'
		},
		{
			name: 'Inspiring',
			slug: 'inspiring',
			description: 'We lead by example. We make each other better.',
			color: '#28A19F'
		},
		{
			name: 'Authentic',
			slug: 'authentic',
			description: 'We pursue our passions and stay true to ourselves.',
			color: '#B33705'
		},
		{
			name: 'Reliable',
			slug: 'reliable',
			description: 'We finish what we start. You can always count on us.',
			color: '#88234B'
		}
	]
})

const getters = {
	allTraits: state => state.traits,
}

export default {
	namespaced: true,
	state,
	getters
}