---
date: '2020-05-01'
title: 'Visual Question Answering'
github: 'https://github.com/johncai117/VQA-Project'
external: 'https://www.academia.edu/44232933/Visual_Question_Answering_using_LSTM_and_ResNet'
tech:
  - Python
  - PyTorch
  - FastText
  - Computer Vision
  - Natural Language Processing
company: Princeton University
showInProjects: True
---

Used a pre-trained FastText model to extract word embeddings from the questions followed by a bi-directional LSTM to convert the sentences into sentence vectors. Applied a ResNet101 model to extract image features, and combined the image and sentence vectors into another neural network.
