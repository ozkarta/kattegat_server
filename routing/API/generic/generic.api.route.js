let express = require('express');

let router = express.Router();

let mainApiRouteFunctions = require("./generic.api.route.functions");



//  CATEGGORIES
router.route("/categories")
    .get(mainApiRouteFunctions.getCategories);

router.route("/featured_categories")
    .get(() => {

    });
//  PRODUCTS

router.route("/products")
    .get(mainApiRouteFunctions.getProducts);

router.route('/product/:id')
    .get(mainApiRouteFunctions.getProductWithId);

router.route('/product_new_added')
    .get(() => {

    });

router.route('/product_popular')       //   Most visited
    .get(() => {

    });

router.route('/product_best_seller')
    .get(() => {

    });

router.route('/product_most_wished')
    .get(() => {

    });

router.route('/product_hot_offers')     //  ფასდაკლებები
    .get(() => {

    });

//  REGISTRATION

router.route("/register_buyer")
    .post(mainApiRouteFunctions.registerBuyer);

router.route("/register_seller")
    .get(()=>{

    });

//  LOGIN

router.route('/login_buyer')
    .post(mainApiRouteFunctions.logInBuyer);
    

module.exports = router;