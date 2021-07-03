/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Dashboard.view.configurations.ConfigController', {
  extend: 'Ext.app.ViewController'

  , alias: 'controller.dash-config-controller'

  , init: function () {
    console.log('init configcontrol')
  }

  , addSkill: function () {
    const skillConfig = this.view.down('[itemId=skillConfig]')
      , form = skillConfig.down('form').getForm()
      , rating = skillConfig.down('[name=rating]')

    this.getViewModel().getStore('skills').add({
      ...form.getValues()
      , rating: rating.getValue()
    })

    rating.setValue(null)
    form.reset()
  }

  , addProject: function () {
    const projectConfig = this.view.down('[itemId=projectConfig]')
      , form = projectConfig.down('form').getForm()

    this.getViewModel().getStore('projects').add({
      ...form.getValues()
    })

    form.reset()
    this.getViewModel().getStore('projects').reload()
  }

  , saveIntroduction: function () {
    const introductionConfig = this.view.down('[itemId=introductionConfig]')
    Ext.GlobalEvents.fireEvent('updatestatus', {
      text: 'Saving...'
    })

    introductionConfig.getForm().submit()
  }

  , onProjectItemClick: function (scope, record, el, index, event) {
    if (event.target.name !== 'deleteButton')
    {return}

    Ext.Msg.show({
      title: 'Warning (Non Recoverable Option)'
      , message: 'Are you sure to DELETE?'
      , buttons: Ext.Msg.YESNO
      , icon: Ext.Msg.WARNING
      , fn: function (option) {
        if (option === 'yes') {
          record.store.remove(record)
          record = null
        }
      }
    })
  }

  , openNewExperienceWindow: function () {
    const configWindow = Ext.create({
      xtype: 'window'
      , bind: {
        title: '{!experiencesList.selection ? "New": "Update"} Project'
      }
      , closeAction: 'method-destroy'
      , floating: true
      , width: 600
      , height: 355
      , modal: true
      , items: [
        {
          xtype: 'dash-config-experienceform'
        }
      ]
    })

    configWindow.down('dash-config-experienceform').reset()
    this.lookupReference('experiencesList').setSelection(null)

    this.view.add(configWindow).showAt()
  }

  , openNewExperienceWindowWithValues: function (tableView, rIndex, cIndex, btn, evt, data) {
    const configWindow = Ext.create({
      xtype: 'window'
      , bind: {
        title: '{!experiencesList.selection ? "New": "Update"} Project'
      }
      , closeAction: 'method-destroy'
      , floating: true
      , height: 355
      , width: 600
      , modal: true
      , items: [
        {
          xtype: 'dash-config-experienceform'
        }
      ]
    })
    this.lookupReference('experiencesList').setSelection(data)
    this.view.add(configWindow).showAt()
  }

  , openNewProjectWindow: function () {
    const projectWindow = Ext.create({
      xtype: 'window'
      , modal: true
      , closeAction: 'method-destroy'
      , title: 'New Project'
      , floating: true
      , height: 505
      , width: 600
      , items: [
        {
          xtype: 'dash-project-form'
        }
      ]
    })
    this.view.add(projectWindow).showAt()
  }

  , onRemoveSkill: function (gridView, rIndex) {
    const me = this
    Ext.Msg.show({
      title: 'Warning (Non Recoverable Option)'
      , message: 'Are you sure to DELETE?'
      , buttons: Ext.Msg.YESNO
      , icon: Ext.Msg.WARNING
      , fn: function (option) {
        if (option === 'yes') {
          me.getViewModel().getStore('skills').removeAt(rIndex)
        }
      }
    })

  }

  , onClearSkillSelection: function () {
    this.lookupReference('skillsList').setSelection(null)
    this.lookupReference('skillsForm').getForm().reset()
  }

  , onClearProjectSelection: function () {
    this.lookupReference('projectsList').setSelection(null)
    this.lookupReference('projectsForm').getForm().reset()
  }

  , onBeforeEditEachSkill: function (rowEditor, cellCtx) {
    const widget = this.lookupReference('skillsList').down('widgetcolumn')
      , record = cellCtx.store.getAt(cellCtx.rowIdx)

    widget.getEditor().setValue(record.get('rating'))
  }



  , submitExperience() {
    const form = this.view.down('dash-config-experienceform')

    if (!form.form.isValid()) {
      return
    }

    const formData = form.getValues()
      , vm = this.getViewModel()
      , finalData = {
        companyName: formData.companyName
        , designation: formData.designation
        , duration: formData.duration
        , visible: formData.visible
        , projects: []
      }

    Ext.each(vm.getStore('projects').getData().items, function (project) {
      finalData.projects.push(project.getData())
    }, this)

    console.log(finalData)
    vm.getStore('experiences').add(finalData)
  }
})