import types from './types';

const initialState = {
  Detail: [],
};

export default function reducer(state = initialState, action) {
  let {Detail} = state;
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        Detail: [
          ...Detail,
          ...[
            {
              name: action.payload.name,
              description: action.payload.description,
            },
          ],
        ],
      };

    case types.DELETE: {
      let updatedDetail = Detail.filter(
        (value, index) => index != action.payload.index,
      );
      return {
        ...state,
        Detail: updatedDetail,
      };
    }
    default:
      return state;
  }
}
