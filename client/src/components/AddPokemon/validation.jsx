export default function validation(state){
const errors = {};

if(!state.name){
    errors.name= 'Name is required.';
}else if(!/^[a-zA-Z]+$/.test(state.name)){
    errors.name= 'Name must contain only letters.'
};

if(!state.image){
    errors.image= 'Image is required.';
}else if(!/^(?:([^:/?#]+):)?(?:([^/?#]*))?([^?#]*\.(?:jpg|gif|png||webp))(?:\?([^#]*))?(?:#(.*))?$/gm.test(state.image)){
    errors.image= 'Image is invalid: it has to be the URL of an image.';
};

if(!state.hp){
    errors.hp= 'Hp is required.';
}else if(!Number(state.hp) || state.hp < 0 || state.hp > 100){
    errors.hp='Hp is invalid: must be a value from 0 to 100.';
};

if(!state.attack){
    errors.attack= 'Attack is required.';
}else if(!Number(state.attack) || state.attack < 0 || state.attack > 100){
    errors.attack='Attack is invalid: must be a value from 0 to 100.';
};

if(!state.defense){
    errors.defense= 'Defense is required.';
}else if(!Number(state.defense) || state.defense < 0 || state.defense > 100){
    errors.defense='Defense is invalid: must be a value from 0 to 100.';
};

if(!state.speed){
    errors.speed= 'Speed is required.';
}else if(!Number(state.speed) || state.speed < 0 || state.speed > 100){
    errors.speed='Speed is invalid: must be a value from 0 to 100.';
};

if(!state.height){
    errors.height= 'Height is required.';
}else if(!Number(state.height) || state.height < 0 || state.height > 100){
    errors.height='Height is invalid: must be a value from 0 to 100.';
};

if(!state.weight){
    errors.weight= 'Weight is required.';
}else if(!Number(state.weight) || state.weight < 0 || state.weight > 100){
    errors.weight='Weight is invalid: must be a value from 0 to 100.';
};

if(!state.types.length){
    errors.types= "Types are required, please select types for your pokemon"
}


return errors
}