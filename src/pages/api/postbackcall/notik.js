import {createValidationNotik} from "../../../lib/models/postbackcall/notik";

export default async function handler(req, res) {
    const result = await createValidationNotik(req);
    if (!result) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result);
    }
}
