let Category = require("../class/db.models.js").Category;
let User = require("../class/db.models").User;

let Product = require("../class/db.models").Product;
let Media = require("../class/db.models").Media;
let Discount = require("../class/db.models").Discount;
let Sale = require("../class/db.models").Sales;
//  JSONS

let categoryJSON = require("../config/db/category");
let buyer = undefined;
let seller = undefined;
let administrator = undefined;
let moderator = undefined;


let hardcodedUserCount = 2;

module.exports.init = function () {

    //initCategories(categoryJSON);
    initCategoryTR(categoryJSON);


    generateBuyer();
    generateAdministrator();

    generateModerator();


    generateSeller((seller) => {
        generateNewProduct(seller, 
                '592889f1054fa2476efbdf8c', 
                'Philips m5410', 
                'ფილიპსის ძააან სერიოზული მონიტორი იყიდება.', 
                [{type:'main',url:'/src/public/images/products/product1.jpg'},
                {type:'secondary',url:'/src/public/images/products/product2.jpg'}],
                 '', 
                 '150', 
                 '50');

        generateNewProduct(seller, 
                '592889f1054fa2476efbdf6c', 
                'სუპერ ბავშვი', 
                'ბავშვის ძააააან სერიოზული სათამაშო', 
                [{type:'main',url:'/src/public/images/products/product1.jpg'}],
                 '', 
                 '60', 
                 '50');
    });

}



//________________RECURSIVE CATEgORY GENERATION(CHECKS DB VALUES FOR NO DUPLICATES)_______
function initCategoryTR(categoryJSON) {
    let tree = [];

    let counter = 0;

    categoryJSON.forEach((jsonElement, index) => {
        generateCategoryRecursiveTR(jsonElement, undefined, (treeElement) => {
            if (treeElement) {
                tree.push(treeElement);
                counter++;
            }
        });
    });

    while (counter < categoryJSON.length) {
    }

    //saveTree(tree, undefined);
    saveTreeTR(tree, undefined, undefined);
}
function generateCategoryRecursiveTR(element, parent, callback) {
    if (!element) {
        console.log('element is not defined');
        return callback(undefined);
    }

    let category = new Category();
    let treeElement = new categoryTree();

    category.category_name = element.category_name;
    if (parent) {
        category.parent_category = parent;
        category.type = "child";
    } else {
        category.type = "parent";
    }

    if (element.child_category.length) {
        let counter = 0;
        element.child_category.forEach((elem, index) => {
            generateCategoryRecursiveTR(elem, category._id, (cat) => {
                if (cat) {
                    category.child_category.push(cat.element);
                    treeElement.children.push(cat);
                }

                counter++;
            })
        }, this);

        // Stop  caling callback function while all is done
        while (counter < element.child_category.length) {

            generateCategoryRecursiveTR
        }
    }
    treeElement.element = category;

    callback(treeElement);
}
function categoryTree() {
    this.element = undefined;
    this.children = [];
}
function saveTree(tree, parent) {
    let searchJSON = {};
    if (parent) {
        searchJSON.parent_category = parent;
    } else {
        searchJSON.type = "parent";
    }

    //console.log(searchJSON);

    tree.forEach((treeElement, index) => {
        if (!treeElement.element) {
            return;
        }
        searchJSON.category_name = treeElement.element.category_name;
        //console.log(searchJSON);
        Category.find(searchJSON, (err, found) => {
            if (found.length) {
                //console.log('found');
                if (treeElement.children) {
                    saveTree(treeElement.children, found);
                }
            } else {
                //console.log(searchJSON);
                console.log('saving...');

                treeElement.element.save((err, saved) => {

                    if (saved) {
                        if (treeElement.children) {
                            saveTree(treeElement.children, treeElement.element);
                        }
                    }
                });
            }
        });

    });
}

function saveTreeTR(tree, parentFromTree, parentFromDB) {
    let searchJSON = generateSearchQuery(parentFromTree, parentFromDB);

    tree.forEach((treeElement, index) => {
        searchJSON.category_name = treeElement.element.category_name;



        Category.find(searchJSON, function afterSearchCategories(err, result) {
            // console.log('found....');
            // console.dir(result);


            if (err) {
                console.dir(err);
                return;
            }
            if (result.length) {
                let newParent = result[0];
                saveTreeTR(treeElement.children, treeElement.element, newParent);
            } else {

                if (parentFromDB) {
                    parentFromDB.child_category.push(treeElement.element);
                    treeElement.element.parent_category = parentFromDB;

                    // parentFromDB.save((err, res) => {
                    //     treeElement.element.save((err, res) => {
                    //         console.log('saved');
                    //         console.dir(res.category_name+' '+res._id);
                    //         saveTreeTR(treeElement.children, treeElement.element, undefined);
                    //     });
                    // });
                    treeElement.element.save((err, resChild) => {

                        parentFromDB.save((err, resParent) => {
                            // console.log('saved');
                            // console.dir(resChild.category_name + ' ' + resChild._id+' >>> '+resParent.category_name);
                            saveTreeTR(treeElement.children, treeElement.element, undefined);
                        });

                    });
                } else {
                    treeElement.element.save((err, res) => {
                        // console.log('saved');
                        // console.dir(res.category_name + ' ' + res._id);
                        saveTreeTR(treeElement.children, treeElement.element, undefined);
                    });
                }

            }
        });
    });

}

