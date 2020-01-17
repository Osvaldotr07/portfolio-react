
export const traerTodos = () => async (dispatch) => {
    let response = await fetch('/data')
    let data = await response.json()

    dispatch({
        type: '_projects',
        payload: data
    })
}