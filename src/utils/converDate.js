export default function convertDate(date) {
    const dateOption = {year: "numeric", month: "short", day: "numeric"};
    const dates = new Date(date);
    const result = dates.toLocaleDateString("fr-FR", dateOption);
    return result;
}
