Ext.define('Dashboard.model.Project', {
  extend: 'Dashboard.model.Base'

  , fields: [
    'projectName'
    , 'tagLine'
    , 'description'
    , 'role'
    , 'skills'
    , 'visible'
    , 'projectId'
  ]

  , idProperty: 'projectId'
  , identifier: {
    type: 'uuid'
  }

  , proxy: {
    type: 'rest'
    , api: {
      create: 'http://127.0.0.1:5000/resume/api/project_service/update'
      , read: 'http://127.0.0.1:5000/resume/api/project_service/get_projects'
      , update: 'http://127.0.0.1:5000/resume/api/project_service/update'
      , destroy: 'http://127.0.0.1:5000/resume/api/project_service/delete'
    }
    , reader: {
      type: 'json'
      , rootProperty: 'projects'
    }
    , writer: {
      type: 'json'
      , rootProperty: 'projects'
      , allowSingle: true
      , writeAllFields: true
    }
  }
})