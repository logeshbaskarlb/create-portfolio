export const setSelectedHome = (homekey) => ({
    type : "SET_SELECTED_HOME",
    payload : homekey,
})
export const updateData = (newData) => ({
    type: 'UPDATE_DATA',
    payload: newData,
  });