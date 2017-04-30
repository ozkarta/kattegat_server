let Category = require("../class/db.models.js").Category;

//  JSONS

let categoryJSON = require("../config/db/category");




module.exports.init = function () {



    initCategories(categoryJSON);

}






function initCategories(cat) {
    console.log('initializing  Category list ...');

    let categoryArray = [];

    Category.remove({}, (err) => {
        if (err) {
            console.dir(err);
        }
        else {
            console.log('removed all from Category');
        }
        cat.forEach((element, index) => {

            generateCategoryRecursive(element, undefined, (category) => {
                categoryArray.push(category);

            });

        }, this);

    });

}

function generateCategoryRecursive(element, parent, customCallback) {

    let category = new Category();

    category.category_name = element.category_name;
    category.type = element.type;

    if (parent) {
        category.parent_category = parent;
    }



    if (element.child_category.length) {
        let counter = 0;
        element.child_category.forEach((elem, index) => {
            generateCategoryRecursive(elem, category._id, (cat) => {
                if (cat) {
                    category.child_category.push(cat);
                }

                counter++;
            })
        }, this);

        // Stop  caling callback function while all is done
        while (counter < element.child_category.length) {

        }

        category.save((err, result) => {
            if (err) {
                console.dir(err);
            }
        });

        customCallback(category);

    } else {

        category.save((err, result) => {
            if (err) {
                console.dir(err);
            }
        });

        customCallback(category);
    }

}