/*

   category_name: "",
   type: "parent",
   child_category: [{

   }, {

   }]

*/
let sport_outdoor = require("./categories/sports_outdoors.js");
let kids = require("./categories/kids");
let electronics = require("./categories/electronics.js");
let music_instruments = require("./categories/music_instuments");
let office = require("./categories/office");
let automotive = require("./categories/automotive");
let clothing_shoes_jewelry = require("./categories/clothing_shoes_jewelry");
let beauty_health = require("./categories/beauty_health");
let home_garden = require("./categories/home_garden");

module.exports = [
    {

        category_name: "@kids@",
        type: "parent",
        child_category: kids

    },
    {

        category_name: "@electronics&computers@",
        type: "parent",
        child_category: electronics

    },
    {

        category_name: "@home&garden&tools@",
        type: "parent",
        child_category: home_garden

    },
    {

        category_name: "@beauty&health@",
        type: "parent",
        child_category: beauty_health

    },
    {

        category_name: "@clothing&shoes&jewelry@",
        type: "parent",
        child_category: clothing_shoes_jewelry

    },
    {

        category_name: "@sports&outdoor@",
        type: "parent",
        child_category: sport_outdoor

    },
    {

        category_name: "@automotive@",
        type: "parent",
        child_category: automotive

    },
    {

        category_name: "@office@",
        type: "parent",
        child_category: office

    },
    {

        category_name: "@music&instruments@",
        type: "parent",
        child_category: music_instruments

    }
]