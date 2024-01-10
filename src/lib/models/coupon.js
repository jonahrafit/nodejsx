import executeQuery from "../database";

const getAllCoupons = async (req, res) => {
    try {
        const couponsData = await executeQuery({
            query: "SELECT * FROM coupons",
            values: [],
        });
        res.status(200).json(couponsData);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getCouponById = async (req, res) => {
    let id = req.query.id;
    try {
        const couponData = await executeQuery({
            query: "select * from coupons where id = ?",
            values: [id],
        });
        if (couponData.length > 0) res.status(200).json(couponData);
        res.status(404).json({error: `No Coupon found with  this ID : ${id}`});

        // next(new ErrorHandler(`No Coupon found with  this ID : ${id}`, 404));
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteCouponById = async (req, res) => {
    const id = req.query.id;

    try {
        let couponData = await executeQuery({
            query: "delete from coupons where id = ?",
            values: [id],
        });
        res.status(200).json(couponData);
    } catch (error) {
        res.status(500).json(error);
    }
};

const newCoupon = async (req, res) => {
    try {
        const result = req.body;
        const {
            idcoupon,
            typecoupon,
            nom,
            url,
            code,
            description,
            description2,
            pays,
            valid,
            actif,
            dateDebut,
            dateFin,
            image,
        } = result;
        const coupon = {
            idcoupon,
            typecoupon,
            nom,
            url,
            code,
            description,
            description2,
            pays,
            valid,
            actif,
            dateDebut,
            dateFin,
            image,
        };
        //let { err } = couponValidator(result);
        //console.log( err );
        const couponData = await executeQuery({
            query:
                "INSERT INTO coupons(idcoupon, typecoupon, nom, url, code, description, description2, pays, valid, actif, dateDebut, dateFin, image) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
            values: [
                coupon.idcoupon,
                coupon.typecoupon,
                coupon.nom,
                coupon.url,
                coupon.code,
                coupon.description,
                coupon.description2,
                coupon.pays,
                coupon.valid,
                coupon.actif,
                coupon.dateDebut,
                coupon.dateFin,
                coupon.image,
            ],
        });
        couponData = await executeQuery(
            `select * from coupons where id =  ${couponData.insertId}`
        );
        res.status(201).json(couponData);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateCoupon = async (req, res) => {
    let id = req.query.id;
    const {
        idcoupon,
        typecoupon,
        nom,
        url,
        code,
        description,
        description2,
        pays,
        valid,
        actif,
        dateDebut,
        dateFin,
        image,
    } = req.body;
    try {
        let couponData = await executeQuery({
            query: "select * from coupons where id = ?",
            values: [id],
        });
        if (couponData.length) {
            couponData = await executeQuery({
                query:
                    "update coupons set idcoupon=?, typecoupon=?, nom=?, url=?, code=?, description=?, description2=?, pays=?, valid=?, actif=?, dateDebut=?, dateFin=?, image=? where id = ?",
                values: [
                    idcoupon,
                    typecoupon,
                    nom,
                    url,
                    code,
                    description,
                    description2,
                    pays,
                    valid,
                    actif,
                    dateDebut,
                    dateFin,
                    image,
                    id,
                ],
            });
            couponData = await executeQuery({
                query: `select * from coupons where id =  ?`,
                values: [id],
            });
            res.status(200).json(couponData);
        } else {
            res.status(400).json(`Coupon not found on this id = ${id}`);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    getAllCoupons,
    getCouponById,
    deleteCouponById,
    newCoupon,
    updateCoupon,
};
