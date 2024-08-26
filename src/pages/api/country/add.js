import {addCountry} from '../../../lib/models/country';

export default async function handler(req, res) {
    const result = await addCountry(req.body.data);

    if (!result) {
        res.status(400).send(result.request);
    } else {
        res.status(200).send(result);
    }
}
