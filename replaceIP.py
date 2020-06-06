# Python3 code to display hostname and
# IP address

import subprocess
from subprocess import check_output


# Function to display hostname and
# IP address
def get_Host_name_IP():
    try:
        check = subprocess.check_output(['hostname','-I'])
        middle = check.split(" ")
	host_ip = middle[0]
	print(host_ip)
        return host_ip
    except:
        print("Unable to get Hostname and IP")

def get_prev_Host():
    file='./previousHost.txt'
    with open(file, 'r') as file:
        temp = file.readline()
	split = temp.split(" ")
        prev = split[0]
       	print(prev)
	return prev

def update_prev_host(data):
    file='./previousHost.txt'
    with open(file, 'w') as filetowrite:
        filetowrite.write(data)
	
# Driver code
IPADR = get_Host_name_IP() #Function call
OLDIPADR = get_prev_Host()
# Read in the file
if (IPADR != OLDIPADR):
    with open('./frontend/src/Chat.js', 'r') as file :
        filedata = file.read()

    # Replace the target string
    filedata = filedata.replace(OLDIPADR, IPADR)

# Write the file out again
    with open('./frontend/src/Chat.js', 'w') as file:
        file.write(filedata)

    with open('./frontend/src/LiveStream.js', 'r') as file :
        filedata = file.read()

    # Replace the target string
    filedata = filedata.replace(OLDIPADR, IPADR)

# Write the file out again
    with open('./src/LiveStream.js', 'w') as file:
        file.write(filedata)
       
    update_prev_host(IPADR)

