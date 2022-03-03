/*
 *     Router
 * ************** */

// Import des modules
const
    express = require('express'),
    router = express.Router(),
    
    // Controllers
    KappController = require('./controller');

// info
router.route('/')
    .get(KappController.info)

/* ************** *
 *  / Router
 */

module.exports = router 