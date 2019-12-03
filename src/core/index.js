// vue的一些核心方法
import Vue from './instance/index'
// 全局API
import { initGlobalAPI } from './global-api/index'
// 获取一个布尔值，判断是不是ssr
import { isServerRendering } from 'core/util/env'
// 
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

// 初始化全局API
initGlobalAPI(Vue)

// 定义$isServer属性，挂载到vue原型
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

// 定义$ssrContex属性，挂载到vue原型
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
