import MethodConfigModel from "../../models/config/members/MethodConfigModel"
import MethodModel from "../../models/members/MethodModel"
import { getOptionalSummary } from "../CommentsRenderer"
import divider, { renderVirtualAndStaticTags } from "../Util"

export function renderMethod(method: MethodModel, config: MethodConfigModel): string {
  return (
    divider() +
    renderMethodHeader(method, config) +
    divider() +
    getOptionalSummary(method.comments) +
    (!(method.parameters) || method.parameters.length == 0 ? '' : '\n') +
    renderMethodParams(method, config) + 
    renderMethodReturn(method, config)
  )
}

function renderMethodReturn(method: MethodModel, config: MethodConfigModel): string {
  return (
    (method.parameters ? divider() : '') +
    '- *@returns* ' +
    method.returnType
  )  
}

function renderMethodParams(method: MethodModel, config: MethodConfigModel): string {
  let content = ''
  method.parameters.forEach(param => {
    content += (
      '\n- *@param* ' +
      `${param.name} \`${param.type}\``
    )
  })
  return content
}

function renderMethodHeader(method: MethodModel, config: MethodConfigModel): string {
  return (
    `### ${method.name}` +
    renderVirtualAndStaticTags(method, config)
  )
}