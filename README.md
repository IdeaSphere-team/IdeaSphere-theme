# IdeaSphere-theme
IdeaSphere 2.0 的默认主题。

## 开发主题

1. 克隆本仓库，或者Git打包下载本仓库源代码
2. 修改 project.json信息
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

3. 修改