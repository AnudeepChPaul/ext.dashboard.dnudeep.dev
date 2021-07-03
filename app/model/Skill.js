Ext.define('Dashboard.model.Skill', {
  extend: 'Dashboard.model.Base'

  , fields: [
    'name'
    , 'rating'
    , 'visible'
    , 'techId'
    , 'url'
  ]

  , idProperty: 'techId'
  , identifier: {
    type: 'uuid'
  }

  , proxy: {
    type: 'rest'
    , api: {
      create: 'http://127.0.0.1:5000/resume/api/technology_service/update'
      , read: 'http://127.0.0.1:5000/resume/api/technology_service/get_technologies'
      , update: 'http://127.0.0.1:5000/resume/api/technology_service/update'
      , destroy: 'http://127.0.0.1:5000/resume/api/technology_service/delete'
    }
    , reader: {
      type: 'json'
      , rootProperty: 'technologies'
    }
    , writer: {
      type: 'json'
      , rootProperty: 'technologies'
      , allowSingle: true
      , writeAllFields: true
    }
  }
})