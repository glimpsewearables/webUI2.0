import subprocess
from subprocess import check_output

output = subprocess.check_output(['hostname','-I'])
print output



