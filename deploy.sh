set -e
###
 # @Author: wohool
 # @Date: 2023-04-03 17:39:52
 # @LastEditors: wohool
 # @LastEditTime: 2023-04-03 19:17:29
 # @FilePath: \webgis-demo\deploy.sh
 # @Description: 自动化部署GitHub Pages
 # 
 # Copyright (c) 2023 by sanMao147----charlielin007@outlook.com, All Rights Reserved. 
### 

yarn build

cd dist

git add -A
git commit -m 'deploy'
# git push -u origin main
git subtree push --prefix dist origin gh-pages

cd -