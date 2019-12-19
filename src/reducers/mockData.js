import {
  NEW_PROCEDURE_CREATE,
  SET_TARGET_PROCEDURE
} from "../action/MockDataActions";

const initialState = () => {
  return {
    possibleTasks: [
      {
        name: "Get results"
      },
      {
        name: "Show results"
      },
      {
        name: "Mailing"
      },
      {
        name: "Сalculate the average"
      },
      {
        name: "Show maximum value"
      }
    ],
    allProcedures: [
      {
        name: "procedure 1",
        id: "1234124",
        schedule: [{ value: [2019, 12, "Mon", 15, 30], id: "1597538" }],
        tasks: [
          {
            name: "task_1",
            id: "1"
          },
          {
            name: "task_2",
            id: "2"
          },
          {
            name: "task_3",
            id: "3"
          },
          {
            name: "task_4",
            id: "4"
          }
        ]
      }
    ],
    allProceduresHeads: [
      {
        name: "Procedure 1",
        id: "1234124"
      }
    ],
    targetProcedure: []
  };
};

export function mockDataReducer(state = initialState(), action) {
  switch (action.type) {
    case NEW_PROCEDURE_CREATE:
      return {
        ...state,
        allProcedures: state.allProcedures.concat(action.payload),
        allProceduresHeads: state.allProceduresHeads.concat({
          name: action.payload.name,
          id: action.payload.id
        })
      };

    case SET_TARGET_PROCEDURE:
      const newTargetProcedure = state.allProcedures.find(
        item => item.id === action.payload
      );
      return { ...state, targetProcedure: [newTargetProcedure] };

    default:
      return state;
  }
}
