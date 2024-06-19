export const TriviaReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				...state,
				loading: false,
			};
		case 'FETCH_ERROR':
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case 'GENERATE_QUESTION':
			return {
				...state,
				question: action.payload,
			};
		case 'INCREMENT_SCORE':
			return {
				...state,
				score: action.payload,
			};
		case 'INCREMENT_QUESTION_COUNT':
			return {
				...state,
				questionCount: state.questionCount + 1,
			};
		case 'RESET_GAME':
			return {
				...state,
				score: 0,
				questionCount: 0,
			};
		case 'SET_ALERT':
			return {
				...state,
				alert: action.payload,
			};
		case 'CLEAR_ALERT':
			return {
				...state,
				alert: null,
			};
		default:
			return state;
	}
};
