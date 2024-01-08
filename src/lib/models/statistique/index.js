import executeQuery from "../../database";

export async function getStatistique(idUser) {
    try {
        // const totalAceepted = await executeQuery({
        //   query: `SELECT SUM(remuneration) as count FROM histo_offers WHERE idUser="${idUser}" AND etat="ACCEPTED"`,
        // });
        const totalAceepted = await executeQuery({
            query: `SELECT euros as count FROM users WHERE hashId="${idUser}"`,
        });
        const totalPending = await executeQuery({
            query: `SELECT SUM(remuneration) as count FROM histo_offers WHERE idUser="${idUser}" AND etat="PENDING"`,
        });
        const totalCommande = await executeQuery({
            query: `SELECT COUNT(*) as count FROM commandes WHERE userID="${idUser}" AND status="ACCEPTED"`,
        });
        const missionAccepted = await executeQuery({
            query: `SELECT SUM(remuneration) as remuneration, date
            FROM histo_offers
            WHERE idUser="${idUser}" AND etat = 'ACCEPTED'
            GROUP BY date
            ORDER BY date ASC`,
        });
        const missionPending = await executeQuery({
            query: `SELECT SUM(remuneration) as remuneration ,date FROM histo_offers WHERE idUser="${idUser}"
            AND etat="PENDING"
            GROUP BY date
            ORDER BY date ASC
            `,
        });
        const commandeAccepted = await executeQuery({
            query: `SELECT SUM(amount) as remuneration ,date FROM commandes WHERE userID="${idUser}" AND status="ACCEPTED" GROUP BY date order by date ASC`,
        });

        return {
            total: {
                gain: totalAceepted[0].count,
                attente: totalPending[0].count,
                commande: totalCommande[0].count,
            },
            mission: {
                accepted: missionAccepted,
                pending: missionPending,
                commande: commandeAccepted,
            },
        };
    } catch (error) {
        return { error, message: "Erreur lors de la création", success: false };
    }
}
