/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-04 09:36:09
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-05 16:58:12
 */
module.exports = {
  extends: ['stylelint-config-standard'], //'stylelint-config-recommended', 
  plugins: ["stylelint-order"],
  rules: {
    "order/order": [
      "declarations",
      "custom-properties",
      "dollar-variables",
      "rules",
      "at-rules"
    ],
    "order/properties-order": [
      "position",
      "z-index",   
      "top",
      "bottom",
      "left",     
      "right",
      "float",
      "clear",
      "columns",
      "columns-width",
      "columns-count",
      "column-rule",
      "column-rule-width",
      "column-rule-style",
      "column-rule-color",
      "column-fill",
      "column-span",
      "column-gap",   
      "display",
      "grid",
      "grid-template-rows",
      "grid-template-columns",
      "grid-template-areas",
      "grid-auto-rows",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-column-gap",
      "grid-row-gap",
      "grid-template",
      "grid-template-rows",
      "grid-template-columns",
      "grid-template-areas",
      "grid-gap",
      "grid-row-gap",
      "grid-column-gap",
      "grid-area",
      "grid-row-start",
      "grid-row-end",
      "grid-column-start",
      "grid-column-end",
      "grid-column",
      "grid-column-start",
      "grid-column-end",
      "grid-row",
      "grid-row-start",
      "grid-row-end",   
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-flow",
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-content",
      "align-items",
      "align-self",
      "gap",
      "order",
      "table-layout",
      "empty-cells",
      "caption-side",
      "border-collapse",
      "border-spacing",
      "list-style",
      "list-style-type",
      "list-style-position",
      "list-style-image",
      "ruby-align",
      "ruby-merge",
      "ruby-position",
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",   
      "border",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-color",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "border-top",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-top",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-bottom",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "border-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-top-left-radius",
      "outline",
      "outline-width",
      "outline-color",
      "outline-style",
      "outline-offset",
      "overflow",
      "overflow-x",
      "overflow-y",
      "resize",
      "visibility",
      "font",
      "font-style",
      "font-variant",
      "font-weight",
      "font-stretch",
      "font-size",
      "font-family",
      "font-synthesis",
      "font-size-adjust",
      "font-kerning",    
      "line-height",
      "text-align",
      "text-align-last",
      "vertical-align",   
      "text-overflow",
      "text-justify",
      "text-transform",
      "text-indent",
      "text-emphasis",
      "text-emphasis-style",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-style",
      "text-decoration-line",
      "text-underline-position",
      "text-shadow",   
      "white-space",
      "overflow-wrap",
      "word-wrap",
      "word-break",
      "line-break",
      "hyphens",
      "letter-spacing",
      "word-spacing",
      "quotes",
      "tab-size",
      "orphans",
      "writing-mode",
      "text-combine-upright",
      "unicode-bidi",
      "text-orientation",
      "direction",
      "text-rendering",
      "font-feature-settings",
      "font-language-override",
      "image-rendering",
      "image-orientation",
      "image-resolution",
      "shape-image-threshold",
      "shape-outside",
      "shape-margin",
      "color",
      "background",
      "background-image",
      "background-position",
      "background-size",
      "background-repeat",
      "background-origin",
      "background-clip",
      "background-attachment",
      "background-color",
      "background-blend-mode",
      "isolation",
      "clip-path",
      "mask",
      "mask-image",
      "mask-mode",
      "mask-position",
      "mask-size",
      "mask-repeat",
      "mask-origin",
      "mask-clip",
      "mask-composite",
      "mask-type",
      "filter",
      "box-shadow",
      "opacity",
      "transform-style",
      "transform",
      "transform-box",
      "transform-origin",
      "perspective",
      "perspective-origin",
      "backface-visibility",
      "transition",
      "transition-property",
      "transition-duration",
      "transition-timing-function",
      "transition-delay",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",
      "animation-play-state",
      "scroll-behavior",
      "scroll-snap-type",
      "scroll-snap-destination",
      "scroll-snap-coordinate",
      "cursor",
      "touch-action",
      "caret-color",
      "ime-mode",
      "object-fit",
      "object-position",
      "content",
      "counter-reset",
      "counter-increment",
      "will-change",
      "pointer-events",
      "all",
      "page-break-before",
      "page-break-after",
      "page-break-inside",
      "widows"
    ],
    "no-empty-source": null, // 禁止空源
    "property-no-vendor-prefix": [true, {"ignoreProperties": ["background-clip"]}], // 禁止属性使用浏览器引擎前缀
    "number-leading-zero": "never", // 要求或禁止小于 1 的小数的前导 0
    "number-no-trailing-zeros": true, // 禁止数字中的拖尾 0
    "length-zero-no-unit": true, // 长度为0时，禁止使用单位
    "value-list-comma-space-after": "always", // 在值列表的逗号之后要求有一个空格或禁止有空白
    "declaration-colon-space-after": "always", // 在冒号之后要求有一个空格或禁止有空白
    "value-list-max-empty-lines": 0, // 限制值列表中相邻空行数量
    "shorthand-property-no-redundant-values": true, // 禁止在简写属性中使用冗余值 
    "declaration-block-no-duplicate-properties": true, // 在声明的块中中禁止出现重复的属性
    "declaration-block-no-redundant-longhand-properties": true, // 禁止使用可以缩写却不缩写的属性
    "declaration-block-semicolon-newline-after": "always", // 在声明块的分号之后要求有一个换行符或禁止有空白
    "block-closing-brace-newline-after": "always", // 在闭括号之后要求有一个换行符或禁止有空白
    "media-feature-colon-space-after": "always", // 在 media 特性中的冒号之后要求有一个空格或禁止有空白
    "media-feature-range-operator-space-after": "always", // 在 media 特性的范围操作符之后要求有一个空格或禁止有空白
    "at-rule-name-space-after": "always", // 要求在 at 规则之后有一个空格
    "indentation": 2, // 缩进
    "no-eol-whitespace": true, // 禁止行尾空白
    "string-no-newline": null, // 禁止在字符串中使用（非转义的）换行符
    "no-descending-specificity": null, // 禁止低优先级的选择器出现在高优先级的选择器之后
    "property-no-unknown": null, // 禁止使用未知属性 自定义属性(变量)
    "at-rule-no-unknown": null, // 禁止使用未知的 at 规则
    "selector-pseudo-element-no-unknown": null, // 禁止使用未知的伪元素  ::v-deep不识别
    "selector-pseudo-class-no-unknown": null, // 禁止使用未知的伪类选择器
    "property-case": null, // 禁止驼峰命名
    "color-hex-case": 'upper' // 指定十六进制颜色大小写
  }
}