function generateSearchQuery(parentFromTree, parentFromDB) {
    let searchJSON = {};
    if (parentFromDB) {
        searchJSON.parent_category = parentFromDB;
    } else {
        if (parentFromTree) {
            searchJSON.parent_category = parentFromTree;
        } else {
            searchJSON.type = "parent";
        }
    }
    return searchJSON;
}






//_______________________________________________________
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
    //category.type = element.type;

    if (parent) {
        category.parent_category = parent;
        category.type = "child";
    } else {
        category.type = "parent";
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



//   USER MANAGEMENT
function generateBuyer() {

    //User.remove({}, (err) => {
    User.find({ eMail: 'buyer@kattegat.ge' }, function (err, users) {
        if (users.length === 0) {
            buyer = new User();

            buyer.type = 'BUYER';
            buyer.fName = 'Ozbegi';
            buyer.lName = 'Kartvelishvili';
            buyer.eMail = 'buyer@kattegat.ge';
            buyer.eMailConfirmed = 'true';
            buyer.passwordHash = '12qwert12';

            buyer.save((err, result) => {

            });
        }
    });


    //})

}

function generateAdministrator() {
    User.find({ eMail: 'administrator@kattegat.ge' }, function (err, users) {
        if (users.length === 0) {
            console.log('removed all Users...')
            admin = new User();

            admin.type = 'ADMINISTRATOR';
            admin.fName = 'Ozbegi';
            admin.lName = 'Kartvelishvili';
            admin.eMail = 'administrator@kattegat.ge';
            admin.eMailConfirmed = 'true';
            admin.passwordHash = '12qwert12';

            admin.save((err, result) => {

            });
        }
    });
    //User.remove({}, (err) => {

    //})

}

function generateSeller(callback) {
    User.find({ eMail: 'seller@kattegat.ge' }, function (err, users) {
        if (users.length === 0) {
            console.log('removed all Users...')
            seller = new User();

            seller.type = 'SELLER';
            seller.fName = 'Ozbegi';
            seller.lName = 'Kartvelishvili';
            seller.eMail = 'seller@kattegat.ge';
            seller.eMailConfirmed = 'true';
            seller.passwordHash = '12qwert12';

            seller.save((err, result) => {

            });
        } else {
            seller = users[0];
        }
        callback(seller);
    });
    //User.remove({}, (err) => {

    //})

}

function generateModerator() {
    User.find({ eMail: 'moderator@kattegat.ge' }, function (err, users) {
        if (users.length === 0) {
            console.log('removed all Users...')
            admin = new User();

            admin.type = 'MODERATOR';
            admin.fName = 'Ozbegi';
            admin.lName = 'Kartvelishvili';
            admin.eMail = 'moderator@kattegat.ge';
            admin.eMailConfirmed = 'true';
            admin.passwordHash = '12qwert12';

            admin.save((err, result) => {

            });
        }
    });
    //User.remove({}, (err) => {

    //})

}

//_________

function generateNewProduct(seller, category, sale_name, sale_description, mediaURLList, exp_date, price, total_number_of_items) {
    // console.dir(seller);


    Product.find({ owner: seller, sale_name: sale_name, sale_description: sale_description }, (err, found) => {
        let product = new Product();

        if (!found.length) {


            product.owner = seller;
            product.category = category;
            product.sale_name = sale_name;
            product.sale_description = sale_description;

            //MEDIA
            mediaURLList.forEach((_media) => {
                let media = new Media();
                media.owner = seller;
                media.product = product;
                media.type = _media.type;
                media.media_url = _media.url;


                product.sale_media_list.push(media);

                media.save((err, result) => {

                });
            })

            product.expiration_date = exp_date;
            product.price = price;
            product.total_number_of_items = total_number_of_items;


        } else {
            product = found[0];

            product.owner = seller;
            product.category = category;
            product.sale_name = sale_name;
            product.sale_description = sale_description;
            product.expiration_date = exp_date;
            product.price = price;
            product.total_number_of_items = total_number_of_items;

            if (mediaURLList.length) {
                product.sale_media_list = [];
            }

            mediaURLList.forEach((_media) => {
                let media = new Media();
                media.owner = seller;
                media.product = product;
                media.type = _media.type;
                media.media_url = _media.url;


                product.sale_media_list.push(media);

                media.save((err, result) => {

                });
            })
        }

        product.save((err, savedProduct) => {
            console.log('product saved...');
        });


    });



}