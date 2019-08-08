from shutil import copy
from distutils.dir_util import copy_tree

destination = 'C:\inetpub\wwwroot'
files = ['index.html', 'sketch.js', 'token.js']
dirs = ['resources', 'lib']

for source in files:
    copy(source, destination + '\\' + source)

for source in dirs:
    copy_tree(source, destination + '\\' + source)