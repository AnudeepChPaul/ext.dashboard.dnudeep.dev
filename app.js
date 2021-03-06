/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Dashboard.Application',

    name: 'Dashboard',

    requires: [
        'Dashboard.*'
    ],

    mainView: 'Dashboard.view.main.MainView'
});