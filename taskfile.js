const notifier = require('node-notifier')

module.exports = {
    * default(task) {
        yield task.start('build')
    },
    * copy(task) {
        yield task.source('src/**/*').target('lib/', {mode: 0o777})
    },
    * lamborHelpers(task) {
        yield task.parallel([
            'build'
        ])
        notify('Compiled files')
    },
    * build(task) {
        yield task
            .source('src/**/*.+(js)')
            .babel()
            .target('lib/', {mode: 0o777})
    }
}

function notify(msg) {
    return notifier.notify({
      title: '▲ lambor-utils.js',
      message: msg,
      icon: false,
    })
  }