// selectors

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const FETCH_TABLES = createActionName('FETCH_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const fetchTables = (tables) => ({
  type: FETCH_TABLES,
  payload: tables,
});

export const updateTable = (table) => ({
  type: UPDATE_TABLE,
  payload: table,
});

// reducer
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case FETCH_TABLES:
      return [...action.payload];
    case UPDATE_TABLE:
      return statePart.map(table => table.id === action.payload.id ? action.payload : table);
    default:
      return statePart;
  }
};

export default tablesReducer;