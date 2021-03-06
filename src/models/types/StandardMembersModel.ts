import { jsonArrayMember, jsonObject } from "typedjson";
import Nestable, { readChildrenInternal } from '../interfaces/Nestable';
import EventModel from "../members/EventModel";
import FieldModel from "../members/FieldModel";
import MethodModel from "../members/MethodModel";
import PropertyModel from "../members/PropertyModel";
import Model from "../Model";
import CommonComment from "../written/CommonComment";
import TypeModel from "./TypeModel";
import Renderable from "../interfaces/Renderable";
import RenderManager from "../../renderer/RenderManager";

/**
 * Represents any <type> that can contain the following:
 * - Fields
 * - Properties
 * - Methods
 * - Events
 * - Children Types
 */
@jsonObject()
export default class StandardMembersModel extends TypeModel<CommonComment> implements Nestable {
  childNodes = new Map<string, (Model | Nestable) & Renderable>()
  
  @jsonArrayMember(PropertyModel, { name: 'Properties' })
  properties: PropertyModel[];
  @jsonArrayMember(FieldModel, { name: 'Fields' })
  fields: FieldModel[];
  @jsonArrayMember(MethodModel, { name: 'Methods' })
  methods: MethodModel[];
  @jsonArrayMember(EventModel, { name: 'Events' })
  events: EventModel[];

  readChildren(extraPathing: string, namespaces: string[], model: Model & Nestable): void {
    readChildrenInternal(extraPathing, namespaces, model)
  }

  renderChildren(renderManager: RenderManager) {
    this.childNodes.forEach((model) => {
      (model as Renderable).render(renderManager)
    })
  }
}