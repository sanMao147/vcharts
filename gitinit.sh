set -e
###
 # @Author: wohool
 # @Date: 2023-04-03 19:11:34
 # @LastEditors: wohool
 # @LastEditTime: 2023-04-03 19:15:02
 # @FilePath: \webgis-demo\gitinit.sh
 # @Description: 项目初始化
 # 
 # Copyright (c) 2023 by sanMao147----charlielin007@outlook.com, All Rights Reserved. 
### 
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sanMao147/webgis-demo.git
git push -u origin main
cd -