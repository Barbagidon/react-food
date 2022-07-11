function reducer(state, { type, payload }) {
  switch (type) {
    case "GET_ALL_CATEGORIES": {
      return {
        ...state,
        goodies: payload,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: !state.loading,
      };
    }

    case "FILTER_CATEGORY": {
      return {
        ...state,
        filteredCategory: payload,
      };
    }

    case "GET_RECIEPE": {
      return {
        ...state,
        reciepe: payload,
      };
    }

    case "SET_SEARCH_VALUE": {
      const { goodies } = state;
      return {
        ...state,
        searchValue: payload,
        searchArr: goodies.filter((item) => {
          if (item.strCategory.toLowerCase().includes(payload.toLowerCase())) {
            return true;
          }
        }),
      };
    }
    default:
      return state;
  }
}

export default reducer;
