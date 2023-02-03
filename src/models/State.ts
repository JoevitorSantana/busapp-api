import * as mongoose from 'mongoose';
import { v4 } from 'uuid';

const StateSchema = new mongoose.Schema({
    state_id: {
        type: String,
        required: true,
    },
    state_name: {
        type: String,
        required: true,
    }
})

export default mongoose.model('State', StateSchema);

export class StateClass {
    state_id: string;
    state_name: string;

    constructor(){
        if(!this.state_id){
            this.state_id = v4();
        }
    }
}