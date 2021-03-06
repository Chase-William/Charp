import { jsonMember, jsonObject } from "typedjson";
import ConfigModel, { check } from "../ConfigModel";
import SingletonConfigurable from "../interfaces/SingletonConfigurable";

@jsonObject
export default class MemberConfigModel extends ConfigModel implements SingletonConfigurable {
  @jsonMember(Boolean)
  denoteIfStatic: boolean

  apply(config: MemberConfigModel): void {
    super.apply(config)
    if (check(this.denoteIfStatic, config.denoteIfStatic))
      this.denoteIfStatic = config.denoteIfStatic
  }
}