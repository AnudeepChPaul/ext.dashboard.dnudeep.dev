Ext.define('Dashboard.view.sidemenu.Menu', {
  extend: 'Ext.panel.Panel'
  , xtype: 'dash-sidemenu'

  , title: 'Menu'

  , padding: 0
  , height: 'auto'
  , width: 250
  , margin: '0 1 0 0'

  , layout: {
    type: 'vbox'
    , pack: 'start'
    , align: 'center'
  }
  , collapsible: true
  , items: [
    {
      xtype: 'segmentedbutton'
      , layout: {
        type: 'vbox'
      }
      , defaults: {
        margin: '8 4 0 4'
        , width: 220
        , scale: 'medium'
        , enableToggle: true
        , minHeight: 49
        , scale: 'large'
      }
      , bind: {
        value: '{selectedMenu}'
      }
      , items: [
        {
          text: 'Dashboard'
          , iconCls: 'fa fa-home'
          , value: 'dashboard'
        }
        , {
          text: 'Configurations'
          , iconCls: 'fa fa-cogs'
          , value: 'configurations'
        }
        , {
          text: 'Emails'
          , value: 'mails'
          , hidden: true
        }
        , {
          text: 'Notifications'
          , value: 'notifications'
          , hidden: true
        }
        , {
          text: 'Tasks'
          , iconCls: 'fa fa-tasks'
          , value: 'tasks'
        }
      ]
    }
  ]
})