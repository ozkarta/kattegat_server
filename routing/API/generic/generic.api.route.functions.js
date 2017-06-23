// DB Models_____________________________________
let Category = require("../../../class/db.models").Category;
let User = require("../../../class/db.models").User;

let Product = require("../../../class/db.models").Product;




let CategoryPopulation = require("../../../config/category.population");
//_______________________________________________




module.exports.getCategories = function (req, res, next) {


    Category.find({ type: "parent" })
        .populate(CategoryPopulation)
        .lean()
        .exec(function (err, result) {
            if (err) {
                return res.send({ status: 500, message: 'Internal Server Error' });
            } else {
                return res.send({ status: 200, message: 'success', category: result });
            }


        });


}

module.exports.getProducts = function (req, res, next) {

    Product.find({})
        .populate({
            path: 'sale_media_list',
            model: 'Media'
        }
        )
        .lean()
        .exec((err, result) => {
            if (err) {
                return res.send({ status: 500, message: 'internal server error' });
            } else {
                return res.send({ status: 200, message: 'success', product_list: result });
            }
        })

};

module.exports.getProductWithId = function (req, res, nect) {

    

    if (!req.params.id) {
        return res.send({ status: 400, message: 'ID is not presented' });
    }

    Product.find({ _id: req.params.id })
        .populate([{
            path: 'sale_media_list',
            model: 'Media'
        },{
            path: 'owner',
            model: 'User'
        }])
        .lean()
        .exec((err, result) => {
            console.dir(result);
            if (err) {
                return res.send({ status: 500, message: 'internal server error' });
            } else {
                if (result.length) {
                    return res.send({ status: 200, message: 'ok', data: result[0] });
                } else {
                    return res.send({ status: 500, message: 'Something Wrong', });
                }
            }
        })
}


module.exports.registerBuyer = function (req, res, next) {
    console.dir(req.body);

    let buyer = new User();

    User.findOne({ eMail: req.body.eMail }, (err, result) => {
        if (err) {
            return res.send({ status: 500, message: "internal server error" });
        }
        if (result) {
            return res.send({ status: 500, message: "Email Exists" });
        } else {
            buyer.type = "BUYER";
            buyer.fName = req.body.fName;
            buyer.lName = req.body.lName;
            buyer.eMail = req.body.eMail;
            buyer.eMailConfirmed = "false";
            buyer.passwordHash = req.body.password;

            buyer.save((err, saved) => {
                if (err) {
                    return res.send({ status: 500, message: "internal server error" });
                }
                if (saved) {
                    return res.send({ status: 200, message: 'success', user: saved });
                }
            })
        }
    });

}


module.exports.logInBuyer = function (req, res, next) {
    console.dir(req.body);

    if (req.body.eMail && req.body.password) {
        User.findOne({ eMail: req.body.eMail }, (err, result) => {
            if (err) {
                return res.send({ status: 500, message: 'internal server error' });
            }
            if (result) {
                return res.send({ status: 200, message: 'ok', user: result });
            } else {
                return res.send({ status: 400, message: 'user not found' });
            }
        })
    } else {
        return res.send({ status: 400, message: 'parameters not presented' });
    }


}