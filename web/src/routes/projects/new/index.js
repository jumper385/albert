import { promises as fs} from 'fs';
import converter from 'json-2-csv';
import { type2Code } from '../../../helpers/componentparser';

export const post = async (req, res) => {
    let {bom} = req.files;
    let fileData = await fs.readFile(bom.path, 'utf-8')
    let table = await converter.csv2jsonAsync(fileData);

    let filtered = table.map(x => {
        let standardOutput = {
            component:`${x.value}${x.unit == 'model' ? "" : x.unit}_${type2Code(x.type)}_${x.package}`,
            quantity: x.quantity,
        }
        return standardOutput
    })
    
    res.json(filtered)
};