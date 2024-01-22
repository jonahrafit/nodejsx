import executeQuery from "../database";

export const getAllCouponsActif = async (req, res) => {
    try {
        const couponsData = await executeQuery({
            query: "select * from coupons where actif = 1",
            values: [],
        });
        res.status(200).json(couponsData);
    } catch (error) {
        res.status(500).json(error);
    }
};
