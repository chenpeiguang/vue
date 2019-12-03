
import { initMixin } from './init'
import { stateMixin } from './state'
// 渲染
import { renderMixin } from './render'
// 事件
import { eventsMixin } from './events'
// 生命周期
import { lifecycleMixin } from './lifecycle'
// 工具方法
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
