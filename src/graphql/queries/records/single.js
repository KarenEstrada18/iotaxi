import {GraphQLNonNull,GraphQLID} from 'graphql';
import Record from '../../../models/records';
import {RecordType} from '../../types/records';

const querySingleRecord = {
    type:RecordType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const record = Record.findById(params.id).exec()
        return record
    }
}
export default querySingleRecord;