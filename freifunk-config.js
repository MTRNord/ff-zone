var convict = require('convict');
var path = require('path');

// Define a schema
var config = module.exports = convict({
    servers: [
        {
            id: {
                doc: "The Freifunk Network ID you want to attach to",
                format: String,
                default: "ff"
            },
            name: {
                doc: "The Freifunk Network Name you want to attach to",
                format: String,
                default: "Freifunk "
            },
            default: {
                doc: "Indicates whether clients connect to this Network by default. One server should have this set to true.",
                format: Boolean
            },
            password: {
                doc: "Optional, clients will be required to enter this password to connect to this server.",
                format: String
            },
            ignoreRouters: {
                doc: "Optional, list of Router names you want to be ignored (case-sensitive).",
                format: Array
            }
        }
    ]
});

// Load configuration
config.loadFile(path.resolve(__dirname,'freifunk-config.json'));

// Perform validation
config.validate({strict: true});
