/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  console.log(template.trim())
  // 解析：把模板解析成AST
  const ast = parse(template.trim(), options)
  console.log('ast => ', ast)
  if (options.optimize !== false) {
    // 优化： 1.标记静态节点 2.标记静态根节点
    optimize(ast, options)
  }
  console.log('ast1 => ', ast)
  // 生成： 生成代码字符串
  const code = generate(ast, options)
  console.log('code => ', code)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
