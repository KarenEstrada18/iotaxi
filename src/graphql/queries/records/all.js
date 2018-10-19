import {
    GraphQLList
} from 'graphql';

import Record from '../../../models/records';
import {RecordType} from '../../types/records';

const queryAllRecords = {
     type:new GraphQLList(RecordType),
     resolve(){
         const records = Record.find().exec()
         if(!records) throw new Error("Error al traer de la base de bsae de datos")
         return records
     }
}

export default queryAllRecords