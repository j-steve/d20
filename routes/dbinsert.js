"use strict";
const router = require('express').Router();
const Promise = require('bluebird');
const DB = require('../bin/DB');
const DataCollection = require('../bin/DataCollection');
const Ability = require('../models/Ability');
const CharRace = require('../models/CharRace');
const CharClass = require('../models/CharClass');
const Background = require('../models/Background');

router.all('/', function(req, res, next) {
    /*const promises = DB.executeSql("DELETE FROM ability").then(function() {
        return Promise.mapSeries(Ability.ALL, function(ability, i) {
            const a = dbAbility.new({
                name:ability.name,
                id:ability.id,
                sort_order: i+1
            });
            console.log('insertin', a);
            return a.insert();
        });
    });*/ 
    const archtype = new DataCollection('archtype');
    Promise.mapSeries(CharRace.ALL, function(raceObj) {
        return archtype.getOne('name', raceObj.name).then(function(race) {
            return Promise.mapSeries(raceObj.subraces, function(subrace, i) {
                return archtype.new({
                    type: 'race',
                    parent_id: race.id,
                    name: subrace.name,
                    description: subrace.description,
                    image_url: subrace.image,
                    sort_order: i+1
                }).insert().then(function(row) {
                    console.log('inserted ' + row.id);
                });
            });
        });
    }).then(e => res.send('Done! inserted ' + e.length)).catch(next);
});

module.exports = router;