#!/usr/bin/python
# coding: utf8


import os, sys

import csv
import json


# reading json files, adding the csv content, output = json files updated

print("Usage = a .csv then a .json file in argument, usually 'csv_PRO.csv' then 'TreeFeaturesNEW_EN_and_FR.json'")

PLEASE_QUIT = False

if len(sys.argv) == 3:
    THE_PATH_OF_THE_CSV_FILE = sys.argv[1]
    THE_PATH_OF_THE_JSONFILE = sys.argv[2]
else:
    print("/!\ There should be 2 arguments, but only %s argument(s) detected" % (len(sys.argv) -1))
    PLEASE_QUIT = True

if not PLEASE_QUIT:
    if not os.path.isfile(THE_PATH_OF_THE_CSV_FILE):
        print("THE_PATH_OF_THE_CSV_FILE", THE_PATH_OF_THE_CSV_FILE, "does not exists or is not a file")
        PLEASE_QUIT = True
    if not os.path.isfile(THE_PATH_OF_THE_JSONFILE):
        print("THE_PATH_OF_THE_JSONFILE", THE_PATH_OF_THE_JSONFILE, "does not exists or is not a file")
        PLEASE_QUIT = True

if PLEASE_QUIT:
    print("Usage incorrect -> Stop")
    sys.exit(1)


