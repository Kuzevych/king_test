export const changeAddress = 'CHANGE_ADDRESS';

export const ChangeAddress = (address) => {
    return {
        type: changeAddress,
        address: address
    }
}