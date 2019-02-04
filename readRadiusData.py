import json

def readDataR(myFile, writeToHere):
	txt = open(str(myFile), "r")

	written = open(str(writeToHere), "w")

	data = txt.readlines()

	txt.close()

	for line in data:

		cur = line.split()
		string = '{"number":"' + cur[0] + '", "grTruth":"' + cur[1] + '", "src":"inputData/radius/' + cur[0] + '_TE_radius.jpg" },' + "' +\n"
		string = "'" + string
		written.write(string)
		#print(string)

	written.close()

def readDataT(myFile, writeToHere):
	txt = open(str(myFile), "r")

	written = open(str(writeToHere), "w")

	data = txt.readlines()

	txt.close()

	for line in data:

		cur = line.split()
		string = '{"number":"' + cur[0] + '", "grTruth":"' + cur[1] + '", "src":"inputData/tibia/' + cur[0] + '_TE_tibia.jpg" },' + "' +\n"
		string = "'" + string
		written.write(string)
		#print(string)

	written.close()

def readSetDataR(myFile, writeToHere):
	txt = open(str(myFile), "r")

	written = open(str(writeToHere), "w")

	data = txt.readlines()

	txt.close()

	first = True

	for line in data:

		cur = line.split()
		string = cur[0]
		if (string[len(string) - 1] == 'E'):
			count = string[:len(string) - 1]
			hello = "var set" + count + "TextTE =" + "'" + '{"imageNums":["dummy", ' #"20", "12", "56", "13", "23", "2", "24", "15"]}';
			lineup = 1
		else:
			if (lineup == 8):
				hello = hello + '"' + string + '"]}' + "';\n"
				written.write(hello)
			else:
				hello = hello + '"' + string + '", '
				lineup += 1
			#print(string)
		#written.write(string)

	written.close()

""" writeToHere = file to write, topNum = yes, rOrT = string use 'radius' or 'tibia' """
def makeImgTxt(writeToHere, topNum, rOrT):

	written = open(str(writeToHere), "w")

	count = 1
	while (count <= topNum):
		myString = rOrT + "Images[" + str(count) + "] = new Image();\n"
		written.write(myString)
		myString = rOrT + "Images[" + str(count) + "].src = jsonTImages.tibiae[" + str(count) + "].src;\n"
		written.write(myString)
		count += 1

	written.close()

""" var set1RT = JSON.parse(set1TextRT);"""
def parseSets(writeHere):

	written = open(str(writeHere), "w")

	i = 1
	while (i < 16):
		string = "var set" + str(i) + "TE = JSON.parse(set" + str(i) + "TextTE);\n"
		written.write(string)
		i += 1

	written.close()
""" allSetsR[1] = set1RT; """
def declareSets(writeHere):

	written = open(str(writeHere), "w")

	i = 1
	while (i < 16):
		string = "allSetsRT[" + str(i) +"] = set" + str(i) + "RT;\n"
		written.write(string)
		i += 1

	written.close()

""" read pixel info for MYFILE. NUMIMAGES is the number of images you have data for/want to read the data from. """
def readPixelInfo(myFile, writeHere):

	txt = open(str(myFile), "r")

	data = txt.readlines()
	i = 0
	while i < len(data):
		data[i] = data[i].split()
		i += 1

	written = open(str(writeHere), "w")
	written.write(json.dumps(data))


#readDataR("inputData/radius/groundTruth.txt", "jsonRtext.txt")
#readDataT("inputData/tibia/groundTruth.txt", "jsonTtext.txt")

#readSetDataR("inputData/tibia/setsEvaluation.txt", "temp.txt")

#parseSets("temp.txt")
#declareSets("temp.txt")

#makeImgTxt("temp.txt", 112, "tibia")