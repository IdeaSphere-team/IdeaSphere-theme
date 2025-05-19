# IdeaSphere-theme
IdeaSphere 2.0 的默认主题。

## 开发主题

1. 克隆本仓库，或者Git打包下载本仓库源代码
2. 修改 project.json 主题信息文件
```json
{
  "name": "IdeaSphere", 
  "author": "IdeaSphere-team", 
  "website": "https://ideasphere.org", 
  "repository": "https://github.com/IdeaSphere-team/IdeaSphere-theme-template",  
  "logo": "static/img/logo.png"  
}
```

project.json 信息解释：
- **name**: 必须，你的主题包名
- **author**: 必须，主题开发者名称
- **website**: 可选，主题网站
- **repository**: 可选，主题开源仓库
- **logo**: 必须，默认位置可不写具体路径，若不是默认位置则需写完整路径

3. `injector.json` 和 `material.json` 文件是可选配置文件

- **injector.json**: 配置某些功能页面注入到其他模板
- **material.json**: 配置限定加载某些功能页面

4. 修改 `templates` 和 `static` 文件夹下的文件

文件夹解释：
- `templats`: 论坛html页面
- `static`: 论坛html引用的css样式、js脚本、图片等文件

5. 主题分发：将 `templates` 文件夹、 `static` 文件夹和 `project.json` 文件一起打包为 `zip`压缩包文件