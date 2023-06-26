const shorten = (title) => {
    const splited = title.split(' ');
    const newTitle = `${splited[0]} ${splited[1]}`;
    return newTitle;
}

const isInCard = (state, id) => {
    // check item is in card or not
    const result = !!state.selectedItem.find(item => item.id === id);
    return result;
}

const quantityCounter = (state, id) => {
    const index =  state.selectedItem.findIndex(item => item.id === id);
    if(index === -1){
        return false;
    }
    else{
        return state.selectedItem[index].quantity;
    }
    
}
export {shorten, isInCard, quantityCounter};