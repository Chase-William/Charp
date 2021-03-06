import CommonComment from "../models/written/CommonComment"

export default function hasSummaryAndComment(comments: CommonComment): boolean {
  return typeof comments?.summary != undefined && comments?.summary != null
}

export function getOptionalSummary(comments: CommonComment) {
  // if (typeof comments == 'undefined' || comments === null) {
  //   return ''
  // }
  if (comments?.summary) {
    return comments.summary
  }
  return 'Summary not provided.'
}