cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.hipmob.android.phonegap.plugin/www/hipmob.js",
        "id": "com.hipmob.android.phonegap.plugin.Hipmob",
        "pluginId": "com.hipmob.android.phonegap.plugin",
        "clobbers": [
            "window.plugins.Hipmob"
        ]
    },
    {
        "file": "plugins/com.hipmob.ios.phonegap.plugin/www/hipmob.js",
        "id": "com.hipmob.ios.phonegap.plugin.Hipmob",
        "pluginId": "com.hipmob.ios.phonegap.plugin",
        "clobbers": [
            "window.plugins.Hipmob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.hipmob.android.phonegap.plugin": "1.0.0",
    "com.hipmob.ios.phonegap.plugin": "1.0.0"
}
// BOTTOM OF METADATA
});