Ext.define('Dashboard.view.dashboard.Dashboard', {
  extend: 'Ext.container.Container'
  , xtype: 'dash-board'

  , requires: [ 'Ext.plugin.Viewport', 'Ext.window.MessageBox' ]

  , layout: {
    type: 'border'
  }

  , weight: '100%'
  , height: '100%'

  , defaults: {
    width: '50%'
  }

  , items: [
    {
      region: 'center'
      , xtype: 'dash-email'
      , height: 324
      , resizable: true
    }
    , {
      region: 'east'
      , xtype: 'dash-notifications'
      , height: 441
      , resizable: true
    }
  ]
})