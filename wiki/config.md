# Configuration Explanation

A configuration file allows you to override the default rendering settings for Charp. Currently, there are two default rendering options for Charp.

| Name | Description |
| ---- | ----------- |
| `external` | Makes docs helpful to those leveraging the library as a dependency |
| `internal` | Makes docs helpful to those directly developing the library itself |

Depending the *perspective* you choose, you will be overriding that default config.

> If no perspective is choosen, `external` is used as the default default *(you will be overriding the external perspective)*.

### Configuraion Example

#### Example of the `class` and `property` configurations being overridden.

```json
{
  "perspective": "external",
  "type": {
    "class": {
      "showIfInternalProtected": true,
      "denoteIfStatic": false
    }
  },
  "member": {
    "property": {
      "showIfPublic": false,
      "showIfInternalProtected": true,
      "denoteIfStatic": false,
      "denoteIfSetonly": false
    }
  }
}
```

#### Example of the `enum` configuration being overridden.

```json
{
  "perspective": "internal",
  "type": {
    "enum": {
      "showIfInternal": false
    }
  }
}
```

#### Example of the `field` configuration being overridden *(the default config is "external" here)*. 

```json
{
  "member": {
    "field": {
      "denoteIfConst": false
    }
  }
}
```

### Full Config Structure

- <a href="#perspective">*perspective*</a>, `string` either "<a href="#internal">*internal*</a>" or "<a href="#external">*external*</a>"
- <a href="#type">*type*</a>
  - <a href="#class">*class*</a>
    - <a href="#showIfPublic">*showIfPublic*</a>, `boolean`
    - <a href="#showIfProtected">*showIfProtected*</a>, `boolean`
    - <a href="#showIfInternal">*showIfInternal*</a>, `boolean`
    - <a href="#showIfInternalProtected">*showIfInternalProtected*</a>, `boolean`
    - <a href="#showIfPrivate">*showIfPrivate*</a>, `boolean`
    - <a href="#denoteIfStatic">*denoteIfStatic*</a>, `boolean`
    - <a href="#denoteIfVirtual">*denoteIfVirtual*</a>, `boolean`
    - <a href="#denoteIfAbstract">*denoteIfAbstract*</a>, `boolean`
  - <a href="#interface">*interface*</a>
    - <a href="#showIfPublic">*showIfPublic*</a>, `boolean`
    - <a href="#showIfProtected">*showIfProtected*</a>, `boolean`
    - <a href="#showIfInternal">*showIfInternal*</a>, `boolean`
    - <a href="#showIfInternalProtected">*showIfInternalProtected*</a>, `boolean`
    - <a href="#showIfPrivate">*showIfPrivate*</a>, `boolean`
  - <a href="#struct">*struct*</a>
    - <a href="#showIfPublic">*showIfPublic*</a>, `boolean`
    - <a href="#showIfProtected">*showIfProtected*</a>, `boolean`
    - <a href="#showIfInternal">*showIfInternal*</a>, `boolean`
    - <a href="#showIfInternalProtected">*showIfInternalProtected*</a>, `boolean`
    - <a href="#showIfPrivate">*showIfPrivate*</a>, `boolean`
  - <a href="#enum">*enum*</a>
    - <a href="#showIfPublic">*showIfPublic*</a>, `boolean`
    - <a href="#showIfProtected">*showIfProtected*</a>, `boolean`
    - <a href="#showIfInternal">*showIfInternal*</a>, `boolean`
    - <a href="#showIfInternalProtected">*showIfInternalProtected*</a>, `boolean`
    - <a href="#showIfPrivate">*showIfPrivate*</a>, `boolean`
  - <a href="#delegate">*delegate*</a>
    - <a href="#showIfPublic">*showIfPublic*</a>, `boolean`
    - <a href="#showIfProtected">*showIfProtected*</a>, `boolean`
    - <a href="#showIfInternal">*showIfInternal*</a>, `boolean`
    - <a href="#showIfInternalProtected">*showIfInternalProtected*</a>, `boolean`
    - <a href="#showIfPrivate">*showIfPrivate*</a>, `boolean`
