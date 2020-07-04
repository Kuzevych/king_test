export const changeTime = 'CHANGE_HOUR'


export  const ChangeTime = (time) => {
    return {
        type: changeTime,
        payload: time
    }
}
