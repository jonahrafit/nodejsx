import executeQuery from '../database';

export async function addCountry(code) {
    try {
        await executeQuery({
            query: `UPDATE countries SET code= ? WHERE id = 2`,
            values: [code],
        });
        return true;
    } catch (error) {
        return false;
    }
}

export async function getCountries() {
    try {
        console.log('GEST TOUENR ');
        return await executeQuery({
            query: `SELECT * from countries`,
        });
    } catch (error) {
        return false;
    }
}
