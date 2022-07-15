export const SELECT_POLL='SELECT_POLL'

export function selectPoll(pollid){
    return{
        type:SELECT_POLL,
        pollid,

    }

}