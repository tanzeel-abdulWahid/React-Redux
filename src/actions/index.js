export const incrNumber = (num) => {
    return{
        type: "INCREMENT",
        payload:num
    }
}

export const decrNumber = () => {
    return{
        type:"DECREMENT"
    }
}