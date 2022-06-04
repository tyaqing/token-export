![banner](https://user-images.githubusercontent.com/11229306/172000890-452ad2bf-4ba6-4f6c-a0d7-79b245a7df5d.png)

# Token Export / Token导出工具
将figma规范中的样式导出为tailwindcss、windicss配置,目前已经满足基本使用,其他高频功能正在开发中,也欢迎大家一起贡献

**TODO**

- [ ] 移动端rem支持
- [ ] screen支持
- [ ] IE10非变量支持
- [ ] tailwind配置适配

# 使用说明

> 项目内必须有token,否则配置无法被插件扫出,[怎么创建Token](https://github.com/tyaqing/token-export/blob/master/README.md#%E6%80%8E%E4%B9%88%E5%88%9B%E5%BB%BAtoken)

<img width="481" alt="image" src="https://user-images.githubusercontent.com/11229306/172010429-dedc79f4-8f9b-48da-83fd-9c3b89026636.png">

插件通过扫描项目内的library配置,获得颜色,字体等token,生成最后使用的config

## 颜色/字体/字号/阴影
这几种样式直接从token中拿

## 配置圆角

由于figma暂不支持将圆角加入token,插件是通过扫描获取,准确性不高,建议手动填写.
<img width="612" alt="image" src="https://user-images.githubusercontent.com/11229306/172011268-784b5240-d938-4ae4-8f25-ded0e0338621.png">


## 配置
<img width="621" alt="image" src="https://user-images.githubusercontent.com/11229306/172011293-cb37dc82-2862-4086-b0fb-1578db2dde2e.png">

### 间距配置
上图配置可以解释为,以4为基准,生成10个以4为备注的规范.
比如

|class|value|
|-|-|
|p-1|4px|
|p-2|8px|
|p-10|40px|

### token命名

一般建议使用`/`来命名,也可以使用`-`来分割不同类型的token

# 更新日志
## 1.0.0
支持基本功能

# QA
## 怎么创建token

<img width="532" alt="image" src="https://user-images.githubusercontent.com/11229306/172010489-89f39857-74c4-4470-95e5-363451db4ace.png">
<img width="508" alt="image" src="https://user-images.githubusercontent.com/11229306/172010556-a3e7da73-58d1-4186-ab9d-aabfe0155665.png">

<img width="427" alt="image" src="https://user-images.githubusercontent.com/11229306/172010815-ef3fabd9-2eff-4851-96b0-1bfed9b2af57.png">
此时,这个颜色已经被命名为orange/100
<img width="530" alt="image" src="https://user-images.githubusercontent.com/11229306/172010826-d66d15c2-04a0-4362-a1f1-84b68c47b42b.png">


