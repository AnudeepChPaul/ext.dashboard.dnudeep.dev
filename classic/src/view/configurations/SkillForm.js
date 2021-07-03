Ext.define('Dashboard.view.configurations.SkillForm', {
  extend: 'Ext.form.Panel'
  , xtype: 'dash-skill-form'

  , requires: [ 'Ext.ux.rating.Picker' ]

  , defaultType: 'textfield'
  , bodyPadding: '10 20'
  , buttonAlign: 'center'
  , reference: 'skillsForm'

  , defaults: {
    width: '100%'
    , labelWidth: 144
  }
  , items: [
    {
      fieldLabel: 'Skill Name'
      , name: 'name'
      , allowBlank: false
    }
    , {
      fieldLabel: 'URL'
      , name: 'url'
      , allowBlank: false
    }
    , {
      xtype: 'container'
      , layout: {
        type: 'hbox'
      }
      , items: [
        {
          xtype: 'label'
          , cls: 'dash-custom-label-cls'
          , text: 'Rating'
          , width: 149
          , height: 20
        }
        , {
          name: 'rating'
          , xtype: 'rating'
          , limit: 10
          , nameable: true
        }
      ]
    }
    , {
      xtype: 'checkbox'
      , fieldLabel: 'Visible'
      , name: 'visible'
      , inputValue: true
      , allowBlank: false
      , nameHolder: 'visible'
      , checked: true
    }
  ]
  , fbar: [
    {
      type: 'submit'
      , text: 'Create'
      // ui: 'green',
      // bind: {
      //     hidden: '{!!skillsList.selection}'
      // },
      , formBind: true
      , handler: 'addSkill'
    }
  ]
})