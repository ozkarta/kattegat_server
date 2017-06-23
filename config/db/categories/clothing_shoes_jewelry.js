let women_clothing = require("./clothing_shoes_jewelry/women/clothing");
let women_shoes = require("./clothing_shoes_jewelry/women/shoes");

let men_clothing = require("./clothing_shoes_jewelry/men/clothing");
let men_shoes = require("./clothing_shoes_jewelry/men/shoes");

let girl_clothing = require("./clothing_shoes_jewelry/girls/clothing");
let girl_shoes = require("./clothing_shoes_jewelry/girls/shoes");


let boy_clothing = require("./clothing_shoes_jewelry/boys/clothing");
let boy_shoes = require("./clothing_shoes_jewelry/boys/shoes");
 
let baby_girl_clothing = require("./clothing_shoes_jewelry/baby/baby_girls/clothing");
let baby_girl_shoes = require("./clothing_shoes_jewelry/baby/baby_girls/shoes");


let baby_boy_clothing = require("./clothing_shoes_jewelry/baby/baby_boys/clothing");
let baby_boy_shoes = require("./clothing_shoes_jewelry/baby/baby_boys/shoes");
 


module.exports = [
    {
        category_name: "@luggage&travel_gear@",
        type: "child",
        child_category: [{
            category_name: "@backpacks@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@briefcases@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@gym_bags@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@laptop_bags@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@luggage@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@messenger_bags@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@travel_daffels@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@umbrellas@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@waist_packs@",
            type: "child",
            child_category: []
        },]
    },
    {
        category_name: "@women@",
        type: "child",
        child_category: [{
            category_name: "@clothing@",
            type: "child",
            child_category: women_clothing
        },
        {
            category_name: "@shoes@",
            type: "child",
            child_category: women_shoes
        },
        {
            category_name: "@jewelry@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@watches@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@handbags&wallets@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@accessories@",
            type: "child",
            child_category: []
        }]
    },
    {
        category_name: "@men@",
        type: "child",
        child_category: [{
            category_name: "@clothing@",
            type: "child",
            child_category: men_clothing
        },
        {
            category_name: "@shoes@",
            type: "child",
            child_category: men_shoes
        },
        {
            category_name: "@jewelry@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@watches@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@wallets@",
            type: "child",
            child_category: []
        },
        {
            category_name: "@accessories@",
            type: "child",
            child_category: []
        }]
    },
    // {
    //     category_name: "@girl@",
    //     type: "child",
    //     child_category: [{
    //         category_name: "@clothing@",
    //         type: "child",
    //         child_category: girl_clothing
    //     },
    //     {
    //         category_name: "@shoes@",
    //         type: "child",
    //         child_category: girl_shoes
    //     },
    //     {
    //         category_name: "@jewelry@",
    //         type: "child",
    //         child_category: []
    //     },
    //     {
    //         category_name: "@watches@",
    //         type: "child",
    //         child_category: []
    //     },
    //     {
    //         category_name: "@handbags&wallets@",
    //         type: "child",
    //         child_category: []
    //     },
    //     {
    //         category_name: "@accessories@",
    //         type: "child",
    //         child_category: []
    //     }]
    // },
    // {
    //     category_name: "@boy@",
    //     type: "child",
    //     child_category: [{
    //         category_name: "@clothing@",
    //         type: "child",
    //         child_category: boy_clothing
    //     },
    //     {
    //         category_name: "@shoes@",
    //         type: "child",
    //         child_category: boy_shoes
    //     },
    //     {
    //         category_name: "@jewelry@",
    //         type: "child",
    //         child_category: []
    //     },
    //     {
    //         category_name: "@watches@",
    //         type: "child",
    //         child_category: []
    //     },
    //     {
    //         category_name: "@handbags&wallets@",
    //         type: "child",
    //         child_category: []
    //     },
    //     {
    //         category_name: "@accessories@",
    //         type: "child",
    //         child_category: []
    //     }]
    // },
    {
        category_name: "@baby@",
        type: "child",
        child_category: [{
            category_name: "@baby_girls@",
            type: "child",
            child_category: [{
                category_name: "@clothing@",
                type: "child",
                child_category: baby_girl_clothing
            },
            {
                category_name: "@shoes@",
                type: "child",
                child_category: baby_girl_shoes
            },
            {
                category_name: "@accessories@",
                type: "child",
                child_category: []
            }]
        },
        {
            category_name: "@baby_boys@",
            type: "child",
            child_category: [{
                category_name: "@clothing@",
                type: "child",
                child_category: baby_boy_clothing
            },
            {
                category_name: "@shoes@",
                type: "child",
                child_category: baby_boy_shoes
            },
            {
                category_name: "@accessories@",
                type: "child",
                child_category: []
            }]
        }]
    }
]