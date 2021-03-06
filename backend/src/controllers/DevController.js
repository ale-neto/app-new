const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray =  require('../utils/parseStringAsArray');
//index, show, store, update, destroy
module.exports = {
    async index (req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },

    async store (req, res)  {
        const {github_username, techs, latitude, longitude} = req.body;
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        let dev = await Dev.findOne({github_username});
        if(!dev){
            let {name = login, avatar_url, bio} =  apiResponse.data;
            const techsArray = parseStringAsArray(techs);
            const location = { 
                type: 'Point',
                coordinates: [latitude, longitude],
            };
            const dev  =  await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs : techsArray,
                location,
            })
        }
        return res.json(dev);
    }
};