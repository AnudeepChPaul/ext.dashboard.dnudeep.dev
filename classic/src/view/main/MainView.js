Ext.define('Dashboard.view.main.MainView', {
  extend: 'Ext.container.Container'
  , xtype: 'dash-main'

  , requires: [
    'Ext.plugin.Viewport'
    , 'Ext.window.MessageBox'
    , 'Ext.grid.plugin.CellEditing'
    , 'Ext.grid.plugin.RowEditing'
  ]

  , controller: 'main'
  , viewModel: {
    type: 'main'
  }

  , layout: {
    type: 'border'
  }

  , weight: '100%'
  , height: '100%'
  , defaults: {
    style: {}
  }

  , items: [
    {
      region: 'center'
      , xtype: 'dash-resumeview'
    }
  ]
})