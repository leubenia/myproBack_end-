import { gitpost } from '../../models/posting';

const create_table_salepost = async() => {
    await gitpost.sync({force : true})
    .then(() => {
        console.log("Success Create salepost Table");
    })
    .catch((err:Error) => {
        console.log("Error in Create salepost Table : ", err);
    })
}

create_table_salepost();