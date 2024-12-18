// selectors

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const FETCH_TABLES = createActionName('FETCH_TABLES');

// action creators
export const fetchTables = (tables) => ({
  type: FETCH_TABLES,
  payload: tables,
});

// reducer
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case FETCH_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tablesReducer;