- <a href="#member">*member*</a>
  - <a href="#property">*property*</a>
    - <a href="#showIfPublic">*showIfPublic*</a>, `boolean`
    - <a href="#showIfProtected">*showIfProtected*</a>, `boolean`
    - <a href="#showIfInternal">*showIfInternal*</a>, `boolean`
    - <a href="#showIfInternalProtected">*showIfInternalProtected*</a>, `boolean`
    - <a href="#showIfPrivate">*showIfPrivate*</a>, `boolean`
    - <a href="#denoteIfStatic">*denoteIfStatic*</a>, `boolean`
    - <a href="#denoteIfVirtual">*denoteIfVirtual*</a>, `boolean`
    - <a href="#denoteIfAbstract">*denoteIfAbstract*</a>, `boolean`
    - <a href="#denoteIfHasGetter">*denoteIfHasGetter*</a> `boolean`
    - <a href="#denoteIfHasSetter">*denoteIfHasSetter*</a> `boolean`
    - <a href="#denoteIfGetPublic">*denoteIfGetPublic*</a> `boolean`
    - <a href="#denoteIfGetProtected">*denoteIfGetProtected*</a> `boolean`
    - <a href="#denoteIfGetInternal">*denoteIfGetInternal*</a> `boolean`
    - <a href="#denoteIfGetInternalProtected">*denoteIfGetInternalProtected*</a> `boolean`
    - <a href="#denoteIfGetPrivate">*denoteIfGetPrivate*</a> `boolean`
    - <a href="#denoteIfSetPublic">*denoteIfSetPublic*</a> `boolean`
    - <a href="#denoteIfSetProtected">*denoteIfSetProtected*</a> `boolean`
    - <a href="#denoteIfSetInternal">*denoteIfSetInternal*</a> `boolean`
    - <a href="#denoteIfSetInternalProtected">*denoteIfSetInternalProtected*</a> `boolean`
    - <a href="#denoteIfSetPrivate">*denoteIfSetPrivate*</a> `boolean`
  - <a href="#field">*field*</a>
    - <a href="#showIfPublic">*showIfPublic*</a>, `boolean`
    - <a href="#showIfProtected">*showIfProtected*</a>, `boolean`
    - <a href="#showIfInternal">*showIfInternal*</a>, `boolean`
    - <a href="#showIfInternalProtected">*showIfInternalProtected*</a>, `boolean`
    - <a href="#showIfPrivate">*showIfPrivate*</a>, `boolean`
    - <a href="#denoteIfStatic">*denoteIfStatic*</a>, `boolean`
    - <a href="#denoteIfConst">*denoteIfConst*</a>, `boolean`
    - <a href="#denoteIfReadonlyField">*denoteIfReadonly*</a>, `boolean`
  - <a href="#method">*method*</a>
    - <a href="#showIfPublic">*showIfPublic*</a>, `boolean`
    - <a href="#showIfProtected">*showIfProtected*</a>, `boolean`
    - <a href="#showIfInternal">*showIfInternal*</a>, `boolean`
    - <a href="#showIfInternalProtected">*showIfInternalProtected*</a>, `boolean`
    - <a href="#showIfPrivate">*showIfPrivate*</a>, `boolean`
    - <a href="#denoteIfStatic">*denoteIfStatic*</a>, `boolean`
    - <a href="#denoteIfVirtual">*denoteIfVirtual*</a>, `boolean`
    - <a href="#denoteIfAbstract">*denoteIfAbstract*</a>, `boolean`
  - <a href="#event">*event*</a>
    - <a href="#showIfPublic">*showIfPublic*</a>, `boolean`
    - <a href="#showIfProtected">*showIfProtected*</a>, `boolean`
    - <a href="#showIfInternal">*showIfInternal*</a>, `boolean`
    - <a href="#showIfInternalProtected">*showIfInternalProtected*</a>, `boolean`
    - <a href="#showIfPrivate">*showIfPrivate*</a>, `boolean`
    - <a href="#denoteIfStatic">*denoteIfStatic*</a>, `boolean`
    - <a href="#denoteIfVirtual">*denoteIfVirtual*</a>, `boolean`
    - <a href="#denoteIfAbstract">*denoteIfAbstract*</a>, `boolean`

