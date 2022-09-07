# tambahkan perubahan ke Git
git add -A

# Buat sebuah commit baru
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push atau upload ke Github
git push origin master
