import {createValidationOfferToro} from "../../../lib/models/postbackcall/offertoro";

export default async function handler(req, res) {
    const result = await createValidationOfferToro(req);
    if (!result) {
        res.status(200).send(result);
    } else {
        res.status(200).send(result);
    }
}
