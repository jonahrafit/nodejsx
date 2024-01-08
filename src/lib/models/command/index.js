import templateMail from "../mail-sender/template";
import executeQuery from "../../database";
import {sendMailCustom} from "../mail-sender/customSendMail";

export async function addCommand(userID, shopID, amount) {
    try {
        const res = await executeQuery({
            query: `INSERT INTO commandes (userID, shopID,status, amount,date) VALUES (?,?,?,?,?)`,
            values: [
                userID,
                shopID,
                "PENDING",
                amount,
                new Date().toLocaleDateString(),
            ],
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function getCommandByUser(userID) {
    try {
        const res = await executeQuery({
            query: `SELECT commandes.status,commandes.code_promo, commandes.amount,boutique.nom as bnom,boutiqueCategorie.nom as cnom  FROM commandes INNER JOIN boutique ON commandes.shopID = boutique.id INNER JOIN boutiqueCategorie ON boutiqueCategorie.id = boutique.categorieId WHERE commandes.userID = ?`,
            values: [userID],
        });
        return res;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function getAllCommandes() {
    try {
        const res = await executeQuery({
            query:
                "SELECT *, commandes.id, commandes.status, commandes.amount,boutique.nom as bnom,boutiqueCategorie.nom as cnom, users.nom as unom, users.prenom as uprenom  FROM commandes INNER JOIN boutique ON commandes.shopID = boutique.id INNER JOIN boutiqueCategorie ON boutiqueCategorie.id = boutique.categorieId INNER JOIN users on commandes.userID = users.hashId WHERE commandes.status='PENDING'",
        });
        return res;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function validateCommande(etat, id, codePromo) {
    if (etat === "REFUSED") {
        const offre = await executeQuery({
            query: `SELECT * FROM commandes WHERE id =${id}`,
        });
        const {userID, amount} = await offre[0];
        await executeQuery({
            query: `UPDATE users SET euros = (euros + ${amount}) WHERE hashId = "${userID}" `,
        });

        try {
            await executeQuery({
                query: `UPDATE commandes SET status =? WHERE id = ? `,
                values: [etat, id],
            });
            return {message: `L'etat ${etat} en succès`, success: true};
        } catch (error) {
            return {message: "Erreur", success: false, error};
        }
    }

    const informationUser = await executeQuery({
        query: `SELECT users.nom as 'nom',users.prenom as 'prenom', commandes.amount as 'amount', users.email as 'emailUser',boutique.nom AS 'boutiqueNom',boutiqueCategorie.nom AS 'catboutiqueNom' FROM commandes INNER JOIN users ON users.hashId = commandes.userID INNER JOIN boutique ON commandes.shopID = boutique.id INNER JOIN boutiqueCategorie ON boutiqueCategorie.id = boutique.categorieId  WHERE commandes.id =${id}`,
    });

    const {catboutiqueNom, emailUser, amount, boutiqueNom, nom, prenom} =
        informationUser[0];
    // console.log(informationUser);

    var resultMail;
    if (etat === "ACCEPTED") {
        if (catboutiqueNom == "Carte-Cadeaux") {
            const data = {
                email: emailUser,
                subject: `Validation commande chez MAXCADEAU`,
                html: templateMail(
                    `${emailUser}`,
                    boutiqueNom,
                    codePromo,
                    amount,
                    prenom,
                    nom
                ),
            };
            await sendMailCustom(data).then((res) => {
                resultMail = res.success;
            });
        } else {
            const data = {
                email: emailUser,
                subject: `Validation commande chez MAXCADEAU`,
                html: templateMail(
                    `${emailUser}`,
                    boutiqueNom == "Paypal" ? "Paypal" : "Bancaire",
                    "",
                    amount,
                    prenom,
                    nom
                ),
            };
            await sendMailCustom(data).then((res) => {
                resultMail = res.success;
            });
        }
    }

    if (!resultMail) {
        return {message: "Email not send", success: false};
    } else {
        try {
            await executeQuery({
                query: `UPDATE commandes SET status =? ,code_promo=? WHERE id = ? `,
                values: [etat, codePromo, id],
            });
            return {message: `L'etat ${etat} en succès`, success: true};
        } catch (error) {
            return {message: "Erreur", success: false, error};
        }
    }
}
