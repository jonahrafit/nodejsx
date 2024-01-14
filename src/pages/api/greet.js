export default function handler(req, res) {
    // Récupérer la date actuelle
    const currentDate = new Date();
    // Date de référence (11 février 2024)
    const referenceDate = new Date('2024-02-11');
    // Comparer les dates
    const isBeforeReferenceDate = currentDate < referenceDate;
    // Retourner le résultat en tant que JSON
    res.status(200).json({ isBeforeReferenceDate });
}