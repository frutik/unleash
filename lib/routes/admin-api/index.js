'use strict';

const Controller = require('../controller');
const FeatureController = require('./feature.js');
const ArchiveController = require('./archive.js');
const EventController = require('./event.js');
const StrategyController = require('./strategy');
const MetricsController = require('./metrics');
const UserController = require('./user');
const apiDef = require('./api-def.json');

class AdminApi extends Controller {
    constructor(config) {
        super();

        const stores = config.stores;

        this.app.get('/', this.index);
        this.app.use('/features', new FeatureController(stores).router);
        this.app.use('/archive', new ArchiveController(stores).router);
        this.app.use('/strategies', new StrategyController(stores).router);
        this.app.use('/events', new EventController(stores).router);
        this.app.use('/metrics', new MetricsController(stores).router);
        this.app.use('/user', new UserController().router);
    }

    index(req, res) {
        res.json(apiDef);
    }
}

module.exports = AdminApi;
