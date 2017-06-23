let Mongoose = require('mongoose');
let Schema = Mongoose.Schema;


let TranslatorSchema = new Schema({
    var_name: String,

    tr_eng: String,
    tr_geo: String
}, {
        timestamps: true
    });



let CategorySchema = new Schema({

    //  Category Name, var_name for translator
    category_name: String,
    //  Reference to Child category
    child_category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    //  Reference to Parent Category
    parent_category: { type: Schema.Types.ObjectId, ref: 'Category' },
    //  Category Type, Parent or child
    type: String

}, {
        timestamps: true
    });


//____________________________________________________________________________________________-
let UserSchema = new Schema({
    type: String,               //  Buyer, Seller, Admin, moderator ...

    fName: String,
    lName: String,
    eMail: String,
    eMailConfirmed: String,         //confirmation via  sending link to email...

    passwordHash: String

}, {
        timestamps: true
    });


let BuyerSchema = new Schema({
    general_address: { type: Schema.Types.ObjectId, ref: 'Address' },
    shipping_address: [{ type: Schema.Types.ObjectId, ref: 'Address' }],
    account: { type: Schema.Types.ObjectId, ref: 'Account' }

}, {
        timestamps: true
    });

let SellerSchema = new Schema({
    shop_name: String,
    shop_address: { type: Schema.Types.ObjectId, ref: 'Address' },
    

    general_address: { type: Schema.Types.ObjectId, ref: 'Address' },
    shipping_address: [{ type: Schema.Types.ObjectId, ref: 'Address' }],
    account: { type: Schema.Types.ObjectId, ref: 'Account' }
}, {
        timestamps: true
    });

let AddressSchema = new Schema({
    country: String,
    city: String,
    address_1: String,
    address_2: String,
    phone: String,
    postal_code: String

}, {
        timestamps: true
    });

let AccountSchema = new Schema({        //  angarishebistvis
    local_account: { type: Schema.Types.ObjectId, ref: 'LocalAccount' },
    credit_card: { type: Schema.Types.ObjectId, ref: 'CreditCard' }
}, {
        timestamps: true
    });

let CreditCardSchema = new Schema({         //  sakredito baratebistvis
    card_owner: String,
    card_number: String,
    expiration_date: String,

    cvc_2: String,

    card_type: String,                       // MasterCard, Visa .....

    verified: String

}, {
        timestamps: true
    });

let LocalAccountSchema = new Schema({       //  lokaluri  angarishebistvis

    local_balance: String,
    currency: String


}, {
        timestamps: true
    });
//______________________________________________________________________________
//                          Sale  Post

let ProductSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },

    category: { type: Schema.Types.ObjectId, ref: "Category" },

    sale_name: String,
    sale_description: String,
    sale_media_list: [{ type: Schema.Types.ObjectId, ref: 'Media' }],

    expiration_date: String,

    price: String,
    currency: String,
    total_number_of_items: String,
    sold_number_of_items: String,
    estimated_number_of_items: String,

    sales: [{ type: Schema.Types.ObjectId, ref: 'Sales' }],

    discount: { type: Schema.Types.ObjectId, ref: 'Discounts' }
}, {
        timestamps: true
    })


let MediaSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },

    type: String,
    media_url: String,    
    media_group_id: String
}, {
        timestamps: true
    });

let DiscountsSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    product: { type: Schema.Types.ObjectId, ref: 'product' },

    status: String
}, {
        timestamps: true
    });

let SalesSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },

    sale_price: String,
    sale_stats: String,

    buyer: { type: Schema.Types.ObjectId, ref: 'User' },
    shipping_status: String,
    shipping_address: { type: Schema.Types.ObjectId, ref: 'Address' }

}, {
        timestamps: true
    })


module.exports.Category = Mongoose.model('Category', CategorySchema);

module.exports.User = Mongoose.model('User', UserSchema);

module.exports.Buyer = Mongoose.model('Buyer', BuyerSchema);
module.exports.Seller = Mongoose.model('Seller', SellerSchema);
module.exports.Address = Mongoose.model('Address', AddressSchema);
module.exports.Account = Mongoose.model('Account', AccountSchema);
module.exports.CreditCard = Mongoose.model('CreditCard', CreditCardSchema);
module.exports.LocalAccountSchema = Mongoose.model('LocalAccount', LocalAccountSchema);


module.exports.Product = Mongoose.model('Product',ProductSchema);
module.exports.Media = Mongoose.model('Media',MediaSchema);
module.exports.Discounts = Mongoose.model('Discounts',DiscountsSchema);
module.exports.Sales = Mongoose.model('Sales',SalesSchema);