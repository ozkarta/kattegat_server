let kitchen_dining = require("./kitchen_dinning");
let furniture = require("./furniture");

let bedding = require("./bedding_bathing/bedding");
let bathing = require("./bedding_bathing/bathing");

module.exports = [
    {
        category_name: "@kids_home_store@",
        type: "child",
        child_category: []
    },
    {
        category_name: "@kitchen&dining@",
        type: "child",
        child_category: kitchen_dining
    },
    {
        category_name: "@bedding@",
        type: "child",
        child_category: bedding
    },
    {
        category_name: "@bath@",
        type: "child",
        child_category: bathing
    },
    {
        category_name: "@furniture@",
        type: "child",
        child_category: furniture
    },
    {
        category_name: "@home_decor@",
        type: "child",
        child_category: []
    },
    {
        category_name: "@wall_art@",
        type: "child",
        child_category: []
    },
    {
        category_name: "@lighting&ceiling_fans@",
        type: "child",
        child_category: []
    },
    {
        category_name: "@event&party_supplies@",
        type: "child",
        child_category: []
    },
    {
        category_name: "@heating&coolant&air_quality@",
        type: "child",
        child_category: []
    },
    {
        category_name: "@irons&steamers@",
        type: "child",
        child_category: []
    },
    {
        category_name: "@floor_care&vacuums@",
        type: "child",
        child_category: []
    },
    {
        category_name: "@cleaning_supplies@",
        type: "child",
        child_category: []
    },
    {
        category_name: "@storage&organization@",
        type: "child",
        child_category: []
    }
    
];