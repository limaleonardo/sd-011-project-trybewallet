const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
    isLoading: true,
    fetchSucess: false,
    errorMesage: null,
    currentId: 0,
    total: 0,
  },
};

export default INITIAL_STATE;
