let bedding = require("./bedding_bathing/bedding");
let bathing = require("./bedding_bathing/bathing");

module.exports = [
    {
        category_name: "@bedding@",
        type: "child",
        child_category: bedding
    },
    {
        category_name: "@bathing@",
        type: "child",
        child_category: bathing
    }
];