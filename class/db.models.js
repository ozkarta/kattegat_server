let Mongoose = require('mongoose');
let Schema = Mongoose.Schema;


let TranslatorSchema = new Schema({
    var_name: String,

    tr_eng: String,
    tr_geo: String
},{
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

},{
		timestamps: true
});



module.exports.Category = Mongoose.model('Category', CategorySchema);