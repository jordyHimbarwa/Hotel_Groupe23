# Image Similarity Search

## Overview

This project implements an image similarity search based on color histograms. The similarity search compares a query image to a dataset of images, ranking them based on their color histogram similarities.

## Features

- **ColorImage Class:**
    - Represents an image with color information.
    - Supports reading images in JPG and PPM formats.
    - Provides methods for obtaining image dimensions, pixel values, and color reduction.

- **ColorHistogram Class:**
    - Represents the color histogram of an image.
    - Supports construction from a ColorImage or loading from a text file.
    - Provides methods for associating an image, getting the normalized histogram, comparing with another histogram, and saving to a text file.

- **SimilaritySearch Class:**
    - Performs image similarity search using color histograms.
    - Accepts a query image file and an image dataset directory as command-line arguments.
    - Ranks dataset images based on their color histogram similarities to the query image.
    - Prints the top 5 similar images.

## Usage


To run the image similarity search, use the following command:

```bash
java SimilaritySearch <queryImageFile> <imageDatasetDirectory>
```

- `<queryImageFile>`: The filename of the query image.
- `<imageDatasetDirectory>`: The directory containing the dataset images.

## STUDENT NAME: ELIEL BEONAO
## STUDENT NUMBER: 300326742