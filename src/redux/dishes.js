import * as ActionTypes from './ActionTypes';
export const Dishes = (state = {
    // Vì dishes rỗng
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch (action.type) {
        //  khi ADD_DISHES được gọi thì isLoading thành false vì dishes đã được load đã lấy được thông tin tử server và tải vào dishes
        case ActionTypes.ADD_DISHES:
            return{...state, isLoading: false, errMess: null, dishes: action.payload};
        //  Khi DISHES_LOADING được gọi thì isLoading đang là false sẽ chuyển sang true để lấy thông tin từ server
        case ActionTypes.DISHES_LOADING:
            // Lấy tất cả các giá trị trước đó của state
            return{...state, isLoading: true, errMess: null, dishes: []};
        case ActionTypes.DISHES_FAILED:
            return{...state, isLoading: false, errMess: action.payload, dishes: []};
            default:
            return state;
    }
};