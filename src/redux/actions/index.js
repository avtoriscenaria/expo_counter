import {change_count} from '../reducers/count';

export const changeCount = count => ({
        type: change_count,
        count
});
