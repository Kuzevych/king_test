export const changeTime = 'CHANGE_DATE_AND_TIME'


export  const ChangeTime = (time) => {
    return {
        type: changeTime,
        time: time
    }
}
