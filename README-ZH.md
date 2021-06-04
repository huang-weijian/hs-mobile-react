### hs移动端UI库 react版

```cmd
# 只运行持续监控模式的ui-lib开发模式
"dev:lib": "tsc --watch --project tsconfig.dev.json"

# 构建正式ui-lib
"build:lib": "tsc --project tsconfig.pro.json"

# 运行web（内含ui-lib所有组件预览与使用）
"start:web": "cd ./web && npm run start"

# 运行开发模式，运行持续监控与web预览
"start:dev-all": "concurrently \"npm run dev:lib\" \"npm run start:web\""
```
