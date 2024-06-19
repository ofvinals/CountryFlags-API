export const countryReducer = (state, action) => {
	switch (action.type) {
		case 'GET_COUNTRIES':
			return {
				...state,
				countries: action.payload,
				loading: false
			};

		default:
			return state;
	}
};
