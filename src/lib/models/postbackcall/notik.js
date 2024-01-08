import executeQuery from "../../database";

const md5 = require("md5");

export async function createValidationNotik(data) {
    const {pub_id, user_id, amount, offer_id, offer_name, signature} =
        data.query;

    const validation_signature = md5(user_id + ":" + amount + ":" + pub_id);
    console.log(validation_signature);

    if (signature != validation_signature) {
        return "ERROR: Signature doesn't match";
    } else {
        const montantRev = (0.3 * amount) / 1000;

        const user = await executeQuery({
            query: `SELECT hashId FROM users WHERE hashId = "${user_id}"`,
        });
        return await executeQuery({
            query: `INSERT INTO histo_offers (idUser, offerwall, idt, remuneration, date, dateUsTime, data, etat,ip) VALUES (?,?,?,?,?,?,?,?,?)`,
            values: [
                user[0].hashId,
                "Notik",
                offer_name,
                montantRev,
                new Date().toLocaleDateString(),
                new Date().toLocaleDateString(),
                offer_id,
                "PENDING",
                "0.0.0.0",
            ],
        }).then((res) => {
            return "Mission en succès";
        });
    }
}
