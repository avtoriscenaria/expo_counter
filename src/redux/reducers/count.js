export const change_count = 'change_count';


export default (count = 0, action) => {

    switch (action.type) {
        case change_count:
            return action.count;
        default:
            return count
    }
};