### Config Definitions

The only required configuration is *perspective* as everything else is an optional override to the *perspective* value used.

- <span id="perspective"></span>**perspective** *(required)*, Easily set doc generation style so that it may cater to a specific audience
  - <span id="internal"></span>`internal`, Helpful to those directly developing the lib itself
  - <span id="external"></span>`external`, Helpful to those leveraging the lib as a dependency
  
- <span id="type"></span>**type**, Implementing the following allows overriding of it's defaults
  - <span id="class"></span>`class`
  - <span id="interface"></span>`interface`
  - <span id="struct"></span>`struct`
  - <span id="enum"></span>`enum`
  - <span id="delegate"></span>`delegate`

- <span id="member"></span>**member**, Implementing the following allows overriding of it's defaults
  - <span id="property"></span>`property`
    - <span id="denoteIfReadonlyProperty"></span>*denoteIfReadonly*, display the `readonly` tag when setter isn't available
    - <span id="denoteIfSetonlyProperty"></span>*denoteIfSetonly*, display the `setonly` tag when getter isn't available
    - <span id="denoteIfHasGetter"></span>*denoteIfHasGetter*, display the `get` tag when getter is available
    - <span id="denoteIfHasSetter"></span>*denoteIfHasSetter*, display the `set` tag when getter is available
    - <span id="denoteIfGetPublic"></span>*denoteIfGetPublic*, display the `public` when getter is available & public
    - <span id="denoteIfGetProtected"></span>*denoteIfGetProtected*, display the `protected` when getter is available & protected
    - <span id="denoteIfGetInternal"></span>*denoteIfGetInternal*, display the `internal` when getter is available & internal
    - <span id="denoteIfGetInternalProtected"></span>*denoteIfGetInternalProtected*, display the `internal protected` when getter is available & internal protected
    - <span id="denoteIfGetPrivate"></span>*denoteIfGetPrivate*, display the `private` when getter is available & private
    - <span id="denoteIfSetPublic"></span>*denoteIfSetPublic*, display the `public` when setter is available & public
    - <span id="denoteIfSetProtected"></span>*denoteIfSetProtected*, display the `protected` when setter is available & protected
    - <span id="denoteIfSetInternal"></span>*denoteIfSetInternal*, display the `internal` when setter is available & internal
    - <span id="denoteIfSetInternalProtected"></span>*denoteIfSetInternalProtected*, display the `internal protected` when setter is available & internal protected
    - <span id="denoteIfSetPrivate"></span>*denoteIfSetPrivate*, display the `private` when setter is available & private
  - <span id="field"></span>`field`
    - <span id="denoteIfConst"></span>*denoteIfConst*, display the `const` tag when constant
    - <span id="denoteIfReadonlyField"></span>*denoteIfReadonly*, display the `readonly` tag when readonly
  - <span id="method"></span>`method`
  - <span id="event"></span>`event`

##### Accessibility Modifiers

- <span id="showIfPublic"></span>*showIfPublic*, show instances that are public
- <span id="showIfProtected"></span>*showIfProtected*, show instances that are protected
- <span id="showIfInternal"></span>*showIfInternal*, show instances that are internal
- <span id="showIfInternalProtected"></span>*showIfInternalProtected*, show instances that are internal protected
- <span id="showIfPrivate"></span>*showIfPrivate*, show instances that are private

##### Polymorphic Modifiers

- <span id="denoteIfVirtual"></span>*denoteIfVirtual*, display the `virtual` tag when virtual
- <span id="denoteIfAbstract"></span>*denoteIfAbstract*, display the `abstract` tag when abstract

##### Other

- <span id="denoteIfStatic"></span>*denoteIfStatic*, display the `static` tag when static