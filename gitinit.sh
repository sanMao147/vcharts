set -e

git init
git add .
git commit -m "first commit"

git remote add origin https://github.com/sanMao147/vcharts.git
git push -u origin main
cd -