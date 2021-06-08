### hs-mobile ui lib for react

```cmd
# only run dev mode for ui-lib
"dev:lib": "tsc --watch --project tsconfig.dev.json"

# build ui-lib to lib dir and types dir
"build:lib": "tsc --project tsconfig.pro.json"

# only run web to preview ui-lib 
"start:web": "cd ./web && npm run start"

# run ui-lib and dev mode ui-lib for programing
"start:dev-all": "concurrently \"npm run dev:lib\" \"npm run start:web\""
```
