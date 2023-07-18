#!/bin/

start_time=$(date +%s)
function title {
  echo 
  echo "###############################################################################"
  echo "## $1"
  echo "###############################################################################" 
  echo 
}

# 检查是否存在 test 文件夹
if [ ! -d "src/test" ]; then
  read -p "📁[test 文件夹不存在，是否创建？(y/n)] " create_test_folder
  if [ "$create_test_folder" == "y" ]; then
    title "👉[正在创建 test 文件夹...########]"
    mkdir -p src/test
    echo "👉[test 文件夹创建成功👏]"
  else
    echo "❎[脚本已退出]"
    echo '❎中途退出，请重新运行 "bash package.sh"'
    exit
  fi
fi

if [ -d "colinbar" ]; then
  # 拷贝 colinbar 文件夹下的 package.json 到 src 目录
  title "👉[正在备份本地文件「package.json」...########]"
  cp colinbar/package.json  src/test/
  echo "👉[备份成功👏]"

  title "👉[正在备份本地文件「README.md」...########]"
  cp  colinbar/README.md src/test
  echo "👉[备份成功👏]"
fi
title "👉[还未拥有打包文件，继续执行脚本...#######]"

# 运行打包命令
title "👉[打包过程中...########]"
npm run package 
echo "👉[打包成功👏]"

# 将移动到 src 目录下的 package.json 重新移动并覆盖到 colinbar 下
title "👉[覆盖远端文件「package.json」...########]"
cp src/test/package.json colinbar/
echo "👉[覆盖成功👏]"

title "👉[覆盖远端文件「README.md」...########]"
cp src/test/README.md colinbar/
echo "👉[覆盖成功👏]"

read -p "是否要npm发布？(y/n): " publish_option

if [ "$publish_option" == "y" ]; then
  title "👉正在发布..."
  cd colinbar
  read -p "需要小、中、大版本的迭代？(1/2/3): " version
    if [ "$version" == 1 ]; then
      npm version patch
      echo '已迭代，正在发布...#######'
    elif [ "$version" == 2 ]; then
      npm version minor
      echo '已迭代，正在发布...#######'
    elif [ "$version" == 3 ]; then
      npm version major
      echo '已迭代，正在发布...#######'
    fi
  npm publish
  echo "👏发布完成！"
elif [ "$publish_option" == "n" ]; then
  echo "❎发布已取消。"
else
  echo "❎无效的选项,发布已取消。"
fi

end_time=$(date +%s)
execution_time=$((end_time - start_time))
echo "🎉[全部执行完毕！请登录网址：'https://www.npmjs.com/package/colinbar',查看包信息是否有误。]"
echo "🚀🚀🚀[此次自动化上传脚本执行时间共计 $execution_time 秒]"